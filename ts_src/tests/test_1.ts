import MainPage from "../page_objects/mainPage";
import SignInPage from "../page_objects/signInPage";
import AccountPage from "../page_objects/accountPage";

import mainPageValues from "../data/main_page_variables.json";
import expectedResult from "../data/expectedResult.json";
import urls from "../data/urls.json"

import helper from "../helpers/helper";

const mainPage = new MainPage();
const signInPage = new SignInPage();
const accountPage = new AccountPage();

describe('Log in to MapBox.com and verify that page is opened', () => {

    before(() => {
        browser.url('')
    })

    it('Opem MapBox', async () => {
        (await browser.getUrl()).should.to.be.equal(urls.data.MAP_BOX);
    })

    it('Click sign in MapBox', async () => {
        await mainPage.clickOnSignIn();
        await (await mainPage.getUrlFromPage()).should.to.be.equal(urls.data.SIGN_IN);
    })

    it('Fill sign in form', async () => {
        await signInPage.fillSignInForm();
        return await (await signInPage.getUrlFromPage()).should.to.be.equal(urls.data.ACCOUNT);
    })

    it('Check title on account page', async () => {
        (await accountPage.getTextFromTitle()).should.to.be.equal(expectedResult.data.WELCOME_TITLE);
    })

    it('Switch to Settings', async () => {
        await accountPage.selectOptionOnNavBar('Settings');
    })

    after(() => {
        browser.close()
    })
})