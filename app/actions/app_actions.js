import {
    KeyValueStorageUtils,
    NavigationActions,
    saveCustomerData,
    t,
    MetaUtils,
    NetworkServiceSingleton,
    WalkinSecurityUtils,
    LocationActions,
    CommonActions,
    WalkinUtils,
} from '@walkin-frontend/react-native-modular-ui-framework';
import { networkConfig } from '../config';


export function checkLogin(component, url) {
    return (dispatch, getState) => {
        let state = getState();
        console.log(state);
    }
}