import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import { ApiContextProvider } from "./context/ApiContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
    return (
        <HashRouter future={{ v7_startTransition: true }}>
            <ApiContextProvider>
                <AuthContextProvider>
                    <div className={true && "dark"}>
                        <Routes>
                            {/* public route */}
                            <Route path={routes.login} element={<Login />} />

                            {/* protected route */}
                            <Route path={routes.home} element={<Home />} />

                            <Route path="*" element={<NoPage />} />
                        </Routes>
                    </div>
                </AuthContextProvider>
            </ApiContextProvider>
        </HashRouter>
    );
}

export default App;
