import {UserGateway} from 'Aplication/ports/userGateway';
import {UserStore} from 'Aplication/ports/userStore';
import {updateContactList, UpdateInfo, Contact} from 'Domain/user';

interface Dependencies {
    userGateway: UserGateway;
    userStore: UserStore;
}

const updateChat = (dependencies: Dependencies, newMessage: UpdateInfo, contact: Contact): void => {
    const updateChat = dependencies.userGateway.updateChat(
        contact,
        newMessage.message.idMessage,
        newMessage.message.text,
        contact.win
    );
    const updateList = updateContactList(updateChat, dependencies.userStore.contactList);
    localStorage.setItem('contacts', JSON.stringify(updateList));
    dependencies.userStore.setContactList(updateList);
};

export const updateCheckUseCase = async (dependencies: Dependencies): Promise<void> => {
    const newMessage = (await dependencies.userGateway.getNotification()) as UpdateInfo;
    if (newMessage !== null) {
        const contact = dependencies.userStore.contactList.find((contact) => contact.win === newMessage.win);
        if (contact !== undefined) {
            updateChat(dependencies, newMessage, contact);
        } else {
            const newContact = dependencies.userGateway.addContact(newMessage.win);
            dependencies.userStore.setContactList([...dependencies.userStore.contactList, newContact]);
            updateChat(dependencies, newMessage, newContact);
        }
    }
};
