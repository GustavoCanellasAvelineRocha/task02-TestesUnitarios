import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.primary};
  gap: 1rem;

  h1 a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    &:hover{
      text-decoration: none;
    }
  }

  a {
    font-size: 1rem;
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
