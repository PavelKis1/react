import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Error from '../pages/Error';
import { publicRouts, privateRouts } from '../router/routs';
import { AuthContext } from '../context/index.js';
import Loader from './UI/loader/Loader.jsx';

function AppRouter() {
    const { isAuth, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRouts.map(route =>
                    <Route key={route.path}
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                    />
                )}
                <Route path='/error' element={<Error />} />
                <Route path="*" element={<Navigate to={'/posts'} />} />
            </Routes>
            :
            <Routes>
                {publicRouts.map(route =>
                    <Route key={route.path}
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                    />
                )}
                <Route path='/error' element={<Error />} />
                <Route path="*" element={<Navigate to={'/login'} />} />
            </Routes>
    )
}

export default AppRouter