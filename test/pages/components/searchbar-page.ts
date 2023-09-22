//Importowanie linku
//import { homeURL } from "../../lib/websites.ts";

class searchbarPage {
  get input() {
    return $("#inputSearch");
  }

  get iconSearch() {
    return $("//button[contains(text(),'Szukaj')]");
  }

  get suggestList() {
    return $("form#szukanie div.suggest-list");
  }

  get seeAllBooksBtn() {
    return $("li.wszystkie > p > a");
  }

  get booksItem() {
    return $$("ul.list > li");
  }

  //pobieranie elementu
  async barIsVisible() {
    const input: WebdriverIO.Element = await this.input;
    //czeka az input jest widoczny
    await input.waitForDisplayed();
  }

  //kliknij w ikone lupki
  async clickIcon() {
    const btn: WebdriverIO.Element = await this.iconSearch;
    await btn.waitForDisplayed();
    await btn.click();
  }

  //wpisz tekst
  async typeText(value: string) {
    const input: WebdriverIO.Element = await this.input;
    await input.waitForDisplayed();
    await input.setValue(value);
  }

  //sprawdzanie czy lista jest widoczna
  async visibleList() {
    const list: WebdriverIO.Element = await this.suggestList;
    await list.waitForDisplayed();
  }

  //kliknij na zobacz wszystkie
  async clickonbtnTwoAllBooks() {
    const btn: WebdriverIO.Element = await this.seeAllBooksBtn;
    await btn.waitForDisplayed();
    // ZASLANIAJA COOKIES PRZYCISK WIEC TRZEBA ZESCROLOWAĆ
    await btn.scrollIntoView();
    await btn.click();
  }

  //zwracaj ilość książek
  async getNumberOfBooks(): Promise<number> {
    const books: WebdriverIO.ElementArray = await this.booksItem;
    return await books.length;
  }

  //wyczyśc input
  async clearSearchBtn() {
    const input: WebdriverIO.Element = await this.input;
    await input.waitForDisplayed();
    //wyczyśc input
    await input.clearValue();
  }

  //sprawdź wartośc inputa
  async checkSearchBtn(): Promise<string> {
    const check: WebdriverIO.Element = await this.input;
    await check.waitForDisplayed();
    //pobierz i zwróc zawartość
    return await check.getValue();
  }
}

export default new searchbarPage();
