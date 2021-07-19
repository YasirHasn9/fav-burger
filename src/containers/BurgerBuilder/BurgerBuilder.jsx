import { useState } from "react";
import { Burger } from "../../components/burger/Burger";
import { ControlBurger } from "../../components/burger/controlBurger/ControlBurger";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 1,
    meat: 1.7,
};
export const BurgerBuilder = (props) => {
    const [burgerInfo, setBurgerInfo] = useState({
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 1,
            salad: 0,
        },
        // this is a base price for the whole burger
        totalPrice: 3.7,
        purchase: false,
        order: false,
        loading: false,
        error: null,
    });

    const addIngredients = (key) => {
        let oldCount = burgerInfo.ingredients[key];
        let updatedCount = oldCount + 1;
        let updatedIngredients = {
            ...burgerInfo.ingredients,
        };
        updatedIngredients[key] = updatedCount;
    };
    return (
        <div>
            <Burger ingredients={burgerInfo.ingredients} />
            <ControlBurger price={burgerInfo.totalPrice} />
        </div>
    );
};
