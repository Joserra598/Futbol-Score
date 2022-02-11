import styled from "styled-components";

export const MainSesionFC = styled.main`
	min-height: 100vh;
	background-color: var(--sesion-color-400);
	display: grid;
	place-items: center;
`;

export const GroupSections = styled.div`
	display: flex;
	width: 95%;
	justify-self: center;
	max-width: 800px;
	border-radius: 0.8em;
	overflow: hidden;

	& > * {
		min-width: 100%;
	}

	@media (min-width: 750px) {
		& > * {
			min-width: auto;
		}
	}
`;

export const Section = styled.section`
	width: 100%;
	max-width: 30rem;
	min-height: 80vh;
	display: grid;
	place-items: center;

	& > div {
		border-radius: 0.8em;
		width: 90%;
		background-color: var(--sesion-color-100);
		min-height: 80vh;
		padding: 1em 0.8em;
		/* outline: 1px solid red; */
		gap: 2rem;

		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: max-content;

		@media (min-width: 750px) {
			& {
				min-width: 100%;
				border-radius: 0;
			}
		}
	}
`;

export const FigureButton = styled.figure`
	background-color: var(--primary-color-50);
	width: 50%;
	max-width: max-content;
	border-radius: 0.5em;
	font-family: var(--fn-secundary);

	padding: 0.5em 1.2em;
	margin-left: auto;
	transition: 300ms ease scale;

	& > h3 {
		font-weight: 500;
		font-size: clamp(0.8rem, 1vw + 0.8rem, 1.2rem);
	}
	&:hover {
		cursor: pointer;
		scale: 0.95;
	}
`;

export const InputForm = styled.input`
	padding: 0.5em 1.2em;
	width: 90%;
	max-width: 20rem;
	border-radius: 0.8em;
	color: var(--primary-color-200);
	font-family: var(--fn-secundary);
	font-weight: 300;
	margin: 0 auto;
	border: none;
`;

export const LabelInput = styled.label`
	color: white;
	font-family: var(--fn-secundary);
	font-weight: 600;
	font-size: clamp(1.3rem, 1vw + 1rem, 1.5rem);
`;

const GeneralButton = styled.button`
	border-radius: 0.8em;
	border: none;
	font-family: var(--fn-secundary);
	font-weight: 400;
	font-size: clamp(1rem, 1vw + 1rem, 1.4rem);
	padding: 0.3em 1em;
	width: 80%;
	max-width: 10rem;
	color: white;
	transition: all 300ms ease;
	&:hover {
		scale: 0.95;
		cursor: pointer;
	}
`;

export const NextButton = styled(GeneralButton)`
	background-color: var(--primary-color-400);
	margin: 0 auto;

	@media (min-width: 750px) {
		display: none;
	}
`;

export const VerifyButton = styled(GeneralButton)`
	background-color: var(--secundary-color-100);
	font-size: clamp(0.5rem, 2vw + 0.5rem, 0.8rem);
	max-width: max-content;
	margin-left: auto;
`;

export const ValidButton = styled(GeneralButton)`
	background-color: var(--sesion-color-100);
`;

export const SearchButton = styled(GeneralButton)`
	font-size: clamp(0.7rem, 2vw + 0.7rem, 1rem);
	background-color: var(--primary-color-400);
	margin-left: auto;
`;

export const SecundarySectionTitle = styled.h2`
	color: white;
	font-size: clamp(1rem, 3vw + 1rem, 1.3rem);
	font-family: var(--fn-secundary);

	& + svg {
		color: white;
		justify-self: center;
		font-size: clamp(3rem, 5vw + 3rem, 4rem);
	}
`;

export const SelectLogIn = styled.select`
	border: none;
	border-radius: 0.4em;
	font-family: var(--fn-secundary);
	font-weight: 300;
	color: var(--fn-primary-color-200);
	font-size: clamp(1rem, 4vw + 1rem, 1.3rem);
	padding: 0.2em 1em;
`;
