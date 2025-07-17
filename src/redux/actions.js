export const makeMove = (index) => ({
	type: 'MAKE_MOVE',
	payload: { index },
});

export const RESET_GAME = {
	type: 'RESET_GAME',
};
