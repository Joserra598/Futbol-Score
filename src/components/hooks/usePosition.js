import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const usePosition = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCurrentPosition = () => {
			return new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					(pos) => {
						resolve(pos);
					},
					(err) => {
						reject(err);
					}
				);
			});
		};

		const test = async () => {
			try {
				const positionData = await getCurrentPosition();
				const { latitude, longitude } = positionData.coords;
				// console.log(latitude, longitude);
				const result = await fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`);

				const values = await result.json();
				if (values.success === false) throw new Error("Usaste el limite de llamadas");

				// console.log(values);

				dispatch({ type: "CHANGE_LOCATION", payload: { coords: { latitude, longitude }, values } });
			} catch (error) {
				console.log(error);
			}
		};

		test();
	}, [dispatch]);

	return null;
};
