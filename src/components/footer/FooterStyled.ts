import styled from "styled-components";

export const FooterStyled = styled.footer`
  text-align: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  margin-top: auto;

  p {
    font-size: 1.25rem;
    padding: 0.5rem;
  }
`;
