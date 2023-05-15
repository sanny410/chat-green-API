import {FunctionComponent, useEffect} from 'react';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppRouter from 'Core/AppRouter';
import {observer} from 'mobx-react';
import {useUserStore} from 'Services/Adapters/store';

import 'UI/Styles/app.scss';

const theme = createTheme({
    palette: {
        primary: {
            light: '#33b89b',
            main: '#00a783',
            dark: '#00745b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const App: FunctionComponent = () => {
    const {setIsAuth} = useUserStore();
    const readCookie = (): void => {
        const isLogin = JSON.parse(localStorage.getItem('isAuth') ?? 'null');
        if (isLogin === true) {
            setIsAuth(true);
        }
    };

    useEffect(() => {
        readCookie();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    );
};

export default observer(App);
