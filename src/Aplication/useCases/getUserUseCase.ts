import {UserGateway} from 'Aplication/ports/userGateway';
import {UserStore} from 'Aplication/ports/userStore';

interface Dependencies {
    userGateway: UserGateway;
    userStore: UserStore;
}

export const getUserUseCase = (dependencies: Dependencies): void => {
    const user = dependencies.userGateway.getUser();
    dependencies.userStore.setUser(user);
};
