import Field from '@/components/field/Field';
import Info from '@/components/information/Info';
import { RESET_GAME } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from './AppLayout';
import { selectCurrentPlayer, selectIsDraw, selectWinner } from './redux/selectors';

export default function App() {
	const winner = useSelector(selectWinner);
	const isDraw = useSelector(selectIsDraw);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const dispatch = useDispatch();

	const status = winner
		? `Winner: ${winner}`
		: isDraw
			? 'Draw!'
			: `Next player: ${currentPlayer}`;

	const startNewGame = () => {
		dispatch(RESET_GAME);
	};

	return (
		<AppLayout startNewGame={startNewGame}>
			<Info text={status} currentPlayer={currentPlayer} />
			<Field />
		</AppLayout>
	);
}
