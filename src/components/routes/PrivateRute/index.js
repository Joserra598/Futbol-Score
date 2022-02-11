import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRute = ({ children }) => {
	const item = JSON.parse(localStorage.getItem("auth"));

	if (item.auth) return children;
	return <Navigate to="/" />;
};

export default PrivateRute;
