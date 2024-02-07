import styled from "styled-components";

export const EmptyListWarning = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-block: 1rem;

    strong{
        color: ${(props) => props.theme.accent};
    }
`;
