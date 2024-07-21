// npx playwright codegen localhost: -> npm run e2e
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByTestId('login_button').click();
    await page.getByPlaceholder('User name').click();
    await page.getByPlaceholder('User name').fill('1');
    await page.getByPlaceholder('Password input').click();
    await page.getByPlaceholder('Password input').fill('1');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.locator('#navigation_menu_btn').click();
    await page.getByText('Shop').click();
    await page.getByRole('button', { name: 'Инфо' }).click();
    await page.getByRole('button', { name: 'Закрыть' }).click();
    await page.locator('.v-container > button').first().click();
    await page.getByTestId('cart_button').click();
    await page.locator('div').filter({ hasText: /^Fjallraven - Foldsack No\. 1 Backpack, Fits 15 Laptops1$/ }).getByTestId('product_addBtn').click();
    await page.locator('div').filter({ hasText: /^2$/ }).getByTestId('product_addBtn').click();
    await page.getByRole('button', { name: 'Заказать' }).click();
    await page.getByRole('button', { name: 'Оформить заказ' }).click();
});
