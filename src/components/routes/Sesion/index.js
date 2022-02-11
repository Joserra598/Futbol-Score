import { MainSesionFC, GroupSections, Section, ValidButton } from "./style";
import LoginApp from "../../Login";
import SingIn from "../../SingIn";
import FiguresLogIn from "../../Login/FiguresForLogIn";
import PreferenciasForm from "../../SingIn/PreferenciasForm";
import { useSelector } from "react-redux";
import { auth, db } from "../../../database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Sesion = () => {
	const { status } = useSelector((reducer) => reducer.sesionTypeReducer);
	const sesionData = useSelector((reducer) => reducer.dataSesionReducer);
	const navigate = useNavigate();
	// console.log(status);

	// Primero tengo hacer que el usuario se pueda logear;

	const handleSesionStart = () => {
		if (status) handleSingIn();
		else handleLogIn();
	};

	const handleSingIn = async () => {
		const { ids, ...rest } = { ...sesionData };
		const allValues = Object.values({ ...ids, ...rest });
		const someValueFalsy = allValues.some((value) => !!value === false);
		if (someValueFalsy) return;

		// console.log(ids);

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, sesionData.correo, sesionData.password);

			await setDoc(doc(db, `${userCredential.user.uid}`, "preferidos"), { ...ids });

			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogIn = async () => {
		if (!sesionData.correo || !sesionData.password) return;
		try {
			await signInWithEmailAndPassword(auth, sesionData.correo, sesionData.password);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<MainSesionFC>
			<GroupSections>
				<Section>
					{" "}
					<div> {status ? <SingIn /> : <LoginApp />} </div>{" "}
				</Section>
				<Section>
					{" "}
					<div> {status ? <PreferenciasForm /> : <FiguresLogIn />} </div>{" "}
				</Section>
			</GroupSections>

			{/* Dependiendo del estatus este boton funciona diferente */}
			<ValidButton onClick={handleSesionStart}> {status ? "Registrarse" : "Entrar"} </ValidButton>
		</MainSesionFC>
	);
};

export default Sesion;
