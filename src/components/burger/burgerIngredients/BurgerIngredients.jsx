// the Burger Ingredients components will receive ingredients
// as props but will render each one according to the
// request of the customer
import React from "react";
import PropTypes from "prop-types";

import {
    BreadTop,
    Meat,
    Bacon,
    Salad,
    Cheese,
    BreadBottom,
} from "./burgerIngredients.style";
export class BurgerIngredients extends React.Component {
    render() {
        let ingredients = null;
        switch (this.props.type) {
            case "bread-top":
                ingredients = <BreadTop></BreadTop>;
                break;
            case "bread-bottom":
                ingredients = <BreadBottom></BreadBottom>;
                break;
            case "meat":
                ingredients = <Meat></Meat>;
                break;
            case "salad":
                ingredients = <Salad></Salad>;
                break;
            case "bacon":
                ingredients = <Bacon></Bacon>;
                break;
            case "cheese":
                ingredients = <Cheese></Cheese>;
                break;
            default:
                ingredients = null;
        }
        return ingredients;
    }
}

// to check the props type, react team provides a built-in
// lib called prop-type to validate the props

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired,
};
