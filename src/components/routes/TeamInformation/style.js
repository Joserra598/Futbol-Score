import styled from "styled-components";

export const ParentContainer = styled.section`
	display: grid;
	grid-auto-rows: max-content;
	min-height: 100vh;
	justify-items: center;
	width: 100%;
	gap: 2rem;
	/* outline: 1px solid red; */
`;

export const HeaderCardInformation = styled.div`
	display: grid;
	grid-template-columns: minmax(3rem, 20%) minmax(6rem, 35%) auto;
	width: 95%;
	max-width: 28rem;
	grid-template-rows: repeat(3, 2.5rem);
	padding: 0.8rem 0.5rem;
	/* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3); */
	grid-template-areas: "img title title" "img aux extra" "img sub sub";
	border-radius: 0.8em;
	background-color: var(--primary-color-100);
	place-items: center;
	font-family: var(--fn-secundary);

	& > img {
		/* width: 70%; */
		grid-area: img;
		justify-self: start;
		/* outline: 1px solid red; */
		overflow: hidden;
		border-radius: 0.8em;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
	}

	& > h2 {
		grid-area: title;
		font-weight: 600;
		font-size: clamp(1rem, 2vw + 1rem, 1.8rem);
	}

	& > label {
		grid-area: aux;
		font-weight: 400;
		color: var(--primary-color-200);
	}

	& > h3,
	h4 {
		display: flex;
		gap: 1rem;
		justify-self: end;
		font-weight: 300;
		align-items: baseline;
		& > p {
			font-weight: 500;
			font-size: clamp(1.2rem, 8vw + 1rem, 1.5rem);
		}
	}

	& > h4 {
		grid-area: extra;
	}

	& > h3 {
		grid-area: sub;
	}
`;

export const Subtitle = styled.h2`
	font-family: var(--fn-secundary);
	font-weight: 500;
	font-size: clamp(1.5rem, 3vw + 1rem, 1.8rem);
	color: var(--primary-color-200);
	justify-self: start;
`;

export const EstadioInformation = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: repeat(2, max-content) 8.6rem max-content;
	gap: 1.2rem;
	width: 95%;
	max-width: 28rem;
	grid-template-areas: "title title" "sub extra" "img img" "city city";
	font-family: var(--fn-secundary);
	background-color: var(--primary-color-100);
	& > h2 {
		grid-area: title;
		/* font-weight: 500;
		font-size: clamp(1.5rem, 3vw + 1rem, 1.8rem);
		color: var(--primary-color-200); */
	}

	& > h3 {
		grid-area: sub;
		font-weight: 500;
		font-size: clamp(1.2rem, 3vw + 1rem, 1.5rem);
	}

	& > h4,
	blockquote {
		display: flex;
		gap: 0.5rem;
		font-weight: 300;
		align-items: baseline;
		color: var(--primary-color-200);
		font-size: clamp(0.8rem, 1vw + 0.5rem, 1rem);
		& > p {
			font-weight: 600;
			color: var(--primary-color-400);
			font-size: clamp(1.2rem, 1vw + 1rem, 1.5rem);
		}
	}

	& > h4 {
		grid-area: extra;

		justify-self: end;
	}

	& > img {
		grid-area: img;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.8em;
	}

	& > blockquote {
		grid-area: city;
	}
`;

export const PlayersContainer = styled.div`
	display: grid;
	gap: 1.5rem;
	grid-template-columns: 1fr;
	grid-auto-rows: max-content;
	width: 95%;
	max-width: 28rem;
	height: 40vh;
	min-height: 15rem;
	background-color: var(--primary-color-100);
	padding: 1rem 0;
	max-height: 20rem;
	overflow: hidden;
	overflow-y: auto;
	/* outline: 1px solid red; */
`;

export const CardPlayer = styled.div`
	justify-self: center;
	width: 95%;
	max-width: 25rem;
	background-color: var(--primary-neutral);
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
	border-radius: 0.8em;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	justify-content: space-around;
	font-family: var(--fn-secundary);

	transition: all 400ms cubic-bezier(0.33, 1, 0.68, 1);

	&:hover {
		box-shadow: none;
		cursor: pointer;
	}

	& > img {
		height: clamp(3.5rem, 10vw + 1rem, 4rem);
		border-radius: 0.8em;
	}

	& > div {
		text-align: center;
		& > h2 {
			font-weight: 600;
		}
		& > p {
			font-weight: 500;
			color: var(--primary-color-200);
		}
	}

	& > svg {
		font-size: 2rem;
	}
`;
