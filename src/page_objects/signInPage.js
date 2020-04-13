"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __importDefault(require("../helpers/helper"));
const credentials_json_1 = __importDefault(require("../data/credentials/credentials.json"));
const main_page_variables_json_1 = __importDefault(require("../data/main_page_variables.json"));
const basePage_1 = __importDefault(require("../page_objects/basePage"));
class SignInPage extends basePage_1.default {
    constructor() {
        super();
        this.username = "input#username";
        this.password = "input#password";
    }
    async fillSignInForm() {
        await helper_1.default.waitAndSendKeys(this.username, credentials_json_1.default.data.USERNAME);
        await helper_1.default.waitAndSendKeys(this.password, credentials_json_1.default.data.PASSWORD);
        await helper_1.default.clickButtonByText(main_page_variables_json_1.default.data.SIGN_IN);
    }
}
exports.default = SignInPage;
