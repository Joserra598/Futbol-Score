import { useState } from "react";
import { useEffect } from "react";

export const useStandings = (leagueId) => {
	const [standing, setStandings] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				if (!leagueId) throw new Error("No hay codigo de liga");

				const data = await fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=${leagueId}`, {
					method: "GET",
					headers: {
						"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
						"x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY_API_FOOTBALL,
					},
				});
				const result = await data.json();
				console.log(result);

				localStorage.setItem(`${leagueId}${date}league`, JSON.stringify(result.response));
				setStandings([...result.response]);
			} catch (error) {
				console.log(error);
			}
		};

		if (!leagueId) return;

		const date = new Date().getDate();
		const standings = JSON.parse(localStorage.getItem(`${leagueId}${date}league`));

		if (standings) setStandings(standings);
		else getData();
	}, [leagueId]);

	return standing;
};
