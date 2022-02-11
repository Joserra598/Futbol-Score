const initial = {
	correo: "",
	password: "",
	ids: { teamId: "", playerId: "", ligaId: "" },
};

export const dataSesionReducer = (estado = initial, action) => {
	switch (action.type) {
		case "SET_CREDENTIALS":
			return { ...estado, correo: action.payload.correo, password: action.payload.password };

		case "SET_IDS":
			const { teamId, playerId, ligaId } = action.payload;
			return { ...estado, ids: { teamId, playerId, ligaId } };

		case "RESET":
			return { ...initial };

		default:
			return { ...estado };
	}
};
