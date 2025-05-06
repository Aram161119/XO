import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';
import { useState, forwardRef, useImperativeHandle } from 'react';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const Field = forwardRef(({ field, currentPlayer, isGameEnded, onWalk }, ref) => {
	const [winnerLine, setWinnerLine] = useState([]);

	useImperativeHandle(ref, () => ({
		setWinnerLineFromParent(newState) {
			setWinnerLine(newState);
		},
	}));

	const checkWinner = (newField) => {
		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (
				newField[a] &&
				newField[a] === newField[b] &&
				newField[a] === newField[c]
			) {
				setWinnerLine(pattern);
				return true;
			}
		}

		return false;
	};

	const onClick = (index) => {
		if (field[index] !== '' || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;

		const winner = checkWinner(newField);

		onWalk(newField, winner);
	};

	return (
		<>
			<FieldLayout field={field} onClick={onClick} winnerLine={winnerLine} />
		</>
	);
});

Field.displayName = 'Field';

Field.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	onWalk: PropTypes.func,
};

export default Field;
