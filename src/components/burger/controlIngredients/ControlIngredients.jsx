import { Wrapper, IngredientsWrapper } from "./controlIngredients.style";
import { Button } from "../../../common/style";

export const ControlIngredients = ({ label, addIngredients }) => {
    console.log("ControlIngredients", addIngredients);
    return (
        <Wrapper>
            <IngredientsWrapper>
                <Button type="less">Less</Button>
                <p>{label}</p>
                <Button onClick={addIngredients} type="more">
                    more
                </Button>
            </IngredientsWrapper>
        </Wrapper>
    );
};
