import { createContext, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';
import { storages } from '../utils/storages';
import { timeout } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { routes } from '../utils/routes';
import { apiAxios, apiRoutes } from '../utils/api';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // ----------------------------------------------------------------------------
    // variables
    // ----------------------------------------------------------------------------

    const userDummy = {
        name: 'example',
        email: 'example@gmail.com',
    };

    const jwtDummy = {
        token: 'fake token',
        refresh_token: 'fake refresh token',
    };

    const [user, setUser] = useState(secureLocalStorage.getItem(storages.USER) ?? {});
    const [token, setToken] = useState(secureLocalStorage.getItem(storages.TOKEN));
    const [refreshToken, setRefreshToken] = useState(secureLocalStorage.getItem(storages.REFRESH_TOKEN));

    const navigate = useNavigate();

    // ----------------------------------------------------------------------------
    // function
    // ----------------------------------------------------------------------------
    const loginApi = async (formdata) => {
        console.log('get jwt token');
        // simulate get jwt token delay
        // apiAxios.post(apiRoutes.login)
        await timeout(200);
        // assume request success and response jwt json
        // set axios token header
        apiAxios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtDummy.token;

        // save token detail to react state and local storage
        setToken(jwtDummy.token);
        setRefreshToken(jwtDummy.refresh_token);
        secureLocalStorage.setItem(storages.TOKEN, jwtDummy.token);
        secureLocalStorage.setItem(storages.REFRESH_TOKEN, jwtDummy.refresh_token);

        console.log('get user info');
        // simulate get user info delay
        await timeout(200);
        // assume request success and response user json
        // save user info to react state and local storage
        setUser(userDummy);
        secureLocalStorage.setItem(storages.USER, userDummy);

        // redirect to home route
        navigate(routes.home);
    };

    const logoutApi = async () => {
        // simulate api request delay
        await timeout(500);

        console.log('logout success');
        // remover user and token
        setUser({});
        setToken('');
        setRefreshToken('');

        secureLocalStorage.removeItem(storages.USER);
        secureLocalStorage.removeItem(storages.TOKEN);
        secureLocalStorage.removeItem(storages.REFRESH_TOKEN);

        // redirect to login routes
        navigate(routes.login);
    };

    const isAuth = () => {
        return token != '' && token != null;
    };

    // ----------------------------------------------------------------------------
    // life cycle function
    // ----------------------------------------------------------------------------
    // if token updated, set axios token header
    useEffect(() => {
        if (token) {
            apiAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        } else {
            apiAxios.defaults.headers.common['Authorization'] = 'Bearer ' + '';
        }
    }, [token]);
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
