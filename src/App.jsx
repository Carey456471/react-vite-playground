import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";

function App() {
    return (
        <HashRouter>
            <div className={true && "dark"}>
                <Routes>
                    {/* public route */}
                    <Route path={routes.login} element={<Login />} />

                    {/* protected route */}
                    <Route path={routes.home} element={<Home />} />

                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;