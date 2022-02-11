import { CardContainer } from "../Team-overview/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { usePlayerData } from "../hooks/usePlayerData";
import { Link } from "react-router-dom";

// todo: title, subtitle, extra, id

const PlayerOverview = ({ playerId }) => {
	const player = usePlayerData(playerId);

	if (!player) return <></>;

	// console.log(player);

	const [
		{
			player: { age, name, id },
			statistics: [
				{
					team: { name: teamName },
				},
			],
		},
	] = player;

	return (
		<CardContainer>
			<img src={`https://media.api-sports.io/football/players/${id}.png`} alt="player-img" />
			<label className="first">Jugador Favorito:</label>
			<h2> {name} </h2>
			<h3 className="first">
				Edad: <p> {age} </p>{" "}
			</h3>
			<label className="second"> Equipo: </label>
			<h3 className="second"> {teamName} </h3>
			<Link to={`/player/${id}`}>
				{" "}
				más <FontAwesomeIcon icon={faArrowCircleRight} />{" "}
			</Link>
		</CardContainer>
	);
};

export default PlayerOverview;
