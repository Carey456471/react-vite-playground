import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
    return (
        <HashRouter future={{ v7_startTransition: true }}>
                <AuthContextProvider>
                    <div className={true && "dark"}>
                        <Routes>
                            {/* public route */}
                            <Route path={routes.login} element={<Login />} />

                            {/* protected route */}
                            <Route path={routes.home} element={<Home />} />

                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </div>
                </AuthContextProvider>
        </HashRouter>
    );
}

export default App;
