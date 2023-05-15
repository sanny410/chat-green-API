import {getContactsUseCase} from 'Aplication/useCases/getContactsUseCase';
import {useUserGateway} from 'Services/Adapters/gateway';
import {useUserStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetContacts = () => {
    const userGateway = useUserGateway();
    const userStore = useUserStore();

    return {
        getContacts() {
            return getContactsUseCase({userGateway, userStore});
        },
    };
};
