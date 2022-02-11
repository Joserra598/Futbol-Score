import { useRef, useState } from "react";
import { useGetContries } from "../hooks/useGetContries";
import { useLeagueData } from "../hooks/useLeagueData";
import { usePlayersTeam } from "../hooks/usePlayersTeam";
import { useStandings } from "../hooks/useStandings";
import { InputForm, SecundarySectionTitle, SearchButton, SelectLogIn, VerifyButton } from "../routes/Sesion/style";
import { setIds } from "../../StateManager/Actions";
import { useDispatch } from "react-redux";

const PreferenciasForm = () => {
	const [contryCode, setCountryCode] = useState("");
	const [teamsId, setTeamsId] = useState("");
	const [teamId, setTeamId] = useState("");
	const [playerId, setPlayerId] = useState("");
	const input = useRef(null);
	const contries = useGetContries();
	const leagues = useLeagueData(contryCode);
	const teams = useStandings(teamsId);
	const playersByTeam = usePlayersTeam(teamId);

	const dispatch = useDispatch();

	const handleSearch = () => {
		if (!input.current) return;
		const { value: textInput } = input.current;
		const country = contries.find((element) => element.name.toLowerCase() === textInput.toLowerCase());
		if (!country) return setCountryCode("");
		setCountryCode(country.code);
	};

	const handleChange = (e) => {
		// if (!e.target.value) return;
		switch (e.target.name) {
			case "league":
				setTeamsId(e.target.value);
				console.log("el id que atrape fue", e.target.value);
				break;

			case "team":
				setTeamId(e.target.value);
				console.log("el id es de un equipo", e.target.value);
				break;

			case "players":
				setPlayerId(e.target.value);
				console.log("atrape el id del jugador", e.target.value);
				break;

			default:
				break;
		}
	};

	const validarIds = () => {
		if (!teamsId || !teamId || !playerId) return false;
		dispatch(setIds(teamId, playerId, teamsId));
	};

	return (
		<>
			<SecundarySectionTitle> Seleciona tus favoritos</SecundarySectionTitle>

			<InputForm ref={input} type="text" placeholder="Escribe el país" />
			<SearchButton onClick={handleSearch}>Buscar</SearchButton>

			{leagues && <SelectFC nameSelect={"league"} data={leagues} change={handleChange} />}

			{leagues && teams && <SelectFC nameSelect={"team"} data={teams[0].league.standings[0]} change={handleChange} />}

			{leagues && teams && playersByTeam && <PlayerSelectFC nameSelect={"players"} data={playersByTeam[0].players} change={handleChange} />}

			<VerifyButton onClick={validarIds}>verify</VerifyButton>
		</>
	);
};

const SelectFC = ({ nameSelect, data, change }) => {
	// console.log(data);

	return (
		<SelectLogIn name={`${nameSelect}`} onChange={change}>
			<option key={"first-Option"} value="">
				{" "}
				{nameSelect}{" "}
			</option>
			{data.map((item) => (
				<option key={item[`${nameSelect}`].id} value={`${item[`${nameSelect}`].id}`}>
					{" "}
					{item[`${nameSelect}`].name}{" "}
				</option>
			))}
		</SelectLogIn>
	);
};

const PlayerSelectFC = ({ nameSelect, data, change }) => {
	// console.log(data);

	return (
		<SelectLogIn name={`${nameSelect}`} onChange={change}>
			<option key={"first-Option"}> {nameSelect} </option>
			{data.map((item) => (
				<option key={item.id} value={`${item.id}`}>
					{" "}
					{item.name}{" "}
				</option>
			))}
		</SelectLogIn>
	);
};

export default PreferenciasForm;
