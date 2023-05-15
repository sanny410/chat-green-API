import {FunctionComponent, useEffect} from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import {Contact, ContactWin} from 'Domain/user';
import {observer} from 'mobx-react';
import {useUserStore} from 'Services/Adapters/store';
import {ChatItem} from 'UI/Components/ChatItem';
import {useGetContacts} from 'Services/Adapters/getContacts';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useAddContact} from 'Services/Adapters/addContact';

import './index.scss';

interface Inputs {
    win: ContactWin;
}

export const ChatList: FunctionComponent = () => {
    const {contactList} = useUserStore();
    const {getContacts} = useGetContacts();
    const {addContact} = useAddContact();

    const {register, handleSubmit, reset} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        addContact(data.win);
        reset();
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div className="contacts">
            <h2 className="chat__title">Чаты</h2>
            <form className="addContact" onSubmit={handleSubmit(onSubmit)}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">Добавь новый контакт</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        placeholder={'Формат 79001234556'}
                        {...register('win', {required: true})}
                    />
                </FormControl>
                <IconButton type={'submit'}>
                    <AddIcon color={'primary'} />
                </IconButton>
            </form>
            <div className="chat-list">
                <nav aria-label="main mailbox folders">
                    <List>
                        {contactList.map((contact: Contact) => (
                            <ChatItem contact={contact} key={contact.win} />
                        ))}
                    </List>
                </nav>
            </div>
        </div>
    );
};

export default observer(ChatList);
