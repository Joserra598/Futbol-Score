import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validEmail, validPassword } from "../../helpers/validSingInData";
import { setCredentials } from "../../StateManager/Actions";
import { FigureButton, InputForm, LabelInput, VerifyButton } from "../routes/Sesion/style";

const LoginApp = () => {
	const [veryfy, setVerify] = useState(false);
	const dispatch = useDispatch();
	const email = useRef(null);
	const pass = useRef(null);

	const handleChange = () => {
		dispatch({ type: "TO_SING_IN" });
	};

	const validData = () => {
		const { current: emailT } = email;
		const { current: passT } = pass;
		if (!emailT || !passT) return false;
		const { value: emailVal } = emailT;
		const { value: passVal } = passT;
		if (!emailVal || !passVal) return false;
		if (!validEmail(emailVal)) return false;
		if (!validPassword(passVal)) return false;

		dispatch(setCredentials(emailVal, passVal));

		return true;
	};

	return (
		<>
			<FigureButton onClick={handleChange}>
				<h3>Sing In</h3>
			</FigureButton>

			<LabelInput htmlFor="">Email :</LabelInput>
			<InputForm type="text" ref={email} />

			<LabelInput htmlFor="">Contraseña :</LabelInput>
			<InputForm type="text" ref={pass} />

			{!veryfy && <VerifyButton onClick={() => setVerify(validData)}>verify</VerifyButton>}
		</>
	);
};

export default LoginApp;
