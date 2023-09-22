//Importowanie linku
import { homeURL } from "../../lib/websites.ts";

class homePage {
  //otwieranie i asercja
  async openHomePage() {
    await browser.url(homeURL);
    await expect(browser).toHaveUrl(homeURL);
  }

  /*get field() {
    return $("#productsSearch");
  } ZMIENNE*/
}

export default new homePage();
