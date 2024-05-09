import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/sport');

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/SPORT/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/sport/');

  // Click the home  link.
  await page.locator('xpath=//*[@id="product-navigation-menu"]/div[2]/ul/li[1]/a/span').click();

  // Click the Football link
  await page.locator('xpath=//*[@id="product-navigation-menu"]/div[2]/ul/li[2]/a/span').click();

 // Click the fixtures
 await page.locator('xpath=//span[normalize-space()="Scores & Fixtures"]').click();



 // Click search for team
 await page.locator('xpath=//input[@id="searchInput"]').click();
});
