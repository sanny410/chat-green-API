import {FunctionComponent} from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Contact} from 'Domain/user';
import {observer} from 'mobx-react';
import {useDeleteContact} from 'Services/Adapters/deleteContact';
import {useUserStore} from 'Services/Adapters/store';
import './index.scss';

interface IProps {
    contact: Contact;
}

export const ChatItem: FunctionComponent<IProps> = ({contact}) => {
    const {setActiveChat} = useUserStore();
    const {deleteContact} = useDeleteContact();

    const handleDeleteContact = (): void => {
        deleteContact(contact);
    };

    return (
        <div className="chat__item">
            <ListItem disablePadding>
                <ListItemButton onClick={() => setActiveChat(contact)}>
                    <ListItemIcon>
                        <PersonIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={`${contact.win.split('@')[0]}`} />
                </ListItemButton>
                <DeleteIcon onClick={handleDeleteContact} />
                <Divider />
            </ListItem>
        </div>
    );
};

export default observer(ChatItem);
