import { CardContainer, TeamsContainer, TitleLiga, AllTableLink } from "./style";
import { useLeagueData } from "../../hooks/useLeagueData";
import { useStandings } from "../../hooks/useStandings";
import { useSelector } from "react-redux";

const TablaPosiciones = () => {
	const val = useSelector((reducer) => reducer.CurrentPositionReducer);

	const ligas = useLeagueData(val?.data?.prov);

	const posiciones = useStandings(ligas ? ligas[0].league.id : null);

	if (!posiciones)
		return (
			<CardContainer>
				<TitleLiga>Posiciones - S / D </TitleLiga>

				<TeamsContainer>
					{" "}
					<TitleLiga>No hay info</TitleLiga>{" "}
				</TeamsContainer>
			</CardContainer>
		);

	return (
		<CardContainer>
			<TitleLiga>Posiciones - {posiciones[0].league.name}</TitleLiga>
			<AllTableLink to={`/standings/${posiciones[0].league.id}`}> Detalles </AllTableLink>
			<TeamsContainer>{posiciones?.length ? <DataFC posiciones={posiciones} /> : <TitleLiga>No hay info</TitleLiga>}</TeamsContainer>
		</CardContainer>
	);
};

export const TablaPosicionesByLeagueId = ({ ligaId }) => {
	const posiciones = useStandings(ligaId);

	if (!posiciones) return <></>;

	return (
		<CardContainer>
			<TitleLiga>Posiciones - {posiciones[0].league.name} </TitleLiga>
			<AllTableLink to={`/standings/${ligaId}`}> Detalles </AllTableLink>
			<TeamsContainer>{posiciones?.length ? <DataFC posiciones={posiciones} /> : <TitleLiga>No hay info</TitleLiga>}</TeamsContainer>
		</CardContainer>
	);
};

const DataFC = ({ posiciones }) => {
	const [
		{
			league: {
				standings: [main],
			},
		},
	] = posiciones;

	const mainShallow = [...main];

	return mainShallow.splice(0, 5).map((val) => {
		return (
			<figure key={val.team.id}>
				<img src={`https://media.api-sports.io/football/teams/${val.team.id}.png`} alt="team-logo" />

				<div> {val.rank} </div>
			</figure>
		);
	});
};

export default TablaPosiciones;
