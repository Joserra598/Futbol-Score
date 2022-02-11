import styled from "styled-components";

export const MainContainerStyled = styled.main`
	display: grid;
	grid-auto-rows: max-content;
	gap: 2rem;
	justify-items: center;
	grid-template-columns: 1fr;

	@media screen and (min-width: 1000px) {
		/* outline: 1px solid red; */
		grid-template-columns: 40% auto;
		grid-template-rows: repeat(3, minmax(10rem, max-content));
		grid-template-areas: "team countries" "player countries" "table countries";

		/*  */
	}
`;
