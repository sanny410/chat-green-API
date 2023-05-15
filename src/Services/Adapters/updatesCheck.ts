import {updateCheckUseCase} from 'Aplication/useCases/updatesCheckUseCase';
import {useUserGateway} from 'Services/Adapters/gateway';
import {useUserStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUpdateCheck = () => {
    const userGateway = useUserGateway();
    const userStore = useUserStore();

    return {
        async updateCheck() {
            return await updateCheckUseCase({userGateway, userStore});
        },
    };
};
