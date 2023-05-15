import {addContactUseCase} from 'Aplication/useCases/addContactUseCase';
import {ContactWin} from 'Domain/user';
import {useUserGateway} from 'Services/Adapters/gateway';
import {useUserStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAddContact = () => {
    const userGateway = useUserGateway();
    const userStore = useUserStore();

    return {
        addContact(win: ContactWin) {
            return addContactUseCase(win, {userGateway, userStore});
        },
    };
};
