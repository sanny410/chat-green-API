import {Contact, User} from 'Domain/user';
import {action, makeObservable, observable} from 'mobx';

/**
 * Шаблон оценки
 */
export default class UserStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    user: User = {
        idInstance: '',
        apiToken: '',
    };

    @action
    setUser = (user: User): void => {
        this.user = user;
    };

    @observable
    isAuth: boolean = false;

    @action
    setIsAuth = (status: boolean): void => {
        this.isAuth = status;
    };

    @observable
    contactList: Contact[] = [];

    @action
    setContactList = (contacts: Contact[]): void => {
        this.contactList = contacts;
    };

    @observable
    activeChat: Contact = {
        win: '',
        chatList: [],
    };

    @action
    setActiveChat = (contact: Contact): void => {
        this.activeChat = contact;
    };
}
