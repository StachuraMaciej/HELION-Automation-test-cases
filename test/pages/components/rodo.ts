class rodoConfirm {
  get btnAccept() {
    return $(".button #rodo-ok");
  }

  async acceptRodo() {
    const btn: WebdriverIO.Element = await this.btnAccept;
    await btn.waitForDisplayed();
    await btn.click();
  }
}

export default new rodoConfirm();
