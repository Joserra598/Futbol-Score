import styled from "styled-components";

export const TeamPlayerContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 95%;
	max-width: 28rem;
	grid-template-rows: repeat(3, 3rem);
	padding: 0.8rem 0.5rem;
	/* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3); */
	grid-template-areas: "title title" "team team" "league country";
	border-radius: 0.8em;
	background-color: var(--primary-color-100);
	place-items: center;
	font-family: var(--fn-secundary);
	row-gap: 0.9rem;
	column-gap: 1.2rem;

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		transition: opacity 300ms cubic-bezier(0.5, 1, 0.89, 1);
		&:hover {
			opacity: 0.3;

			cursor: pointer;
		}
	}

	& > div:last-child {
		&:hover {
			cursor: auto;
			opacity: 1;
		}
	}

	& img {
		height: 3rem;
	}

	& > .team {
		grid-area: team;

		& > h2 {
			font-weight: 500;
			font-size: clamp(1.2rem, 4vw + 1rem, 1.5rem);
		}
	}

	& > .league {
		grid-area: league;
		& > h2 {
			font-weight: 400;
			font-size: clamp(1rem, 4vw + 1rem, 1.3rem);
		}
	}

	& > .contry {
		grid-area: country;
		& > h2 {
			font-weight: 400;
			font-size: clamp(1rem, 4vw + 1rem, 1.3rem);
		}
	}
`;

export const StadisticContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: max-content;
	min-height: 10vh;
	width: 95%;
	max-width: 28rem;
	border-radius: 0.8em;
	background-color: var(--primary-color-100);
	font-family: var(--fn-secundary);
	padding: 1rem 0.8rem;
	max-height: 30rem;
	overflow: hidden;
	overflow-y: auto;

	& > :first-child {
		position: sticky;
		top: 0;
		background-color: var(--primary-color-100);
		width: 100%;
	}
`;

export const IndividualStadistic = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: max-content;
	gap: 0.5rem;

	& > h2 {
		grid-column: 1 / span 2;
		text-align: center;
		font-weight: 500;
	}

	& > h3:nth-child(odd) {
		text-align: end;
		font-weight: 500;
	}

	& > h3 {
		padding: 0 1em;
		color: var(--primary-color-200);
		font-weight: 400;
	}
`;
