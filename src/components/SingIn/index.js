import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FigureButton, InputForm, LabelInput, NextButton, VerifyButton } from "../routes/Sesion/style";
import { validEmail, validPassword } from "../../helpers/validSingInData";
import { setCredentials } from "../../StateManager/Actions";

const SingIn = () => {
	const [veryfy, setVerify] = useState(false);
	const email = useRef(null);
	const pass = useRef(null);
	const validPass = useRef(null);
	const dispatch = useDispatch();

	const handleChange = () => {
		dispatch({ type: "TO_LOG_IN" });
	};

	const ValidData = () => {
		const { current: emailT } = email;
		const { current: passT } = pass;
		const { current: validPassT } = validPass;

		if (!emailT || !passT || !validPassT) return false;
		const { value: emailVal } = emailT;
		const { value: passVal } = passT;
		const { value: validPassVal } = validPassT;
		if (!emailVal || !passVal || !validPassVal) return false;

		if (!validEmail(emailVal)) return false;
		if (passVal !== validPassVal) return false;
		if (!validPassword(passVal)) return false;

		dispatch(setCredentials(emailVal, passVal));

		return true;

		// si llega hasta este punto es que los datos son verdaderos
	};

	return (
		<>
			<FigureButton onClick={handleChange}>
				<h3>Log In</h3>
			</FigureButton>

			<LabelInput htmlFor="">Email :</LabelInput>
			<InputForm type="text" ref={email} />

			<LabelInput htmlFor="">Contraseña :</LabelInput>
			<InputForm type="text" ref={pass} />

			<LabelInput htmlFor="">Repetir Contraseña :</LabelInput>
			<InputForm type="text" ref={validPass} />

			{!veryfy && <VerifyButton onClick={() => setVerify(ValidData)}>verify</VerifyButton>}

			<NextButton>Siguiente</NextButton>
		</>
	);
};

export default SingIn;
