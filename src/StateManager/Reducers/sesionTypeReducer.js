const initial = {
	status: false,
};

export const sesionTypeReducer = (estado = initial, action) => {
	switch (action.type) {
		case "TO_SING_IN":
			return { ...estado, status: true };

		case "TO_LOG_IN":
			return { ...estado, status: false };

		case "RESET":
			return { ...estado, status: false };
		default:
			return { ...estado };
	}
};
