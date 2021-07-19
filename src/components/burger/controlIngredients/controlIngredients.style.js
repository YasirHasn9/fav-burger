import styled from "styled-components";
import {
    CenterItemsHorizontally,
    CenterItemsVertically,
} from "../../../common/style";
export const Wrapper = styled(CenterItemsHorizontally)`
    width: 100%;
    padding: 1rem;
`;

export const IngredientsWrapper = styled(CenterItemsVertically)`
    justify-content: space-around;
    padding: 0 2rem;
    width: 400px;
    p {
        display: flex;
        justify-content: flex-end;
        font-size: 1.6rem;
        font-weight: bold;
        position: absolute;
    }
`;
