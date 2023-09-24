import { homeURL, cartUrl } from "../../../lib/websites.ts";
import searchbarPage from "../../pages/components/searchbar-page.ts";
import rodoConfirm from "../../pages/components/rodo.ts";
import { textOne } from "../../../lib/date.ts";
import { searchProductURL } from "../../../lib/websites.ts";
import { alertText, deletedMess } from "../../../lib/date.ts";
import productPage from "../../pages/productPage.ts";
import CartPage from "../../pages/CartPage.ts";
import homePage from "../../pages/homePage";

//import homePage from "../../pages/homePage";
describe("E2E - Products", async () => {
  let productTitle: string = "";
  let price: string = "";

  //hook otwierający stronę
  before(() => {
    browser.url(homeURL);
  });
  //
  //albo to co poniżej
  //await homePage.openHomePage();
  //
  it("Should accept Rodo", async () => {
    await rodoConfirm.acceptRodo();
  });

  it("Should type search text and clik icon search", async () => {
    await searchbarPage.typeText(textOne);
    await searchbarPage.clickIcon();
    await expect(browser).toHaveUrl(searchProductURL);
  });

  it("Should click first item", async () => {
    await searchbarPage.clickOnFirstBookItem();
    await productPage.productTitleIsVisible();
    await productPage.productCardBtnIsVisible();
    productTitle = await productPage.getProductTitleValue();
    price = await productPage.getProductPrice();
    await expect(await productPage.getProductPrice()).toContain(price);
    console.log(await productPage.getProductPrice());
  });

  it("Should click on add to cart button", async () => {
    await productPage.clickOnAddToCardBtn();
    await expect(browser).toHaveUrlContaining(cartUrl);
    console.log(await CartPage.getSuccessAlertValue());
    await expect(await CartPage.getSuccessAlertValue()).toContain(productTitle);
  });

  it("Should click check box and delete checkItem", async () => {
    await productPage.checkBox();
    await productPage.Delete();
    await expect(await productPage.Delete()).toContain(alertText);
    await browser.pause(3000);
  });

  it("Should click OK on alert", async () => {
    await productPage.confirmAlert();
    await expect(await productPage.getDeletedAlertMess()).toContain(
      deletedMess
    );
  });

  it("Should back to homepage", async () => {
    await homePage.openHomePage();
  });
});
