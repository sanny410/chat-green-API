import {FunctionComponent, useEffect} from 'react';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import {useGetUser} from 'Services/Adapters/getUser';
import {useUserStore} from 'Services/Adapters/store';
import './index.scss';

export const Profile: FunctionComponent = () => {
    const {user, setIsAuth, setActiveChat} = useUserStore();
    const {getUser} = useGetUser();

    const signOut = (): void => {
        setIsAuth(false);
        localStorage.clear();
        setActiveChat({
            win: '',
            chatList: [],
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="profile">
            <div className="idInstance__label">IdInstance:</div>
            <div className="idInstance__label">{user.idInstance}</div>
            <Link to={'/'}>
                <ExitToAppIcon onClick={signOut} color={'primary'} sx={{cursor: 'pointer'}} />
            </Link>
        </div>
    );
};

export default observer(Profile);
