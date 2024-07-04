import {getPersonInfo} from "../../api/APerson.ts";
import {IPersonInfo} from "../../../public/dataTypes/dataTypes.ts";
import {usePersonalInfoStore} from "../../store-pinia/personalInfoStore.ts";


    export function setPersonInfoByLogin(login: string): Promise<IPersonInfo> {
        return getPersonInfo(login);
    }

    function _personInfoStore() {
        return usePersonalInfoStore();
    }

    export function getCurrentPersonInfo() {
        const res = _personInfoStore().personInfo
        return res;
    }
