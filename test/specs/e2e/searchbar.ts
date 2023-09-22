import homePage from "../../pages/homePage";
import searchbarPage from "../../pages/components/searchbar-page.ts";
import SearchResultPage from "../../pages/components/result-page-1.ts";
import rodoConfirm from "../../pages/components/rodo.ts";
import { searchStep, searchPageURL } from "../../../lib/websites.ts";
import { textOne } from "../../../lib/date.ts";

describe("E2E search bar", async () => {
  it("Should open page and verify url", async () => {
    // Zaimportowanie metody z folderu pages
    await homePage.openHomePage();
    await searchbarPage.barIsVisible();
  });

  it("Should accept Rodo", async () => {
    // Zaimportowanie metody z folderu pages
    await rodoConfirm.acceptRodo();
    await browser.pause(3000);
  });

  it("Should click on the icon", async () => {
    // Zaimportowanie metody z folderu pages
    await searchbarPage.clickIcon();
    await expect(browser).toHaveUrl(searchStep);
  });

  it("Should type search value and verify and verify visible list", async () => {
    // Zaimportowanie metody z folderu pages
    await searchbarPage.typeText(textOne);
    await searchbarPage.visibleList();
    await browser.pause(3000);
  });

  it("Should accept Rodo", async () => {
    // Zaimportowanie metody z folderu pages
    await rodoConfirm.acceptRodo();
    await browser.pause(3000);
  });

  it("Should click on see all books button", async () => {
    // Zaimportowanie metody z folderu pages
    await searchbarPage.clickonbtnTwoAllBooks();
    await expect(browser).toHaveUrl(searchPageURL);
  });

  it("Should verify text of title and number of books", async () => {
    // Zaimportowanie metody z folderu pages
    await SearchResultPage.getPageTitle();
    const numberOfBooks: number = await searchbarPage.getNumberOfBooks();

    await expect(numberOfBooks).toEqual(120);
  });
  it("Should clear input value", async () => {
    await searchbarPage.clearSearchBtn();
    await expect(await searchbarPage.checkSearchBtn()).toContain("");
  });
});
