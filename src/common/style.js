import styled from "styled-components";

export const CenterItemsHorizontally = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const CenterItemsVertically = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Button = styled.button`
    padding: 0.5rem 2.5rem;
    border: 0px;
    border-radius: 1rem;
    color: #fff;
    text-transform: capitalize;
    cursor: ${(props) => (props.disabled ? null : "pointer")};
    /* margin: 5px; */
    background-color: ${(props) =>
        props.type === "more"
            ? "#442e0b"
            : props.type === "less"
            ? "#c88211"
            : props.type === "success"
            ? "green"
            : props.type === "danger"
            ? "red"
            : null};
`;
