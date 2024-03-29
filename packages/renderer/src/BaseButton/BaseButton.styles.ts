import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    transition: all 200ms;
    color: white;
    background-color: #1a1c1e;
    &:hover {
        background-color: #1d1f21;
    }
`;
