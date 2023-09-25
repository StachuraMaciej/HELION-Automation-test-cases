class productPage {
  get productTitle() {
    return $("div.title-group > h1 > span[itemprop = 'name']");
  }

  get addToCardBtn() {
    return $("#addToBasket_tefust");
  }

  get productPrice() {
    return $("ins#cena_d");
  }

  get totalPrice() {
    return $("h3#cart-edit-summary");
  }

  get box() {
    return $(
      "tr.pozycja > td.checkbox > div.checkbox-line > label > span.input"
    );
  }

  get deleteInput() {
    return $("p.table-options-delete-basket");
  }

  get deletadeAlertMes() {
    return $("div.infobox > p");
  }

  async productTitleIsVisible() {
    const title: WebdriverIO.Element = await this.productTitle;
    await title.waitForDisplayed();
  }

  async productCardBtnIsVisible() {
    const card: WebdriverIO.Element = await this.addToCardBtn;
    await card.waitForDisplayed();
  }

  async clickOnAddToCardBtn() {
    const card: WebdriverIO.Element = await this.addToCardBtn;
    await card.scrollIntoView();
    await card.waitForDisplayed();
    await card.click();
  }

  async getProductTitleValue(): Promise<string> {
    const title: WebdriverIO.Element = await this.productTitle;
    await title.waitForDisplayed();
    return await title.getText();
  }

  async getProductPrice(): Promise<string> {
    const price: WebdriverIO.Element = await this.productPrice;

    return await price.getText();
  }

  async getTotalPriceValue(): Promise<string> {
    const price: WebdriverIO.Element = await this.totalPrice;
    await price.waitForDisplayed();
    return await price.getText();
  }

  async checkBox() {
    const check: WebdriverIO.Element = await this.box;
    await check.waitForDisplayed();
    await check.click();
  }
  async Delete() {
    const link: WebdriverIO.Element = await this.deleteInput;
    await link.waitForDisplayed();
    await link.click();
    const alertText: string = await browser.getAlertText();
    return await alertText;
  }

  async confirmAlert() {
    //await browser.waitUntil(() => browser.getAlertText() !== undefined);
    await browser.acceptAlert();
  }

  async getDeletedAlertMess(): Promise<string> {
    const mess: WebdriverIO.Element = await this.deletadeAlertMes;
    await mess.waitForDisplayed();
    return await mess.getText();
  }
}

export default new productPage();
