import { HashRouter, Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';
import { LoginPage, HomePage, Page404 } from './pages';
import { Layout } from './components';
import { useDispatch } from 'react-redux';
import { setScreenSize } from './store/slices/AppSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const screenSize = {
        x: window.innerWidth,
        y: window.innerHeight
      };
      dispatch(setScreenSize(screenSize));
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HashRouter future={{ v7_startTransition: true }}>
      <div className={true && 'dark'}>
        <Routes>
          {/* public route */}
          <Route path={routes.login} element={<LoginPage />} />

          {/* protected route */}
          <Route element={<Layout />}>
            <Route path={routes.home} element={<HomePage />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
