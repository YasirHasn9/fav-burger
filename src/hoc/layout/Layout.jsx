import { MainContent } from "./layout.style";
import { Toolbar } from "../../components/toolbar/Toolbar";
export const Layout = (props) => {
    return (
        <>
            <Toolbar />
            <MainContent>{props.children}</MainContent>
        </>
    );
};
