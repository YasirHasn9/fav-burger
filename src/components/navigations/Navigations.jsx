import { NavbarUl, Anchor } from "./navigations.style";

export const Navigations = (props) => {
    return (
        <NavbarUl>
            <li>
                <Anchor href="/#">build burger</Anchor>
            </li>
            <li>
                <Anchor href="/#">orders</Anchor>
            </li>
        </NavbarUl>
    );
};
