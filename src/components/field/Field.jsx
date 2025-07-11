import { makeMove } from '@/redux/actions';
import { store } from '@/redux/store';
import FieldLayout from './FieldLayout';

const Field = () => {
	const { board, winnerLine } = store.getState();

	const onClick = (index) => {
		store.dispatch(makeMove(index));
	};

	return <FieldLayout board={board} onClick={onClick} winnerLine={winnerLine} />;
};

Field.displayName = 'Field';

export default Field;
