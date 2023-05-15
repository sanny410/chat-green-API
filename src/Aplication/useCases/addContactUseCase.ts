import {UserGateway} from 'Aplication/ports/userGateway';
import {UserStore} from 'Aplication/ports/userStore';
import {ContactWin} from 'Domain/user';

interface Dependencies {
    userGateway: UserGateway;
    userStore: UserStore;
}

export const addContactUseCase = (win: ContactWin, dependencies: Dependencies): void => {
    const contact = dependencies.userGateway.addContact(win);
    dependencies.userStore.setContactList([...dependencies.userStore.contactList, contact]);
};
