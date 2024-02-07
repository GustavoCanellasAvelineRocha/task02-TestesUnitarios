import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => props.theme.baseBtn};
  color: ${(props) => props.theme.text};
  padding: 0.25rem;
`;
