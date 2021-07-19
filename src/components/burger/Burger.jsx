import { Wrapper } from "./burger.style";
import { BurgerIngredients } from "./burgerIngredients/BurgerIngredients";
export const Burger = (props) => {
    const makeIngredientsDynamic = Object.keys(props.ingredients).map((key) => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return <BurgerIngredients type={key} key={key + i} />;
        });
    });
    console.log(makeIngredientsDynamic);
    return (
        <Wrapper>
            <BurgerIngredients type="bread-top" />
            {makeIngredientsDynamic.length === 0 ? (
                <p>
                    Anything you want us to add for you <i> &#128523; </i>{" "}
                </p>
            ) : (
                makeIngredientsDynamic
            )}
            <BurgerIngredients type="bread-bottom" />
        </Wrapper>
    );
};
