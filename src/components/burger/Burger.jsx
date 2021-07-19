import { Wrapper } from "./burger.style";
import { BurgerIngredients } from "./burgerIngredients/BurgerIngredients";
export const Burger = (props) => {
    return (
        <Wrapper>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat" />
            <BurgerIngredients type="salad" />
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="bread-bottom" />
        </Wrapper>
    );
};
