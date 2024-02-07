import styled from "styled-components";

export const CardNotFound = styled.div`
  width: 100%;
  max-width: 350px;
  max-height: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: ${(props) => props.theme.baseCard};
  margin: 0 auto;
  gap: 1rem;

  img {
    margin: 0 auto;
    width: 252px;
    height: 252px;
    max-width: 100%;
    border-radius: 8px;
  }

  blockquote {
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
    font-style: italic;
  }
`;
