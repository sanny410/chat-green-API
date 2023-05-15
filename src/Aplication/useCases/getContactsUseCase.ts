import {UserGateway} from 'Aplication/ports/userGateway';
import {UserStore} from 'Aplication/ports/userStore';

interface Dependencies {
    userGateway: UserGateway;
    userStore: UserStore;
}

export const getContactsUseCase = (dependencies: Dependencies): void => {
    const contacts = dependencies.userGateway.getContacts();
    dependencies.userStore.setContactList(contacts);
};
