import { Alert, Nav } from '_components';
import BurgerMenu from "../_components/burgerMenu/BurgerMenu";

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="app-container bg-light">
            <BurgerMenu />
            <Nav />
            <Alert />
            <div className="p-4">
                <div className="container">      
                    {children}
                </div>
            </div>
        </div>
    );
}
