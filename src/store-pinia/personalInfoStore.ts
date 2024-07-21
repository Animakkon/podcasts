import {defineStore} from "pinia";
import {ref} from "vue";
import {IPersonInfo} from "../../public/dataTypes/dataTypes.ts";
import { setPersonInfoByLogin } from "../services/data/personInfo.ts";

export const usePersonalInfoStore = defineStore('personalInfo', () => {
        const EMPTY_PERSON: IPersonInfo = {
            id: '',
            name: '',
            surname: '',
            lastName: '',
            dateBirth: '',
            image: '',
            data: {
                address: [],
                cards: [],
                credentialsToShow: {
                    login: ''
                }
            }
        };

        const personInfo = ref(EMPTY_PERSON);

        async function fillPersonInfo(personLogin: string) {
            if (personLogin.length) {
                setPersonInfoByLogin(personLogin)
                    .then(res => {
                        setDataIntoPersonInfo(res);
                    });
                // установка информации для конкретного пользователя

            } else {
                setDataIntoPersonInfo(EMPTY_PERSON);
            }
        }

        function setDataIntoPersonInfo(data: IPersonInfo) {
            personInfo.value = data as IPersonInfo;
        }

        return {
            buildPersonalInfo: fillPersonInfo,
            personInfo
        }
    },
    {
        persist: true,
    })
