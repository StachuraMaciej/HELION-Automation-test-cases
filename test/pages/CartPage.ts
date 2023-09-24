class CartPage {
  get successAlert() {
    return $("div.successbox > p");
  }

  async getSuccessAlertValue(): Promise<string> {
    const alert: WebdriverIO.Element = await this.successAlert;
    await alert.waitForDisplayed();
    return await alert.getText();
  }
}

export default new CartPage();
