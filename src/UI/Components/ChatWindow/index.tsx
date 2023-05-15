import {FunctionComponent} from 'react';

import {observer} from 'mobx-react';
import {useUserStore} from 'Services/Adapters/store';
import Message from 'UI/Components/Message';

import './index.scss';

const ChatWindow: FunctionComponent = () => {
    const {activeChat} = useUserStore();
    return (
        <div className="chat-window">
            <div className="window__wrapper">
                {activeChat.chatList.map((message, i) =>
                    message.win === activeChat.win ? (
                        <Message key={i} className={'contact'} text={message.text} />
                    ) : (
                        <Message key={i} className={'user'} text={message.text} />
                    )
                )}
            </div>
        </div>
    );
};

export default observer(ChatWindow);
