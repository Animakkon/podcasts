import {createVuetify} from "vuetify";
import {components, directives} from "vuetify/dist/vuetify";
import {afterEach, beforeEach, expect} from "vitest";
import HeaderActions from "./HeaderActions.vue";
import {flushPromises, mount} from "@vue/test-utils";
import {createPinia, setActivePinia} from "pinia";
import {useUserAuthStore} from "@/store-pinia/userAuthStore.ts";
import * as loginAPI from "@/services/data/auth.ts"

describe('PRODUCT PAGE', () => {
        let wrapper;
        let authStore;
        beforeEach(() => {
            const vuetify = createVuetify({
                components,
                directives
            });

            setActivePinia(createPinia())
            authStore = useUserAuthStore();

            wrapper = mount(HeaderActions, {
                props: {},
                global: {
                    plugins: [vuetify],
                }
            });
        })
        afterEach(() => {
            wrapper.destroy
        })

        it('initial store values', () => {
            expect(authStore.getIsAuthorized()).toBeFalsy()
        })

        it('setUserCredentialsAndAuthStatus', async () => {
            authStore.setUserCredentialsAndAuthStatus(credentials, true)
            await flushPromises()
            expect(authStore.getIsAuthorized()).toBeTruthy()
            // from api
            expect(loginAPI.isAuthorized).toBeTruthy()
        })

        it('check button logout', async () => {
            authStore.setUserCredentialsAndAuthStatus(credentials, true)

            const buttons = wrapper.findAll("[data-testId = 'logout_button']")

            expect(buttons.length).toBe(1)
        })
    }
)
