import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { HeaderStyled } from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const reducer = useSelector((reducer) => reducer.authUserInformation);
	const navigation = useNavigate();
	const { user } = reducer;
	console.log(reducer);

	const handleNavigation = () => {
		console.log(reducer.user.uid);
		if (!reducer) return navigation("/sesion");
		navigation(`/user/${reducer.user.uid}`);
		// if (reducer.user) navigation(`/user/${reducer.user.uid}`);
		// else navigation("/sesion");
	};

	const handleToHome = () => {
		navigation("/");
	};

	return (
		<HeaderStyled>
			<button onClick={handleNavigation}> {user ? "Cuenta" : "Log In"} </button>

			<h1>Futbol Score</h1>

			<div onClick={handleToHome}>
				<FontAwesomeIcon icon={faHouse} />
			</div>
		</HeaderStyled>
	);
};

export default Header;
