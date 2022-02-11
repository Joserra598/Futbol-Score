import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { SecundarySectionTitle } from "../../components/routes/Sesion/style";

const FiguresForLogin = () => {
	return (
		<>
			<SecundarySectionTitle>Ingresa tus credenciales para acceder a tu cuenta</SecundarySectionTitle>

			<FontAwesomeIcon icon={faFutbol} />
		</>
	);
};

export default FiguresForLogin;
