import { useEffect, useState } from "react";

export function useLeagueData(contryCode) {
	const [leagues, setLeagues] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				if (!contryCode) throw new Error("Error en el código país");

				const data = await fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?code=${contryCode}`, {
					method: "GET",
					headers: {
						"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
						"x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY_API_FOOTBALL,
					},
				});

				console.log(data);

				const result = await data.json();

				localStorage.setItem(`${contryCode.toUpperCase()}${date}leagues`, JSON.stringify(result.response));
				setLeagues([...result.response]);
			} catch (error) {
				console.log(error);
			}
		};

		// console.log("el codigo es: ", contryCode);

		if (!contryCode) return;
		const date = new Date().getDate();
		const standings = JSON.parse(localStorage.getItem(`${contryCode.toUpperCase()}${date}leagues`));

		if (standings) setLeagues(standings);
		else getData();
	}, [contryCode]);

	return leagues;
}
