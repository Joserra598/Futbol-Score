const init = {
	user: null,
};

export const authUserInformation = (estado = init, action) => {
	switch (action.type) {
		case "LOG_IN":
			return { ...estado, user: action.payload.user };

		case "LOG_OUT":
			return { ...estado, user: null };

		default:
			return { ...estado };
	}
};
