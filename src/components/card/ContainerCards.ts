import styled from "styled-components";

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin: 0 auto; 
  max-width: 100%;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr; 
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr; 
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; 
  }
`;
