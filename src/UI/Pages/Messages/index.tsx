import {FunctionComponent, useEffect} from 'react';

import PersonIcon from '@mui/icons-material/Person';
import {observer} from 'mobx-react';
import {useUserStore} from 'Services/Adapters/store';
import {useUpdateCheck} from 'Services/Adapters/updatesCheck';
import ChatList from 'UI/Components/ChatList';
import ChatWindow from 'UI/Components/ChatWindow';
import Profile from 'UI/Components/Profile';
import SendMessageInput from 'UI/Components/SendMessageInput';
import logo from 'UI/Styles/assets/logo.png';
import './index.scss';

const Message: FunctionComponent = () => {
    const {activeChat} = useUserStore();
    const {updateCheck} = useUpdateCheck();

    useEffect(() => {
        const intervalId = setInterval(() => {
            void updateCheck();
        }, 7000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="messenger _container">
            <div className="messenger__wrapper">
                <div className="list__contact__wrapper">
                    <div className="messenger__logo">
                        <img src={logo} className="logo__small" alt={'logo-icon'} />
                        <p>InChat</p>
                    </div>
                    <div className="chat-list__account">
                        <Profile />
                    </div>
                    <div className="chat-list__list">
                        <ChatList />
                    </div>
                </div>
                <div className="chat__wrapper">
                    <div className="contact__win">
                        <div className="contact__icon"></div>
                        <PersonIcon color="primary" />
                        <p>Получатель:</p>
                        <p>{activeChat.win.split('@')[0]}</p>
                    </div>
                    <div className="chat_window__messages">
                        <ChatWindow />
                    </div>
                    <div className="chat_window__type-text-input">
                        <SendMessageInput />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Message);
