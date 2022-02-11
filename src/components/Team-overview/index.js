import { CardContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useTeamInformation } from "../hooks/useTeamInformation";
import { Link } from "react-router-dom";

// todo: title, subtitle, extra, id

const TeamOverView = ({ teamId }) => {
	const team = useTeamInformation(teamId);

	if (!teamId) return <></>;
	if (!team) return <></>;

	const [
		{
			team: { id, name, country },
			venue: { city },
		},
	] = team;

	return (
		<CardContainer>
			<img src={`https://media.api-sports.io/football/teams/${id}.png`} alt="team-logo-img" />
			<label className="first">Tu equipo:</label>
			<h2> {name} </h2>
			<h3 className="first">
				Ciudad : <p> {city} </p>{" "}
			</h3>
			<label className="second"> País: </label>
			<h3 className="second"> {country} </h3>
			<Link to={`/team/${id}`}>
				{" "}
				más <FontAwesomeIcon icon={faArrowCircleRight} />{" "}
			</Link>
		</CardContainer>
	);
};

export default TeamOverView;
