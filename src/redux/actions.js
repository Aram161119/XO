export const makeMove = (index) => ({
	type: 'MAKE_MOVE',
	payload: { index },
});

export const resetGame = () => ({
	type: 'RESET_GAME',
});
