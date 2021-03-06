import styled from "styled-components";

export const Input = styled.input`
	width: 20rem;
	height: 2rem;

	&:focus {
		border: 2px solid #99caef;
		border-radius: 5px;
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`;
