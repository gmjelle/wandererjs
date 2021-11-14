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
});

test("should show a tooltip", async ({ page }) => {
  await page.waitForSelector(ATTRIBUTE_SELECTOR.replace("@@@", "tooltip"));
});

test("should show a tooltip on the second element", async ({ page }) => {
  await page.waitForSelector(ATTRIBUTE_SELECTOR.replace("@@@", "tooltip"));
  await page.click("#element1");
  expect(await page.screenshot()).toMatchSnapshot("sanity1.png", {
    threshold: 0.2,
  });
});

test("should hide the tooltip once the trip is completed", async ({ page }) => {
  await page.waitForSelector(ATTRIBUTE_SELECTOR.replace("@@@", "tooltip"));
  await page.click("#element1");
  await page.click("#element2");

  await page.waitForSelector(ATTRIBUTE_SELECTOR.replace("@@@", "tooltip"), {
    state: "detached",
  });
});
