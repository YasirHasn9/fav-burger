import styled from "styled-components";

export const Header = styled.header`
    height: 6rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #700d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    z-index: 99;
    .menu {
        width: 33%;
        text-align: center;
        @media (min-width: 500px) {
            display: none;
        }
        @media (max-width: 500px) {
            display: block;
            position: fixed;
            right: 0%;
        }
    }
    nav {
        width: 33%;
        height: 100%;
    }
`;
