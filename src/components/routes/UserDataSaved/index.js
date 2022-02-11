import { useParams, useNavigate, Navigate } from "react-router-dom";
import TeamOverView from "../../Team-overview";
import PlayerOverview from "../../Player-overview";

import { Container, OptionsSection, Pestaña, CardResumeCard, Subtitle } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../database/";

const UserDateSaved = () => {
	const [ids, setIds] = useState({});
	const { id } = useParams();
	const item = JSON.parse(localStorage.getItem("auth"));

	const navigation = useNavigate();

	const { user } = useSelector((reducer) => reducer.authUserInformation);

	useEffect(() => {
		const getUserLiked = async () => {
			if (!user) return;

			const docRef = doc(db, `${user.uid}`, "preferidos");
			try {
				const docSnap = await getDoc(docRef);
				setIds({ ...docSnap.data() });
				// console.log("Document data:", docSnap.data());
			} catch (error) {
				console.log("No pude econtrar lo que estas buscando");
			}
		};

		getUserLiked();
	}, [user]);

	if (id !== item.user.uid) return <Navigate to="/" />;

	const handleSingOut = async () => {
		try {
			await auth.signOut();
			navigation(`/`);
		} catch (error) {
			console.log("there was an error I can sing out, try again");
		}
	};

	return (
		<Container>
			<button onClick={handleSingOut}>Log Out</button>
			<TeamOverView teamId={ids.teamId} />
			<PlayerOverview playerId={ids.playerId} />
			<Subtitle>Tus favoritos</Subtitle>

			<OptionsSection>
				<Pestaña className="active">Equipo</Pestaña>
				<Pestaña className="inactive">Jugadores</Pestaña>
				<div>
					<CardResumeFC />

					<CardResumeFC />

					<CardResumeFC />

					<CardResumeFC />
				</div>
			</OptionsSection>
		</Container>
	);
};

const CardResumeFC = () => {
	// id, name
	return (
		<CardResumeCard>
			<img src="https://media.api-sports.io/football/teams/50.png" alt="player-team-logo" />
			<h3>Cruz Azul</h3>
			<FontAwesomeIcon icon={faAngleRight} />
		</CardResumeCard>
	);
};

export default UserDateSaved;
