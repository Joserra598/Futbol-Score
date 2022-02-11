import { useEffect } from "react";
import { useState } from "react";

export const useGetContries = (countryName) => {
	const [contries, setCountries] = useState(null);

	// console.log(countryName, "Name pais");

	useEffect(() => {
		const getData = async () => {
			try {
				const petition = await fetch("https://api-football-v1.p.rapidapi.com/v3/countries", {
					method: "GET",
					headers: {
						"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
						"x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY_API_FOOTBALL,
					},
				});

				if (!petition.ok) throw new Error("Petición incorrecta");

				const data = await petition.json();

				localStorage.setItem(`countries`, JSON.stringify(data.response));

				setCountries([...data.response]);

				// console.log(data);
			} catch (error) {
				console.log(error);
			}
		};

		const countries = JSON.parse(localStorage.getItem(`countries`));

		if (countries) setCountries(countries);
		else getData();

		// getData();
	}, []);

	return contries;
};
