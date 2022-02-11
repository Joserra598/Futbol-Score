import styled from "styled-components";

export const ContriesContainer = styled.div`
	width: 95%;
	max-width: 45rem;
	/* outline: 1px solid red; */
	/* max-height: 5rem; */
	padding: 1.2rem 1rem;
	background-color: var(--primary-color-100);
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
	border-radius: 0.7em;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-height: 35rem;
	overflow: hidden;
	overflow-y: scroll;

	@media screen and (min-width: 1000px) {
		grid-area: countries;
	}
	/*  */
	/* padding: 0 4.5rem; */
	/* grid-column: 2 / span 2;
	grid-rows: 1 / 4; */
`;

export const TitleContrieLeagues = styled.h2`
	font-family: var(--fn-primary);
	font-size: clamp(2.1rem, 7vw + 1rem, 2.5rem);
	font-weight: 700;
`;

export const FormContries = styled.form`
	width: 100%;
	max-width: 22rem;
	display: flex;
	gap: 1.2rem;

	/* position: sticky;
	top: 0%;
	z-index: 5; */

	/* outline: 1px solid red; */
	background-color: white;
	padding: 1em 2em;

	& > input {
		padding: 0.5em 1em;
		font-family: var(--fn-secundary);
		font-weight: 400;
		font-size: 1rem;
		border: none;
		border-radius: 0.5em;
		color: var(--primary-color-200);
		max-width: 70%;
		outline: 2px solid var(--primary-color-200);

		&:focus {
			outline: 3px solid var(--secundary-color-300);
		}
	}

	& > button {
		flex-grow: 1;
		border: none;
		background-color: var(--secundary-color-300);
		border-radius: 0.5em;
		color: white;
		font-size: 1rem;
		font-family: var(--fn-primary);
		font-weight: 500;

		transition: scale 0.3s ease;

		&:hover {
			scale: 0.95;
			cursor: pointer;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
		}
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	gap: 2rem;
	justify-items: start;
`;

export const FlagContainer = styled.div`
	background-color: var(--primary-color-50);

	width: 100%;
	max-width: clamp(10rem, 10vw + 1rem, 12rem);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1.2fr auto;
	place-items: center;
	border-radius: 0.7em;

	gap: 1.2rem;

	position: relative;
	padding: 1em 0;

	& > img {
		max-width: 100%;
		height: 5rem;
		aspect-ratio: 1;
		border-radius: 50%;
		overflow: hidden;
		object-fit: cover;
	}

	& > h2 {
		font-family: var(--fn-secundary);
		/* font-size: clamp(1.5rem, 1vw + 1rem, 2.2rem); */
		max-width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	& > a {
		padding: 0.3em 1em;
		text-decoration: none;
		background-color: var(--secundary-color-100);
		border: none;
		border-radius: 0.5em;
		color: white;
		font-family: var(--fn-primary);
		font-weight: bold;
		font-size: clamp(0.8rem, 3vw + 1rem, 1.1rem);

		position: absolute;
		bottom: -10%;
		right: 4%;
		transition: 300ms ease scale;

		&:hover {
			scale: 0.96;
			cursor: pointer;
		}
	}
`;
