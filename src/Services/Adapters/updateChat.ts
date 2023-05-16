import {updateChatUseCase} from 'Aplication/useCases/updateChatUseCase';
import {MessageRequest} from 'Domain/user';
import {useUserGateway} from 'Services/Adapters/gateway';
import {useUserStore} from 'Services/Adapters/store';

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
