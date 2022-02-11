import styled from "styled-components";

export const Container = styled.main`
	display: grid;
	grid-auto-rows: max-content;
	gap: 2rem;
	width: 100%;
	max-width: 28rem;
	justify-content: center;
	min-height: 100vh;

	& > button {
		background-color: white;
		outline: 2px solid red;
		border-radius: 0.5em;
		padding: 0.2em 1.2em;
		font-family: var(--fn-secundary);
		font-weight: 400;
		font-size: clamp(1rem, 3vw + 1rem, 1.2rem);
		border: none;
		transition: all ease 500ms;
		max-width: 12rem;
		margin-left: auto;
		&:hover {
			background-color: red;
			color: white;
			cursor: pointer;
		}
	}
`;

export const Subtitle = styled.h2`
	font-family: var(--fn-secundary);
	font-size: clamp(1.4rem, 4vw + 1rem, 1.8rem);
	font-weight: 500;
	color: var(--primary-color-200);
`;

export const OptionsSection = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: max-content;

	& > :last-child {
		grid-column: 1 / span 2;
		background-color: var(--primary-color-50);
		padding: 2em 0;
		display: grid;
		justify-items: center;
		gap: 2rem;
		border-radius: 0 0 0.4em 0.4em;
		/* outline: 1px solid red; */
	}
`;

export const Pestaña = styled.div`
	display: grid;
	place-items: center;
	padding: 0.5em 0;
	font-family: var(--fn-secundary);
	font-weight: 700;
	font-size: clamp(1.2rem, 1vw + 1rem, 1.5rem);
	border-radius: 0.4em 0.4em 0 0;
	/* outline: 1px solid red; */

	&.active {
		background-color: var(--secundary-color-100);
		color: white;
	}

	&.inactive {
		background-color: var(--primary-color-150);
		color: var(--primary-color-200);
	}
`;

export const CardResumeCard = styled.div`
	min-width: 90%;
	background-color: var(--primary-color-100);
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0.5em 0;
	border-radius: 0.8em;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);

	transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);

	&:hover {
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0);
		cursor: pointer;
	}

	& > img {
		height: 3rem;
		aspect-ratio: 1;
		object-fit: cover;
	}

	& > h3 {
		font-family: var(--fn-secundary);
		font-weight: 500;
		font-size: clamp(1.3rem, 5vw + 1rem, 1.5rem);
	}

	& > svg {
		font-size: clamp(1.5rem, 3vw + 1rem, 2rem);
	}
`;
