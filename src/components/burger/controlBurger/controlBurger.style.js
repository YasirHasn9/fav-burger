import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: #f4b400;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0px 12px 12px #ccc;
    margin: auto;
    position: fixed;
    bottom: 0;
    .price {
        font-size: 1.6rem;
        font-weight: bold;
        margin: 2rem;
        padding: 0.5rem 2rem;
    }
`;

export const OrderBtn = styled.button`
    border: 0;
    border-radius: 1rem;
    padding: 1.5rem 4rem;
    background: ${(props) => (!props.disabled ? "green" : "brown")};
    margin: 2rem;
    font-size: 1.6rem;
    color: #fff;
    text-transform: uppercase;
    cursor: ${(props) => {
        return !props.disabled ? "pointer" : null;
    }};
    transition: 0.3s;
    &:hover {
        transform: ${(props) => (!props.disabled ? "translateY(-2px)" : null)};
    }
    &:active {
        transform: translateY(2px);
    }
`;
