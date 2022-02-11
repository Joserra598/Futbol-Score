import { ContriesContainer, TitleContrieLeagues, FormContries, FlagContainer, CardContainer } from "./style";
import { getArrayOfRandomNumbers } from "../../helpers/getRandomNumber";
import { useGetContries } from "../hooks/useGetContries";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const ContrieLeagues = () => {
	const [contryName, setCountry] = useState("");
	const input = useRef(null);

	const values = useGetContries(contryName);

	const handleSubmitForm = (e) => {
		e.preventDefault();
		setCountry(input.current.value);
	};

	const findByName = () => {
		const country = values.find((element) => element.name.toLowerCase() === contryName.toLowerCase());
		if (!country) return <h2> No hay resultados para tu busqueda </h2>;
		return <ContryInformation key={`${country.code}`} country={country} />;
	};

	const random = () => {
		const random = getArrayOfRandomNumbers(12, values.length);
		return random.map((position, i) => <ContryInformation key={`${i}`} country={values[position]} />);
	};

	if (!values) return <h2>Esperando respuesta</h2>;
	if (!values.length) return <h2>Esperando...</h2>;

	return (
		<ContriesContainer>
			<TitleContrieLeagues>Ligas por país</TitleContrieLeagues>
			<FormContries onSubmit={handleSubmitForm}>
				<input type="text" placeholder="Escribe un país" ref={input} />
				<button type="submit"> Buscar </button>
			</FormContries>

			<CardContainer>{contryName ? findByName() : random()}</CardContainer>
		</ContriesContainer>
	);
};

const ContryInformation = ({ country }) => {
	if (!country) return <></>;

	const { name, flag, code } = country;

	console.log("El Id del country", code);

	return (
		<FlagContainer>
			<img src={flag} alt="flag-contrie-img" />

			<h2> {name} </h2>

			<Link to={`/tournamentbycountry/${code}`}>Ver más</Link>
		</FlagContainer>
	);
};

export default ContrieLeagues;
