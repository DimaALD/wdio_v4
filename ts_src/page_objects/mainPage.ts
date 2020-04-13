import helper from "../helpers/helper";
import navigationHelper from "../helpers/navigationHelper";
import BasePage from "../page_objects/basePage";

export default class MainPage extends BasePage { 

    private navigationBar: string = "[role=navigation]";
    private optionsOnNavBar: string = "[role=navigation] [role=menu]";
    private signIn: string = "a*=Sign in";
    
    async selectOptionOnNavigationBar<T extends string>(optionName: T) {
      await browser.waitForVisible(this.navigationBar);
      await navigationHelper.selectOptionOnNavigationBar(this.navigationBar, optionName, this.optionsOnNavBar);
    }

    async clickOnSignIn() {
        await helper.waitAndClick(this.signIn);
    }
}