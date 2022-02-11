// fetch("https://api-football-v1.p.rapidapi.com/v3/players?id=276&season=2020", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "1f58fae3e8msh8823ef98aea309bp1df350jsne6b9642c27f5"
// 	}
// })

import { useEffect, useState } from "react";

export function usePlayerData(playerCode) {
	const [player, setPlayer] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				if (!playerCode) throw new Error("Error en el código del jugador");

				const data = await fetch(`https://api-football-v1.p.rapidapi.com/v3/players?id=${playerCode}&season=2021`, {
					method: "GET",
					headers: {
						"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
						"x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY_API_FOOTBALL,
					},
				});

				console.log(data);

				const result = await data.json();

				localStorage.setItem(`${playerCode}${date}player`, JSON.stringify(result.response));
				setPlayer([...result.response]);
			} catch (error) {
				console.log(error);
			}
		};

		// console.log("el codigo es: ", playerCode);

		if (!playerCode) return;
		const date = new Date().getDate();
		const player = JSON.parse(localStorage.getItem(`${playerCode}${date}player`));

		if (player) setPlayer(player);
		else getData();
	}, [playerCode]);

	return player;
}
