import { Alert, Nav } from '_components';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="app-container bg-light">
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
