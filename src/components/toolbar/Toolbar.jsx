import { Header } from "./toolbar.style";
import { Navigations } from "../navigations/Navigations";
import { Logo } from "../../common/logo/Logo";
export const Toolbar = () => (
    <Header>
        <Logo />
        <Navigations />
    </Header>
);
