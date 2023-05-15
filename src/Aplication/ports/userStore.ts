import {User, Contact} from 'Domain/user';

export interface UserStore {
    user: User;
    setUser: (user: User) => void;
    isAuth: boolean;
    setIsAuth: (status: boolean) => void;
    contactList: Contact[];
    setContactList: (contacts: Contact[]) => void;
    activeChat: Contact;
    setActiveChat: (contact: Contact) => void;
}
