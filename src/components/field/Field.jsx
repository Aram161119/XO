import { makeMove } from '@/redux/actions';
import { selectBoard } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectWinnerLine } from '../../redux/selectors';
import FieldLayout from './FieldLayout';

const Field = () => {
	const board = useSelector(selectBoard);
	const winnerLine = useSelector(selectWinnerLine);

	const dispatch = useDispatch();

	const onClick = (index) => {
		dispatch(makeMove(index));
	};

	return <FieldLayout board={board} onClick={onClick} winnerLine={winnerLine} />;
};

Field.displayName = 'Field';

export default Field;
