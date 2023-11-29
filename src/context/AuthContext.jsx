import { createContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { storages } from "../utils/storages";
import { timeout } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // ----------------------------------------------------------------------------
    // variables
    // ----------------------------------------------------------------------------

    const userDummy = {
        name: "example",
        email: "example@gmail.com",
        token: "fake token",
    };

    const [user, setUser] = useState(secureLocalStorage.getItem(storages.USER) ?? {});
    const [token, setToken] = useState(secureLocalStorage.getItem(storages.TOKEN));

    const navigate = useNavigate()

    // ----------------------------------------------------------------------------
    // function
    // ----------------------------------------------------------------------------
    const loginApi = async () => {
        // simulate api request delay
        await timeout(1000);

        console.log("login success");
        setUser(userDummy);
        setToken(userDummy.token);

        secureLocalStorage.setItem(storages.USER, userDummy);
        secureLocalStorage.setItem(storages.TOKEN, userDummy.token);
        
        navigate(routes.home)
    };

    const logoutApi = async () => {
        // simulate api request delay
        await timeout(1000);

        console.log("logout success");
        setUser({});
        setToken("");

        secureLocalStorage.removeItem(storages.USER);
        secureLocalStorage.removeItem(storages.TOKEN);

        navigate(routes.login)
    };

    const isAuth = () => {
        return token !== "";
    };

    // ----------------------------------------------------------------------------
    // export
    // ----------------------------------------------------------------------------
    const value = {
        user,

        loginApi,
        logoutApi,
        isAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
