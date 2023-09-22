//import { textOne } from "../../../lib/date.ts";

class SearchResultPage {
  get pageTitle() {
    return $("#page-title h1");
  }

  async getPageTitle(): Promise<string> {
    const h1: WebdriverIO.Element = await this.pageTitle;
    await h1.waitForDisplayed();
    return await h1.getValue();
  }
}

export default new SearchResultPage();
