import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./common/Global.style";
import { Layout } from "./hoc/layout/Layout";
import { BurgerBuilder } from "./containers/BurgerBuilder/BurgerBuilder";
export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Switch>
                    <Route path="/" component={BurgerBuilder} />
                </Switch>
            </Layout>
        </>
    );
};
