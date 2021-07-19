import { Wrapper, IngredientsWrapper } from "./controlIngredients.style";
import { Button } from "../../../common/style";

export const ControlIngredients = ({ label }) => {
    console.log(label);
    return (
        <Wrapper>
            <IngredientsWrapper>
                <Button type="less">Less</Button>
                <p>{label}</p>
                <Button type="more">more</Button>
            </IngredientsWrapper>
        </Wrapper>
    );
};
