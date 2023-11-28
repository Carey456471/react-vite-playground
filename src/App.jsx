import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <div className={true && "dark"}>
                <Routes>
                    {/* public route */}
                    <Route path={routes.login} element={<Login />} />

                    {/* protected route */}
                    <Route path={routes.home} element={<Home />} />

                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
