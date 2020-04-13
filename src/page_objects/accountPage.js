"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navigationHelper_1 = __importDefault(require("../helpers/navigationHelper"));
const basePage_1 = __importDefault(require("../page_objects/basePage"));
const helper_1 = __importDefault(require("../helpers/helper"));
class AccountPage extends basePage_1.default {
    constructor() {
        super();
        this.appRoot = "div#app";
        this.title = "div[class=limiter] div.txt-h3";
        this.navigationBar = "div.shell-wrapper nav.txt-bold";
    }
    async getTextFromTitle() {
        await helper_1.default.waitForCondition(this.appRoot, 'VISIBLE');
        await helper_1.default.waitForCondition(this.title, 'VISIBLE');
        return await browser.getText(this.title);
    }
    async selectOptionOnNavBar(optionName) {
        await browser.waitForVisible(this.navigationBar);
        await navigationHelper_1.default.selectOptionOnNavigationBar(this.navigationBar, optionName);
    }
}
exports.default = AccountPage;
