import {UserGateway} from 'Aplication/ports/userGateway';
import {UserStore} from 'Aplication/ports/userStore';
import {User} from 'Domain/user';

interface Dependencies {
    userGateway: UserGateway;
    userStore: UserStore;
}

export const loginUseCase = (user: User, dependencies: Dependencies): void => {
    dependencies.userGateway.login(user);
    dependencies.userStore.setIsAuth(true);
    dependencies.userStore.setUser(user);
};
