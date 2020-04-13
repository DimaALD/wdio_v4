import AccountPage from "./accountPage";
import MainPage from "./mainPage";
import SignInPage from "./signInPage";

export default class Provider {

    private static pagesMap = new Map();

    static getPage(pageName: string) {
        if(this.pagesMap.has(pageName.toUpperCase())) {
            return this.pagesMap.get(pageName);
        } else {
            throw new Error(`Page Object with name ${pageName} is not found`);
        }
        
    }

    static setPage(pageName: string, page: object) {
        this.pagesMap.set(pageName.toUpperCase(), page);
    } 
}

Provider.setPage('MAIN_PAGE', new MainPage());
Provider.setPage('SIGN_IN_PAGE', new SignInPage());
Provider.setPage('ACCOUNT_PAGE', new AccountPage());