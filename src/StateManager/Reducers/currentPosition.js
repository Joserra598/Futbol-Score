const initialEstate = {
	coords: { latitude: null, longitude: null },
	data: null,
};

export const CurrentPositionReducer = (estado = initialEstate, action) => {
	switch (action.type) {
		case "CHANGE_LOCATION":
			return { ...estado, coords: { ...action.payload.coords }, data: { ...action.payload.values } };

		default:
			return { ...estado };
	}
};
