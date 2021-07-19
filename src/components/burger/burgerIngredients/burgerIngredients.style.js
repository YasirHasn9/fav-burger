import styled from "styled-components";

export const BreadTop = styled.div`
    margin: 0.5rem;
    width: 100%;
    height: 8rem;
    background-color: #c58642;
    border-radius: 10px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 8rem;
    }
`;

export const Meat = styled.div`
    margin: 0.5rem auto;
    width: 95%;
    height: 3rem;
    background-color: #2f1a04;
    border-radius: 20px;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 4rem;
    }
`;

export const Bacon = styled.div`
    width: 100%;
    margin: 0.5rem;
    height: 1.2rem;
    background-color: #780303;
    border-radius: 20px;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 2rem;
    }
`;
export const Salad = styled.div`
    margin: 0.5rem;
    height: 1rem;
    width: 100%;
    background-color: green;
    border: 0.1px solid #000;
    border-radius: 2rem;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 1.8rem;
    }
`;

export const Cheese = styled.div`
    margin: 2px auto;
    padding: 0.8rem 0;
    height: 0.8rem;
    width: 100%;
    background-color: #f9b12a;
    border-radius: 1rem;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 1.2rem;
    }
`;

export const BreadBottom = styled.div`
    margin: 0.5rem;
    width: 100%;
    height: 9rem;
    background-color: #c58642;
    border-radius: 10px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        height: 8rem;
    }
`;
