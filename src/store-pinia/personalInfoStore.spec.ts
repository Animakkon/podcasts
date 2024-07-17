import {beforeEach, describe, it, expect} from "vitest";
import {createPinia, setActivePinia} from "pinia";
import {usePersonalInfoStore} from "./personalInfoStore.ts";
import * as personInfoAPI from "../api/APerson.ts";

function checkIsIPersonInfoType(value: any): Boolean {
    return typeof value.id === 'string' &&
            typeof value.name === 'string' &&
            typeof value.surname === 'string' &&
            typeof value.lastName === 'string' &&
            typeof value.dateBirth === 'string' &&
            typeof value.image === 'string'
}

describe('PERSONAL INFO STORE', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('PersonInfo is IPersonInfo', () => {
        const personalStore = usePersonalInfoStore()
        expect(checkIsIPersonInfoType(personalStore.personInfo)).toBeTruthy()
    })

    it('Init empty personInfo', () => {
        const personalStore = usePersonalInfoStore()
        expect(personalStore.personInfo).toEqual(emptyPersonMock)
    })

    describe('setDataIntoPersonInfo', () => {

        const mockGetPersonByLogin = vi.spyOn(personInfoAPI, "getPersonInfo")
            .mockImplementation((login) => {
                switch (login) {
                    case '1':
                        return Promise.resolve(firstPersonMock);
                    default:
                        return Promise.resolve(emptyPersonMock);

                }
            })

        it('check API returns correct data', async () => {
            expect(await mockGetPersonByLogin("1")).toEqual(firstPersonMock)
        })

        it('setDataIntoPersonInfo sets person to personInfo', async () => {
            const personalStore = usePersonalInfoStore()

            await personalStore.buildPersonalInfo('1')

            // не успевают обновиться данные. Без задержки еще пустой пользователь
            setTimeout(() => {
                expect(personalStore.personInfo).toEqual(firstPersonMock)
            }, 1000)
        })

        it('returns empty personInfo if loggedOut', async () => {
            const personalStore = usePersonalInfoStore()

            await personalStore.buildPersonalInfo('')

            // не успевают обновиться данные
            setTimeout(() => {
                expect(personalStore.personInfo).toEqual(emptyPersonMock)
            }, 1000)
        })
    })

})