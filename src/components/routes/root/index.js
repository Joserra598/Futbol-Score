import TeamOverview from "../../Team-overview";
import PlayerOverview from "../../Player-overview";
import TablaPosiciones, { TablaPosicionesByLeagueId } from "../../mobile/TablaPosiciones";
import ContrieLeagues from "../../ContrieLeagues";
// import { useEffect } from "react";
import { usePosition } from "../../hooks/usePosition";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../database/";
import { MainContainerStyled } from "./style";

const Root = () => {
	const [ids, setIds] = useState({});

	usePosition();
	const { user } = useSelector((reducer) => reducer.authUserInformation);

	// Es necesario traer los id que guardo el usuario;

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

	if (!user)
		return (
			<MainContainerStyled>
				<TablaPosiciones />
				<ContrieLeagues />
			</MainContainerStyled>
		);

	return (
		<MainContainerStyled>
			<TeamOverview teamId={ids.teamId} />
			<PlayerOverview playerId={ids.playerId} />
			<TablaPosicionesByLeagueId ligaId={ids.ligaId} />
			<ContrieLeagues />
		</MainContainerStyled>
	);
};

export default Root;
