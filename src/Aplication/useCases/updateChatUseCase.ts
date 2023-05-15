import {UserGateway} from 'Aplication/ports/userGateway';
import {UserStore} from 'Aplication/ports/userStore';
import {MessageRequest, updateContactList} from 'Domain/user';

interface Dependencies {
    userGateway: UserGateway;
    userStore: UserStore;
}

export const updateChatUseCase = async (summary: MessageRequest, dependencies: Dependencies): Promise<void> => {
    const idMessage = await dependencies.userGateway.sendMessage(summary);
    const contact = dependencies.userStore.contactList.find((contact) => contact.win === summary.winContact);
    if (contact !== undefined) {
        const updateChat = dependencies.userGateway.updateChat(contact, idMessage, summary.message, dependencies.userStore.user.idInstance);
        const updateList = updateContactList(updateChat, dependencies.userStore.contactList);
        localStorage.setItem('contacts', JSON.stringify(updateList));
        dependencies.userStore.setContactList(updateList);
    }
};
