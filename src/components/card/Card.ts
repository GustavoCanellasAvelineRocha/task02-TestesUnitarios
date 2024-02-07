import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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

  p {
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
`;
