import { useParams, useNavigate } from "react-router-dom";
import { usePlayerData } from "../../hooks/usePlayerData";
import { ParentContainer, HeaderCardInformation, Subtitle } from "../TeamInformation/style";
import { TeamPlayerContainer, StadisticContainer, IndividualStadistic } from "./style";

const PlayerInformation = () => {
	const params = useParams();
	const navigation = useNavigate();
	const playerById = usePlayerData(params.id);

	if (!playerById) return <h2>Sin Resultados</h2>;
	if (!playerById.length) return <h2> Revisa tu petición </h2>;

	const [data] = playerById;
	const { statistics } = data;

	const handleNavigation = (type) => {
		// console.log(statistics[0]);
		switch (type) {
			case "team":
				navigation(`/team/${statistics[0].team.id}`);
				break;

			case "liga":
				navigation(`/standings/${statistics[0].league.id}`);
				break;

			case "country":
				break;

			default:
				break;
		}
	};
	console.log(data);

	return (
		<ParentContainer>
			<HeaderCardInformation>
				<img src={`https://media.api-sports.io/football/players/${data.player.id}.png`} alt="team?player" />
				<h2> {data.player.name} </h2>
				<label> {data.statistics[0].games.position} </label>
				<h4>
					{" "}
					edad: <p> {data.player.age} </p>{" "}
				</h4>
				<h3>
					{" "}
					Nacionalidad: <p> {data.player.nationality} </p>{" "}
				</h3>
			</HeaderCardInformation>

			<TeamPlayerContainer>
				<Subtitle> Equipo</Subtitle>
				<div className="team main" onClick={() => handleNavigation("team")}>
					{" "}
					<h2> {statistics[0].team.name} </h2> <img src={`${statistics[0].team.logo}`} alt="" />{" "}
				</div>
				<div className="league sub" onClick={() => handleNavigation("liga")}>
					{" "}
					<h2> {statistics[0].league.name} </h2> <img src={`${statistics[0].league.logo}`} alt="" />{" "}
				</div>
				<div className="contry sub" onClick={() => handleNavigation("country")}>
					{" "}
					<h2>{statistics[0].league.country}</h2> <img src={`${statistics[0].league.flag}`} alt="" />{" "}
				</div>
			</TeamPlayerContainer>

			<StadisticContainer>
				<Subtitle> Estadisticas</Subtitle>
				<ValuesByStadistic statistics={statistics[0]} />
			</StadisticContainer>
		</ParentContainer>
	);
};

const ValuesByStadistic = ({ statistics }) => {
	const { team, league, ...rest } = statistics;

	const test = Object.entries(rest);

	return test.map((entrie, i) => {
		return (
			<IndividualStadistic key={i}>
				<h2> {entrie[0]} </h2>
				<AllValues values={entrie[1]} key={`${entrie[0]}`} />
			</IndividualStadistic>
		);
	});
};

const AllValues = ({ values }) => {
	const entries = Object.entries(values);

	return entries.map((entrie) => (
		<>
			{" "}
			<h3 key={entrie[0]}> {entrie[0]} </h3>
			<h3 key={entrie[1]}> {entrie[1] ? entrie[1] : "S/D"} </h3>{" "}
		</>
	));
};

export default PlayerInformation;
