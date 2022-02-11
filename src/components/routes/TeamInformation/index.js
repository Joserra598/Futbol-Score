import { HeaderCardInformation, ParentContainer, EstadioInformation, Subtitle, PlayersContainer, CardPlayer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTeamInformation } from "../../hooks/useTeamInformation";
import { usePlayersTeam } from "../../hooks/usePlayersTeam";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TeamInformation = () => {
	const param = useParams();
	const navigation = useNavigate();

	const informationTeam = useTeamInformation(param.id);
	const playersByTeam = usePlayersTeam(param.id);

	if (!informationTeam || !playersByTeam) return <h2>No se consiguieron los datos</h2>;
	if (!informationTeam.length || !playersByTeam.length) return <h2>Intenta más tarde...</h2>;

	// console.log(informationTeam, playersByTeam);
	const [{ team, venue }] = informationTeam;
	const [{ players }] = playersByTeam;

	// console.log(players);

	const getInKilo = (capacity) => (capacity / 1000).toFixed(0);

	const handleNavigation = (id) => {
		console.log("El id al que te quieres mover es. ", id);
		navigation(`/player/${id}`);
	};

	return (
		<ParentContainer>
			<HeaderCardInformation>
				<img src={`https://media.api-sports.io/football/teams/${team.id}.png`} alt="team?player" />
				<h2> {team.name} </h2>
				<label> {team.code} </label>
				<h4>
					{" "}
					desde: <p> {team.founded} </p>{" "}
				</h4>
				<h3>
					{" "}
					pais: <p> {team.country} </p>{" "}
				</h3>
			</HeaderCardInformation>

			<EstadioInformation>
				<Subtitle>Estadio</Subtitle>
				<h3> {venue.name} </h3>
				<h4>
					{" "}
					Capacidad: <p> {getInKilo(venue.capacity)}k </p>{" "}
				</h4>
				<img src={`https://media.api-sports.io/football/venues/${venue.id}.png`} alt="estadio-img" />
				<blockquote>
					{" "}
					Ciudad: <p> {venue.city} </p>{" "}
				</blockquote>
			</EstadioInformation>

			<PlayersContainer>
				<Subtitle> Jugadores</Subtitle>

				{players.map((player) => (
					<CardFc key={player.id} data={player} handleNavigation={handleNavigation} />
				))}
			</PlayersContainer>
		</ParentContainer>
	);
};

const CardFc = ({ data, handleNavigation }) => {
	// id, name, position
	const { id, name, position } = data;

	return (
		<CardPlayer key={id} onClick={() => handleNavigation(id)}>
			<img src={`https://media.api-sports.io/football/players/${id}.png`} alt="player-img" />
			<div>
				<h2> {name} </h2>
				<p> {position} </p>
			</div>
			<FontAwesomeIcon icon={faAngleRight} />
		</CardPlayer>
	);
};

export default TeamInformation;
