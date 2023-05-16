import {FunctionComponent} from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import {observer} from 'mobx-react';
import {useLogin} from 'Services/Adapters/login';
import logo from 'UI/Styles/assets/logo.png';

import './index.scss';

const Login: FunctionComponent = () => {
    const {login} = useLogin();

    const formik = useFormik({
        initialValues: {
            idInstance: '',
            apiToken: '',
        },
        onSubmit: (data) => {
            login(data);
        },
    });

    return (
        <div className="wrapper _container">
            <Grid container spacing={4} direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <h2 className="login__title">Sign in messenger</h2>
                <img className="login__logo" src={logo} alt={''} />
                <form className="login__form" onSubmit={formik.handleSubmit}>
                    <TextField
                        id="outlined-idInstance"
                        name="idInstance"
                        required
                        label="idInstance"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.idInstance}
                    />
                    <TextField
                        id="outlined-apiToken"
                        required
                        name="apiToken"
                        onChange={formik.handleChange}
                        label="apiToken"
                        type="text"
                        value={formik.values.apiToken}
                    />
                    <Button variant="contained" type={'submit'} color={'primary'}>
                        Sign in
                    </Button>
                </form>
            </Grid>
        </div>
    );
};

export default observer(Login);
