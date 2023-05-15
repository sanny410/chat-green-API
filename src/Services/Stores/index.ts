import {createContext, useContext} from 'react';

import userStore from 'Services/Stores/User/index';

const storesContext = createContext({
    userStore,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStores = () => useContext(storesContext);
export default useStores;
