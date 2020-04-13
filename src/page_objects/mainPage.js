"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __importDefault(require("../helpers/helper"));
const navigationHelper_1 = __importDefault(require("../helpers/navigationHelper"));
const basePage_1 = __importDefault(require("../page_objects/basePage"));
class MainPage extends basePage_1.default {
    constructor() {
        super(...arguments);
        this.navigationBar = "[role=navigation]";
        this.optionsOnNavBar = "[role=navigation] [role=menu]";
        this.signIn = "a*=Sign in";
    }
    async selectOptionOnNavigationBar(optionName) {
        await browser.waitForVisible(this.navigationBar);
        await navigationHelper_1.default.selectOptionOnNavigationBar(this.navigationBar, optionName, this.optionsOnNavBar);
    }
    async clickOnSignIn() {
        await helper_1.default.waitAndClick(this.signIn);
    }
}
exports.default = MainPage;
