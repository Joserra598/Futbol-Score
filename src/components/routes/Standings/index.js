import { useParams } from "react-router-dom";
import { useStandings } from "../../hooks/useStandings";
import { SectionStyle, HeadLeague, LabelPosition, TablePositions, RowTable } from "./style";
import { useNavigate } from "react-router-dom";

const Standings = () => {
	const params = useParams();
	console.log(params);

	// el id para la liga mx es 262

	const standingsByLeague = useStandings(params.id);

	if (!standingsByLeague) return <h2>No hay resultados para tu busqueda</h2>;
	if (!standingsByLeague.length) return <h2>Vuelve intentarlo...</h2>;

	const {
		league: { id, name, standings },
	} = standingsByLeague[0];

	return (
		<SectionStyle>
			<HeadLeague>
				<h2> {name} </h2>
				<img src={`https://media.api-sports.io/football/leagues/${id}.png`} alt="logo-league-tournament" />
			</HeadLeague>
			<div>
				<LabelPosition>Posiciones</LabelPosition>

				<TablePositions>
					<HeaderTableStandings />
					<DataTablaStandings standings={standings} />
				</TablePositions>
			</div>
		</SectionStyle>
	);
};

const HeaderTableStandings = () => {
	return (
		<RowTable>
			<label>Pos</label>
			<label>Equipo</label>
			<label>pt</label>
			<label>gd</label>
			<label>jugados</label>
		</RowTable>
	);
};

const DataTablaStandings = ({ standings }) => {
	// position, name, id, estast: puntos, goles diferencia, juagados

	const navigation = useNavigate();

	const handleNavigation = (id) => {
		navigation(`/team/${id}`);
	};

	return standings[0].map((value) => {
		return (
			<RowTable key={value.team.id} onClick={() => handleNavigation(value.team.id)}>
				<p> {value.rank} </p>
				<div>
					<h2> {value.team.name} </h2>
					<img src={`https://media.api-sports.io/football/teams/${value.team.id}.png`} alt="team-logo" />
				</div>
				<p> {value.points} </p>
				<p> {value.goalsDiff} </p>
				<p> {value.all.played} </p>
			</RowTable>
		);
	});
};

export default Standings;
