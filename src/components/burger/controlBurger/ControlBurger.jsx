import { useMemo } from "react";
import { Wrapper } from "./controlBurger.style";
import { ControlIngredients } from "../controlIngredients/ControlIngredients";

export const ControlBurger = (props) => {
    const controlNumberOfIngredients = useMemo(
        () => [
            { label: "Salad", type: "salad" },
            { label: "Bacon", type: "bacon" },
            { label: "Cheese", type: "cheese" },
            { label: "Meat", type: "meat" },
        ],
        []
    );

    return (
        <Wrapper>
            <p className="price">Total Price: ${props.price.toFixed(2)} </p>
            {controlNumberOfIngredients.map((ingredient) => {
                return (
                    <ControlIngredients
                        key={ingredient.label}
                        label={ingredient.label}
                    />
                );
            })}
        </Wrapper>
    );
};
