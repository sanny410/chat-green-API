import {FunctionComponent} from 'react';

import ROUTES from 'Core/Const/Routes';
import {observer} from 'mobx-react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useUserStore} from 'Services/Adapters/store';
import Login from 'UI/Pages/Login';
import Messages from 'UI/Pages/Messages';

/**
 * Роутер приложения
 */
const AppRouter: FunctionComponent = () => {
    const {isAuth} = useUserStore();
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path={ROUTES.APP.LOGIN} element={!isAuth ? <Login /> : <Messages />} />
                <Route path={ROUTES.APP.MESSENGER} element={<Messages />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default observer(AppRouter);
