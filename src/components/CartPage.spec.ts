import {afterEach, beforeEach, expect} from "vitest";
import {flushPromises, mount} from "@vue/test-utils";
import {createVuetify} from "vuetify";
import {components, directives} from "vuetify/dist/vuetify";
import CartPage from "./CartPage.vue";
import {createPinia, setActivePinia} from "pinia";
import * as cartData from "@/services/data/cart.ts";
import {useCartStore} from "@/store-pinia/cartStore.ts";
import waitForExpect from "wait-for-expect";

describe('CART PAGE COMPONENT TEST', async () => {
    let wrapper;
    let cartStore;
    beforeEach(() => {
        const vuetify = createVuetify({
            components,
            directives
        })

        setActivePinia(createPinia())
        cartStore = useCartStore();

        cartData.addToCart(productsMock[0]);

        wrapper = mount(CartPage, {
            props: {},
            global: {
                plugins: [vuetify],
            },
        })

    })

    afterEach(() => {
        wrapper.destroy
    })

    await flushPromises()

    it('wrapper exists', () => {
        expect(wrapper.exists).toBeTruthy();
    })
    it('one element', () => {
        const titleElements = wrapper.findAll("[data-testId = 'product']")
        expect(titleElements.length).toBe(1);
    })
    it('two elements', () => {
        cartData.addToCart(productsMock[1]);
        const titleElements = wrapper.findAll("[data-testId = 'product']")
        expect(titleElements.length).toBe(1);
    })

    describe('INIT STORE DATA TEST + SERVICE', () => {
        it('products in cart store', () => {
            expect(cartStore.productsList.length).toBe(1)
        })
        it('service - totals', () => {
            expect(cartData.getAllSummaries()).toEqual(cartStore.totalCounts)
        })
        it('service - same list', () => {
            expect(cartData.getCartProducts()).toEqual(cartStore.productsList)
        })
    })

    describe('CLICK ADD BUTTON:', () => {
        it('updated showing info and store', async () => {
            const addButton = wrapper.findAll("[data-testId = 'product_addBtn']")
            await addButton[0].trigger('click');

            const updTitle = wrapper.findAll("[data-testId = 'product_countBetweenButtons']")

            const updTotalPrice = wrapper.findAll("[data-testId = 'product_totalSum']")
            const totalSum = (productsMock[0].price * 2)


            await waitForExpect(() => {
                expect(updTitle[0].text()).toBe("2")
                expect(updTotalPrice[0].text()).toBe(totalSum.toFixed(2) + ' $')

                expect(cartStore.totalCounts.productsCount).toBe(2)
                expect(cartStore.totalCounts.priceSum).toBe(totalSum)
            })
        })
    })
})