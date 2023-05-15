import {getUserUseCase} from 'Aplication/useCases/getUserUseCase';
import {useUserGateway} from 'Services/Adapters/gateway';
import {useUserStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetUser = () => {
    const userGateway = useUserGateway();
    const userStore = useUserStore();

    return {
        getUser() {
            return getUserUseCase({userGateway, userStore});
        },
    };
};
