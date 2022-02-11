import { Routes, Route } from "react-router-dom";
import Header from "./components/mobile/Header";
import Root from "./components/routes/root";
import TournamentByContry from "./components/routes/TournamentByContry";
import Standings from "./components/routes/Standings";
import UserDateSaved from "./components/routes/UserDataSaved";
import PlayerInformation from "./components/routes/PlayerInformation";
import TeamInformation from "./components/routes/TeamInformation";
import PrivateRoute from "./components/routes/PrivateRute";
import PublicRoute from "./components/routes/PublicRute";
import Sesion from "./components/routes/Sesion";
import styled from "styled-components";
import { ObserverAuthState } from "./observer/AuthState";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	ObserverAuthState(dispatch);

	return (
		<Routes>
			<Route
				path="/sesion"
				element={
					<PublicRoute>
						<Sesion />
					</PublicRoute>
				}
			/>

			{/* // <Route path="/sesion" element={<Sesion />} /> */}

			<Route path="/*" element={<Activities />} />
		</Routes>
	);
};

const Activities = () => {
	return (
		<ContentContainer>
			<Header />

			<Routes>
				<Route path="tournamentbycountry/:code" element={<TournamentByContry />} />
				<Route path="standings/:id" element={<Standings />} />

				<Route path="team/:id" element={<TeamInformation />} />

				<Route path="player/:id" element={<PlayerInformation />} />

				<Route
					path="user/:id"
					element={
						<PrivateRoute>
							{" "}
							<UserDateSaved />{" "}
						</PrivateRoute>
					}
				/>

				<Route path="/" element={<Root />} />
			</Routes>
		</ContentContainer>
	);
};

const ContentContainer = styled.div`
	display: grid;
	min-height: 100vh;
	justify-items: center;
	grid-auto-rows: max-content;
	gap: 1rem;
	outline: 10px solid red;
`;

export default App;
