import styled from "styled-components";

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
	grid-template-columns: 25% 1.5fr 1fr;
	grid-template-rows: repeat(3, minmax(2rem, max-content));
	grid-template-areas: "img ltitle lsub" "img title sub" "img extra link";
	row-gap: 0.3rem;
	column-gap: 0.8rem;
	& > img {
		grid-area: img;
		max-width: 100%;
		place-self: center;
		border-radius: 50%;
	}

	& > label {
		font-family: var(--fn-secundary);
		font-weight: 300;
		color: var(--primary-color-200);
		font-size: clamp(0.8rem, 1vw + 1rem, 1rem);

		&.first {
			grid-area: ltitle;
		}
		&.second {
			grid-area: lsub;
			text-align: end;
		}
	}

	& > h2 {
		font-family: var(--fn-primary);
		font-weight: 700;
		color: rgba(0, 0, 0, 0.7);
		font-size: clamp(1rem, 2vw + 1rem, 1.5rem);
		grid-area: title;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	& > h3 {
		font-family: var(--fn-secundary);
		font-weight: 300;
		color: var(--primary-color-500);
		&.first {
			font-size: clamp(0.8rem, 1vw + 1rem, 1rem);
			grid-area: extra;
		}

		&.second {
			grid-area: sub;
			text-align: end;
		}
	}

	& p {
		display: inline-block;
		font-family: var(--fn-primary);
		font-weight: 400;
		color: var(--primary-color-500);
		font-size: 1.5rem;
	}

	& > a {
		font-family: var(--fn-secundary);
		font-weight: 500;
		color: var(--secundary-color-300);
		text-decoration: none;
		display: inline-block;
		grid-area: link;
		transition: transform 0.3s ease, opacity 0.3s ease;
		transform-origin: right;
		align-self: end;
		text-align: end;

		&:hover {
			transform: scale(0.93);
			opacity: 0.8;
		}
	}
`;
