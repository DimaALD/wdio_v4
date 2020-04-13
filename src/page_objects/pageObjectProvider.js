"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accountPage_1 = __importDefault(require("./accountPage"));
const mainPage_1 = __importDefault(require("./mainPage"));
const signInPage_1 = __importDefault(require("./signInPage"));
class Provider {
    static getPage(pageName) {
        if (this.pagesMap.has(pageName.toUpperCase())) {
            return this.pagesMap.get(pageName);
        }
        else {
            throw new Error(`Page Object with name ${pageName} is not found`);
        }
    }
    static setPage(pageName, page) {
        this.pagesMap.set(pageName.toUpperCase(), page);
    }
}
Provider.pagesMap = new Map();
Provider.setPage('MAIN_PAGE', new mainPage_1.default());
Provider.setPage('SIGN_IN_PAGE', new signInPage_1.default());
Provider.setPage('ACCOUNT_PAGE', new accountPage_1.default());
exports.default = Provider;
