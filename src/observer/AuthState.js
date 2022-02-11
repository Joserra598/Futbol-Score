import { auth } from "../database";
import { onAuthStateChanged } from "firebase/auth";

export const ObserverAuthState = (dispatch) => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			dispatch({ type: "LOG_IN", payload: { user } });
			localStorage.setItem("auth", JSON.stringify({ auth: true, user }));
		} else {
			dispatch({ type: "LOG_OUT" });
			localStorage.setItem("auth", JSON.stringify({ auth: false, user }));
		}
	});
};
