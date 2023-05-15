import {FunctionComponent} from 'react';

import {observer} from 'mobx-react';

import './index.scss';

interface IProps {
    className: string;
    text: string;
}

const Message: FunctionComponent<IProps> = ({className, text}) => {
    return (
        <div className={`message ${className}`}>
            <p className="message__text">{text}</p>
        </div>
    );
};

export default observer(Message);
