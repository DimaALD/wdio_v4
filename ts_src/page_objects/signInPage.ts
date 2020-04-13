import helper from "../helpers/helper";
import credentials from "../data/credentials/credentials.json";
import mainPageValues from "../data/main_page_variables.json";
import BasePage from "../page_objects/basePage";

export default class SignInPage extends BasePage {
    private username: string = "input#username";
    private password: string = "input#password";

    constructor() {
        super();
    }

    async fillSignInForm() {
        await helper.waitAndSendKeys(this.username, credentials.data.USERNAME);
        await helper.waitAndSendKeys(this.password, credentials.data.PASSWORD);
        await helper.clickButtonByText(mainPageValues.data.SIGN_IN);
    }
}