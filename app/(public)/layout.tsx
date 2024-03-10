import { Alert, Nav } from '_components';
import BurgerMenu from "../_components/burgerMenu/BurgerMenu";

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="app-container">
            <BurgerMenu />
            <Nav />
            <Alert />
            {children}
        </div>
    );
}
