"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mainPage_1 = __importDefault(require("../page_objects/mainPage"));
const signInPage_1 = __importDefault(require("../page_objects/signInPage"));
const accountPage_1 = __importDefault(require("../page_objects/accountPage"));
const expectedResult_json_1 = __importDefault(require("../data/expectedResult.json"));
const urls_json_1 = __importDefault(require("../data/urls.json"));
const mainPage = new mainPage_1.default();
const signInPage = new signInPage_1.default();
const accountPage = new accountPage_1.default();
describe('Log in to MapBox.com and verify that page is opened', () => {
    before(() => {
        browser.url('');
    });
    it('Opem MapBox', async () => {
        (await browser.getUrl()).should.to.be.equal(urls_json_1.default.data.MAP_BOX);
    });
    it('Click sign in MapBox', async () => {
        await mainPage.clickOnSignIn();
        await (await mainPage.getUrlFromPage()).should.to.be.equal(urls_json_1.default.data.SIGN_IN);
    });
    it('Fill sign in form', async () => {
        await signInPage.fillSignInForm();
        return await (await signInPage.getUrlFromPage()).should.to.be.equal(urls_json_1.default.data.ACCOUNT);
    });
    it('Check title on account page', async () => {
        (await accountPage.getTextFromTitle()).should.to.be.equal(expectedResult_json_1.default.data.WELCOME_TITLE);
    });
    it('Switch to Settings', async () => {
        await accountPage.selectOptionOnNavBar('Settings');
    });
    after(() => {
        browser.close();
    });
});
