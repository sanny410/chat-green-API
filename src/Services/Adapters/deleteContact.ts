import {deleteContactUseCase} from 'Aplication/useCases/deleteContactUseCase';
import {Contact} from 'Domain/user';
import {useUserGateway} from 'Services/Adapters/gateway';
import {useUserStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDeleteContact = () => {
    const userGateway = useUserGateway();
    const userStore = useUserStore();

    return {
        deleteContact(contact: Contact) {
            return deleteContactUseCase(contact, {userGateway, userStore});
        },
    };
};
