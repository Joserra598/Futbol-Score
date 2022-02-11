import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleLiga = styled.h2`
	font-family: var(--fn-secundary);
	font-weight: 500;
	color: var(--primary-color-200);
	font-size: clamp(1rem, 1vw + 1rem, 1.3rem);
`;

export const CardContainer = styled.div`
	width: 95%;
	max-width: 28rem;
	/* outline: 1px solid red; */
	/* max-height: 5rem; */
	padding: 0.5rem 1rem;
	background-color: var(--primary-color-100);
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
	border-radius: 0.7em;
	display: grid;
	grid-template-columns: 80% auto;
	gap: 1rem;
`;

export const TeamsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	overflow: hidden;
	overflow-x: hidden;
	grid-row: 2;
	grid-column: 1 / span 2;
	padding: 0.5rem 0;

	&:hover {
		overflow-x: scroll;
	}

	& > figure {
		height: 4rem;
		aspect-ratio: 1;
		/* outline: 1px solid red; */
		border-radius: 50%;
		display: grid;
		place-items: center;
		position: relative;

		& > img {
			max-width: 95%;
		}

		& > div {
			position: absolute;
			bottom: -5%;
			right: -10%;
			background-color: var(--secundary-color-100);
			padding: 0.5em;
			height: 2rem;
			aspect-ratio: 1;
			display: grid;
			place-content: center;
			border-radius: 50%;
			color: white;
			font-family: var(--fn-primary);
			font-weight: bold;
			font-size: 1.2rem;
			box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
		}
	}
`;

export const AllTableLink = styled(Link)`
	align-self: center;
	justify-self: center;
	text-decoration: none;
	font-family: var(--fn-secundary);
	font-weight: 500;
	color: var(--secundary-color-300);

	grid-row: 1;
	grid-column: 2;

	transition: transform 0.2s ease, opacity 0.2s ease;

	&:hover {
		transform: scale(0.9);
		opacity: 0.8;
	}
`;
