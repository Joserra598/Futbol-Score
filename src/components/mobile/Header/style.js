import styled from "styled-components";

export const HeaderStyled = styled.header`
	width: 90%;
	max-width: 55rem;
	display: grid;
	grid-auto-columns: max-content 1fr max-content;
	grid-auto-flow: column;
	place-content: center;
	place-items: center;
	column-gap: 5rem;
	min-height: 10vh;
	font-family: var(--fn-secundary);
	& > button {
		outline: 2px solid black;
		border-radius: 0.5em;
		border: none;
		padding: 0.5em 1.2em;

		font-family: var(--fn-secundary);
		font-weight: 400;
		background-color: white;
		transition: 500ms ease all;
		font-size: clamp(1.1rem, 4vw + 1.1rem, 1rem);
		&:hover {
			color: white;
			background-color: black;
			font-weight: 500;

			cursor: pointer;
		}
	}

	& > h1 {
		font-family: var(--fn-title);
		font-weight: normal;
		justify-self: start;
		font-size: clamp(1rem, 10vw + 1rem, 2rem);
	}

	& > div {
		padding: 0.5em;
		transition: 1s all cubic-bezier(0.33, 1, 0.68, 1);
		border-radius: 50%;

		&:hover {
			background-color: var(--secundary-color-300);
			& > svg {
				scale: 1;
				cursor: pointer;
				color: white;
				opacity: 0.8;
			}
		}
	}

	& > div > svg {
		font-size: clamp(1rem, 10vw + 1rem, 2rem);
		color: var(--primary-color-200);
		transition: 1s cubic-bezier(0.33, 1, 0.68, 1) all;
	}
`;
