import styled from "styled-components";

export const ContainerFavoriteStyled = styled.section`
  width: 100%;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 1rem;
  border: 1px solid #ddd;
  background-color: ${(props) => props.theme.baseCard};

  img {
    width: 252px;
    height: 252px;
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  strong {
    color: ${(props) => props.theme.accent};
    margin-bottom: 10px;
  }

  h3 {
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme.text};
  }
`;
