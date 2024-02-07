import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 2rem;
  flex: 1;
  gap: 1rem;

  img {
    width: min(100%, 250px);
    height: min(100%, 250px);
    margin: 0 auto;
    border-radius: 5px;
  }

  .title {
    font-size: 1.75rem;
    color: ${(props) => props.theme.primary};
  }

  .Welcome {
    font-size: 1.25rem;
  }
`;
