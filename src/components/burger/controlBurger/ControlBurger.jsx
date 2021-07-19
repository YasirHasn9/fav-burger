import { useMemo } from "react";
import { Wrapper } from "./controlBurger.style";

export const ControlBurger = (props) => {
    const ingredientsType = useMemo(
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
            <div>button for the Ingredients</div>
        </Wrapper>
    );
};
