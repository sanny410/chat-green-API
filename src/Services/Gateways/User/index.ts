import axios from 'axios';
import {Contact, ContactWin, IdMessage, Message, MessageRequest, MessageText, UpdateInfo, User} from 'Domain/user';

const userGateway = {
    updateChat(contact: Contact, idMessage: IdMessage, text: MessageText, win: ContactWin): Contact {
        const newMessage: Message = {
            win,
            idMessage,
            text,
        };
        contact.chatList.push(newMessage);
        return contact;
    },
    login(summary: User): User {
        localStorage.setItem('user', JSON.stringify(summary));
        localStorage.setItem('isAuth', 'true');
        return summary;
    },
    addContact(win: ContactWin): Contact {
        let newContact: Contact = {
            win: '',
            chatList: [],
        };
        if (win.includes('@c.us')) {
            newContact = {
                win,
                chatList: [],
            };
        } else {
            newContact = {
                win: win + `@c.us`,
                chatList: [],
            };
        }
        const contacts = JSON.parse(localStorage.getItem('contacts') ?? '[]');
        contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        return newContact;
    },
    getUser(): User {
        return JSON.parse(localStorage.getItem('user') ?? '{}');
    },
    getContacts(): Contact[] {
        return JSON.parse(localStorage.getItem('contacts') ?? '[]');
    },
    deleteContact(win: ContactWin): Contact[] {
        const contacts: Contact[] = JSON.parse(localStorage.getItem('contacts') ?? '[]');
        const contactList = [...contacts.filter((contact) => contact.win !== win)];
        localStorage.setItem('contacts', JSON.stringify(contactList));
        return contactList;
    },
    async sendMessage(summary: MessageRequest): Promise<IdMessage> {
        const user: User = JSON.parse(localStorage.getItem('user') ?? '{}');
        return await axios
            .post(
                `https://api.green-api.com/waInstance${user.idInstance}/SendMessage/${user.apiToken}`,
                {
                    chatId: summary.winContact,
                    message: summary.message,
                },
                {headers: {'Content-Type': 'application/json'}}
            )
            .then((response) => {
                return response.data.idMessage;
            })
            .catch((error) => {
                throw error;
            });
    },
    async getNotification(): Promise<UpdateInfo | null> {
        const user: User = JSON.parse(localStorage.getItem('user') ?? '{}');
        return await axios
            .get(`https://api.green-api.com/waInstance${user.idInstance}/ReceiveNotification/${user.apiToken}`, {
                headers: {'Content-Type': 'application/json'},
            })
            .then((res) => {
                if (res.data !== null) {
                    void this.deleteNotification(res.data.receiptId);
                    const newMessage: UpdateInfo = {
                        win: res.data.body.senderData.chatId,
                        message: {
                            win: res.data.body.senderData.chatId,
                            idMessage: res.data.body.idMessage,
                            text: res.data.body.messageData.textMessageData.textMessage,
                        },
                    };
                    return newMessage;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                throw error;
            });
    },
    async deleteNotification(receiptId: number): Promise<void> {
        const user: User = JSON.parse(localStorage.getItem('user') ?? '{}');
        await axios
            .delete(
                `https://api.green-api.com/waInstance${user.idInstance}/DeleteNotification/${user.apiToken}/${receiptId}`
            )
            .then((res) => {})
            .catch((error) => {
                throw error;
            });
    },
};
export default userGateway;
