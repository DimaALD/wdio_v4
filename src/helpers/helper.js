"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    static async waitAndClick(selector) {
        return await browser.waitForEnabled(selector, 5000).click(selector);
    }
    static async scrollAndClick(selector) {
        await browser.scroll(selector).waitForEnabled(selector).click(selector);
    }
    static async clickButtonByText(text, selector) {
        const locator = selector ? selector : `button*=${text}`;
        await browser.waitForEnabled(locator).click(locator);
    }
    static async waitAndSendKeys(selector, text) {
        await browser.waitForEnabled(selector).setValue(selector, text);
    }
    static async scrollToElement(selector) {
        await browser.execute('return arguments[0].scrollIntoView({"block": "center", "inline": "center"})', $(selector).value);
    }
    static async waitForCondition(selector, conditionName) {
        const conditionMap = new Map([
            ['VISIBLE', 'waitForVisible'],
            ['SELECTED', 'waitForSelected']
        ]), condition = conditionMap.has(conditionName.toUpperCase()) ? conditionMap.get(conditionName.toUpperCase()) : 'waitForVisible';
        if (typeof condition === "string" && condition in browser) {
            await browser.waitForVisible(selector);
        }
    }
}
exports.default = Helper;
