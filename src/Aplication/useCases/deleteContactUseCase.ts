import {UserGateway} from 'Aplication/ports/userGateway';
import {UserStore} from 'Aplication/ports/userStore';
import {Contact} from 'Domain/user';

interface Dependencies {
    userGateway: UserGateway;
    userStore: UserStore;
}

export const deleteContactUseCase = (contact: Contact, dependencies: Dependencies): void => {
    const updateContactList = dependencies.userGateway.deleteContact(contact.win);
    dependencies.userStore.setContactList(updateContactList);
};
