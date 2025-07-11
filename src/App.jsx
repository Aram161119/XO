import Field from '@/components/field/Field';
import Info from '@/components/information/Info';
import { resetGame } from '@/redux/actions';
import { store } from '@/redux/store';
import { useEffect, useState } from 'react';
import AppLayout from './AppLayout';

export default function App() {
	const [gameState, setGameState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setGameState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const status = gameState.winner
		? `Winner: ${gameState.winner}`
		: gameState.isDraw
			? 'Draw!'
			: `Next player: ${gameState.currentPlayer}`;

	const startNewGame = () => {
		store.dispatch(resetGame());
	};

	return (
		<AppLayout startNewGame={startNewGame}>
			<Info text={status} currentPlayer={gameState.currentPlayer} />
			<Field />
		</AppLayout>
	);
}
