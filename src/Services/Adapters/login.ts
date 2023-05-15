import {loginUseCase} from 'Aplication/useCases/loginUseCase';
import {User} from 'Domain/user';
import {useUserGateway} from 'Services/Adapters/gateway';
import {useUserStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLogin = () => {
    const userGateway = useUserGateway();
    const userStore = useUserStore();

    return {
        login(user: User) {
            return loginUseCase(user, {userGateway, userStore});
        },
    };
};
