import {flushPromises, mount} from "@vue/test-utils";
import Login from "./Login.vue";
import {createVuetify} from "vuetify";
import {components, directives} from "vuetify/dist/vuetify";
import {useRouter} from "vue-router";
import {afterEach, beforeEach, expect} from "vitest";
import waitForExpect from "wait-for-expect";

vi.mock('vue-router', () => ({
    useRouter: vi.fn(),
}))

describe('LOGIN FORM COMPONENT', () => {
    let wrapper: Wrapper;
    beforeEach(() => {
        const vuetify = createVuetify({
            components,
            directives
        })

        wrapper = mount(Login, {
            props: {},
            global: {
                plugins: [vuetify],
            },
        })
    })
    afterEach(() => {
        wrapper.destroy
    })

    it('correct button label', async () => {
        const loginButton = await wrapper.findComponent({name: 'v-btn'})
        expect(loginButton.text()).toBe('Log in')
    })

    it('correct h2 label', async () => {
        const headerLabel = await wrapper.findAll('h2')
        expect(headerLabel.at(0).text()).toBe('Authentifications')
    })
})