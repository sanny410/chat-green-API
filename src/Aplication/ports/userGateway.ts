import {User, ContactWin, MessageRequest, Message, Contact, IdMessage, MessageText, UpdateInfo} from 'Domain/user';

export interface UserGateway {
    login: (summary: User) => User;
    getContacts: () => Contact[];
    getUser: () => User;
    addContact: (win: ContactWin) => Contact;
    deleteContact: (win: ContactWin) => Contact[];
    sendMessage: (summary: MessageRequest) => Promise<IdMessage>;
    updateChat: (contact: Contact, idMessage: IdMessage, text: MessageText, win: ContactWin) => Contact;
    getNotification: () => Promise<UpdateInfo | null>;
    deleteNotification: (receiptId: number) =>  Promise<void>
}
