import { useState } from "react";
import { useEffect } from "react";

export const usePlayersTeam = (teamId) => {
	const [players, setPlayers] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				if (!teamId) throw new Error("Es necesario un Código de equipo");

				const data = await fetch(`https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${teamId}`, {
					method: "GET",
					headers: {
						"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
						"x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY_API_FOOTBALL,
					},
				});
				const result = await data.json();
				console.log(result);

				localStorage.setItem(`${teamId}${date}players`, JSON.stringify(result.response));
				setPlayers([...result.response]);
			} catch (error) {
				console.log(error);
			}
		};

		if (!teamId) return;

		const date = new Date().getDate();
		const players = JSON.parse(localStorage.getItem(`${teamId}${date}players`));

		if (players) setPlayers(players);
		else getData();
	}, [teamId]);

	return players;
};
