import styled from "styled-components";

export const NavbarUl = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
        display: flex;
        text-align: center;
        font-size: 1.6rem;
        margin-right: 1px;
        padding: 2rem;
        transition: all 0.3s ease-out;
        border-bottom: 5px solid transparent;
        &:hover {
            background: #8f5c28;
            border-bottom: 5px solid #f4b400;
        }
        a {
            text-decoration: none;
        }
    }
    @media (max-width: 500px) {
        display: none;
    }
`;

export const Anchor = styled.a`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #fff;
    height: 100%;
    width: 100%;
    border-bottom: 5px solid
        ${(props) => (props.active ? "#f4b400" : "transparent")};

    color: #fff;
    background-color: ${(props) => (props.active ? "#8f5c28" : null)};
`;
