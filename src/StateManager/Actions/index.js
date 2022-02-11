export const setCredentials = (correo, password) => {
	return { type: "SET_CREDENTIALS", payload: { correo, password } };
};

export const setIds = (teamId, playerId, ligaId) => {
	console.log(teamId, playerId, ligaId);
	return { type: "SET_IDS", payload: { teamId, playerId, ligaId } };
};
