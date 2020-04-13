"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePage {
    async getUrlFromPage(selector) {
        if (selector) {
            await browser.waitForVisible(selector, 5000);
        }
        return browser.getUrl();
    }
    async openByUrl(url) {
        await browser.url(url);
    }
}
exports.default = BasePage;
