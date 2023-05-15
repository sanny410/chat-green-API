import {updateChatUseCase} from 'Aplication/useCases/updateChatUseCase';
import {useUserGateway} from 'Services/Adapters/gateway';
import {useUserStore} from 'Services/Adapters/store';
import {MessageRequest} from 'Domain/user';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUpdateChat = () => {
    const userGateway = useUserGateway();
    const userStore = useUserStore();

    return {
        async updateChat(summary: MessageRequest) {
            return await updateChatUseCase(summary, {userGateway, userStore});
        },
    };
};
