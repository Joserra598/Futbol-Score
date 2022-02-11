import { TitleContry, TournamentTag, TagsContainer } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useLeagueData } from "../../hooks/useLeagueData";
import { useNavigate } from "react-router-dom";

const TournamentsByContry = () => {
	const params = useParams();

	const ligasByCode = useLeagueData(params.code);

	if (!ligasByCode) return <h2>No puedo mostrar información</h2>;

	return (
		<>
			<TitleContry> {ligasByCode.length ? ligasByCode[0].country.name : "Sin Info"} </TitleContry>

			<TagsContainer>{ligasByCode.length ? ligasByCode.map((val) => <Tournament key={val.league.id} league={val.league} />) : <h2>No hay contenido aquí</h2>}</TagsContainer>
		</>
	);
};

const Tournament = ({ league }) => {
	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate(`/standings/${league.id}`);
	};

	return (
		<TournamentTag>
			<img src={`https://media.api-sports.io/football/leagues/${league.id}.png`} alt="logo-torneo" />
			<h2> {league.name} </h2>
			<div onClick={handleNavigation}>
				{" "}
				<FontAwesomeIcon icon={faAngleRight} />
			</div>
		</TournamentTag>
	);
};

export default TournamentsByContry;
