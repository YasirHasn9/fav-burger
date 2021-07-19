import { GlobalStyle } from "./common/Global.style";
import { Layout } from "./hoc/layout/Layout";
export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Layout></Layout>
        </>
    );
};
