import {FunctionComponent, useEffect} from 'react';

import {observer} from 'mobx-react';
import {useGetUser} from 'Services/Adapters/getUser';
import {useUserStore} from 'Services/Adapters/store';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './index.scss';

export const Profile: FunctionComponent = () => {
    const {user, setIsAuth} = useUserStore();
    const {getUser} = useGetUser();

    const signOut = () => {
        setIsAuth(false);
        localStorage.clear();
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="profile">
            <div className="idInstance__label">IdInstance:</div>
            <div className="idInstance__label">{user.idInstance}</div>
            <ExitToAppIcon onClick={signOut} color={'primary'} sx={{cursor: 'pointer'}} />
        </div>
    );
};

export default observer(Profile);
