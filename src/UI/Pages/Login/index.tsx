import {FunctionComponent} from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {observer} from 'mobx-react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useLogin} from 'Services/Adapters/login';
import logo from 'UI/Styles/assets/logo.png';

import './index.scss';

interface Inputs {
    idInstance: string;
    apiToken: string;
}

const Login: FunctionComponent = () => {
    const {login} = useLogin();
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        login(data);
    };
    return (
        <div className="wrapper _container">
            <Grid container spacing={4} direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <h2 className="login__title">Sign in messenger</h2>
                <img className="login__logo" src={logo} alt={''} />
                <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        required
                        id="outlined-required"
                        label="idInstance"
                        {...register('idInstance', {required: true})}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="apiTokenInstance"
                        {...register('apiToken', {required: true})}
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
