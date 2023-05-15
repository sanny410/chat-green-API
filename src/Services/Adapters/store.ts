import {UserStore} from 'Aplication/ports/userStore';
import useStores from 'Services/Stores/index';

export const useUserStore = (): UserStore => useStores().userStore;
