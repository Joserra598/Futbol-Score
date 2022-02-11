import styled from "styled-components";

export const SectionStyle = styled.section`
	width: 95%;

	min-height: 80vh;
	display: grid;
	padding: 0.8rem 0;
	gap: 2rem;
	grid-auto-rows: max-content;
`;

export const HeadLeague = styled.div`
	margin: 0 auto;
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: space-around;
	min-width: 100%;

	& > h2 {
		font-family: var(--fn-secundary);
		font-weight: 700;
		font-size: clamp(1rem, 3vw + 1rem, 2.4rem);
	}

	& > img {
		height: 4rem;
	}
`;

export const LabelPosition = styled.h3`
	font-family: var(--fn-secundary);
	font-weight: 500;
	font-size: clamp(1.2rem, 4vw + 1rem, 1.5rem);
`;

export const TablePositions = styled.div`
	max-height: 70vh;
	overflow: hidden;
	overflow-y: auto;

	& > :first-child {
		position: sticky;
		top: 0;
		background-color: var(--primary-color-100);

		&:hover {
			background-color: white;
			cursor: auto;
		}
	}
`;

export const RowTable = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 8% auto 8% 8% 18%;
	gap: 0.1rem;
	min-height: calc(max-content);
	place-items: center;
	padding: 0.5em 0;
	transition: 500ms ease background-color;

	&:hover {
		cursor: pointer;
		background-color: var(--primary-color-150);
	}

	& > label {
		font-family: var(--fn-secundary);
		font-weight: 400;
		color: var(--primary-color-200);
		font-size: clamp(0.8rem, 1vw + 0.5rem, 1.2rem);
	}

	& > p {
		place-self: center;
		font-family: var(--fn-secundary);
		font-weight: 400;
		color: var(--primary-color-400);
	}

	& > div {
		display: flex;
		min-width: 100%;
		gap: 0.5rem;
		place-items: center;
		flex-wrap: wrap;
		justify-content: space-around;

		& > * {
			/* outline: 1px solid red; */
		}

		& > h2 {
			font-size: clamp(0.8rem, 1vw + 0.8rem, 2rem);
			/* font-size: 1rem; */
			font-family: var(--fn-secundary);
			font-weight: 400;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
			max-width: 80%;
		}

		& > img {
			height: clamp(2rem, 8vw, 3.4rem);
			margin-left: auto;
		}
	}
`;
