import { WIN_PATTERNS } from '../staticData';

export const initialState = {
	board: Array(9).fill(null),
	currentPlayer: 'X',
	winner: null,
	isDraw: false,
};

export const ticTacToeReducer = (state = initialState, action) => {
	const { type, payload } = action;

	const makeMove = () => {
		if (state.board[payload.index] || state.winner) {
			return state;
		}

		const newBoard = [...state.board];
		newBoard[payload.index] = state.currentPlayer;

		let winnerLine = [];

		const winner = WIN_PATTERNS.reduce((acc, [a, b, c]) => {
			if (
				newBoard[a] &&
				newBoard[a] === newBoard[b] &&
				newBoard[a] === newBoard[c]
			) {
				winnerLine = [a, b, c];
				return newBoard[a];
			}
			return acc;
		}, null);

		const isDraw = !winner && newBoard.every((item) => item !== '' && item !== null);

		return {
			...state,
			board: newBoard,
			currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
			winner,
			isDraw,
			winnerLine,
		};
	};

	switch (type) {
		case 'MAKE_MOVE':
			return makeMove();
		case 'RESET_GAME':
			return initialState;
		default:
			return state;
	}
};
