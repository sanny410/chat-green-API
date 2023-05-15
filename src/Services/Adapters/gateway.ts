import {UserGateway} from 'Aplication/ports/userGateway';
import userGateway from 'Services/Gateways/User/index';

export const useUserGateway = (): UserGateway => userGateway;
