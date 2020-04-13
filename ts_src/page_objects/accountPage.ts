import navigationHelper from "../helpers/navigationHelper";
import BasePage from "../page_objects/basePage";
import helper from "../helpers/helper";

export default class AccountPage extends BasePage {

    private appRoot: string = "div#app";

    private title: string = "div[class=limiter] div.txt-h3";

    private navigationBar: string = "div.shell-wrapper nav.txt-bold";

    constructor() {
        super();
    }

    async getTextFromTitle() {
       await helper.waitForCondition(this.appRoot, 'VISIBLE');
       await helper.waitForCondition(this.title, 'VISIBLE');
       return await browser.getText(this.title);
    }

    async selectOptionOnNavBar<T extends string>(optionName: T) {
       await browser.waitForVisible(this.navigationBar);
       await navigationHelper.selectOptionOnNavigationBar(this.navigationBar, optionName);
    }

    
}