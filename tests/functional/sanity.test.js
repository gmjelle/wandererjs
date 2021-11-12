const { test, expect } = require("@playwright/test");
const { PAGES_URL, ATTRIBUTE_SELECTOR } = require("../config");

test.beforeEach(async ({ page }) => {
  await page.goto(PAGES_URL + "/sanity.html");
  const title = await page.title();
  expect(title).toEqual("Sanity");
});

test("The Trip constructor should be on the window", async ({ page }) => {
  const exists = await page.evaluate(() => {
    return Boolean(window.Trip);
  });
  expect(exists).toBe(true);
  expect(await page.screenshot()).toMatchSnapshot("sanity1.png");
});

test("it should show a tooltip", async ({ page }) => {
  await page.waitForSelector(ATTRIBUTE_SELECTOR.replace("@@@", "tooltip"));
  expect(await page.screenshot()).toMatchSnapshot("sanity2.png");
});
