import styled from "styled-components";

export const TitleContry = styled.h2`
	font-family: var(--fn-secundary);
	font-weight: bold;
	font-size: clamp(2.2rem, 10vw + 1rem, 2.5rem);
`;

export const TagsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.2rem;
	max-height: 80vh;
	overflow: hidden;
	overflow-y: auto;
	width: 95%;
	min-height: 60vh;
	padding: 4rem 0;
`;

export const TournamentTag = styled.div`
	width: 95%;
	max-width: 30rem;
	background-color: var(--primary-color-50);
	border-radius: 0.8em;
	display: grid;
	grid-template-columns: max-content 1fr;
	grid-auto-flow: column;
	place-items: center;
	column-gap: 1.2rem;
	position: relative;

	padding: 0.8em 1.5em;

	& > img {
		max-width: 100%;
		height: 4rem;
		/* aspect-ratio: 1; */
		object-fit: cover;
		border-radius: 0.5em;
	}

	& > h2 {
		font-family: var(--fn-secundary);
		width: 90%;
		max-width: 18rem;
		justify-self: end;

		color: var(--primary-color-200);
	}

	& > div {
		position: absolute;
		bottom: 0;
		right: 0;
		transform: translate(-25%, 50%);

		padding: 0.3em;
		height: 3rem;
		aspect-ratio: 1;
		display: grid;
		place-items: center;
		border-radius: 50%;
		color: white;
		background-color: var(--secundary-color-100);
		/* scale: 1.5; */
		transition: 0.4s ease scale;
		transform-origin: center;

		& > svg {
			scale: 1.5;
		}

		&:hover {
			scale: 90%;
			cursor: pointer;
		}
	}
`;

// export const
