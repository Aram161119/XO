import { useState, useRef } from 'react';
import AppLayout from './AppLayout';
import Field from '@/components/field/Field';
import Info from '@/components/information/Info';

const initialField = ['', '', '', '', '', '', '', '', ''];
const players = { X: 'O', O: 'X' }; // for change player

export default function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(initialField);

	const childRef = useRef();

	const updateStateInFieldComponent = () => {
		childRef.current.setWinnerLineFromParent([]);
	};

	const onWalk = (newField, winner) => {
		const isDraw = !winner && newField.every((cell) => cell !== '');

		setField(newField);
		setIsGameEnded(winner || isDraw);

		isDraw && setIsDraw(isDraw);
		!winner && !isDraw && setCurrentPlayer(players[currentPlayer]);
	};

	const startNewGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setField(initialField);
		setIsDraw(false);
		updateStateInFieldComponent();
	};

	return (
		<>
			<AppLayout startNewGame={startNewGame}>
				<Info
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>
				<Field
					ref={childRef}
					field={field}
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					onWalk={onWalk}
				/>
			</AppLayout>
		</>
	);
}
