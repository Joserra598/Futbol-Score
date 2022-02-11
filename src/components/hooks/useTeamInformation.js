import { useState } from "react";
import { useEffect } from "react";

export const useTeamInformation = (teamId) => {
	const [team, setTeam] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				if (!teamId) throw new Error("Es necesario un Código de equipo");

				const data = await fetch(`https://api-football-v1.p.rapidapi.com/v3/teams?id=${teamId}`, {
					method: "GET",
					headers: {
						"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
						"x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY_API_FOOTBALL,
					},
				});
				const result = await data.json();

				localStorage.setItem(`${teamId}${date}team`, JSON.stringify(result.response));
				setTeam([...result.response]);
			} catch (error) {
				console.log(error);
			}
		};

		if (!teamId) return;

		const date = new Date().getDate();
		const team = JSON.parse(localStorage.getItem(`${teamId}${date}team`));

		if (team) setTeam(team);
		else getData();
	}, [teamId]);

	return team;
};
