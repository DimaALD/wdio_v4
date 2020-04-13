import {Condition, ConditionName} from "../types/types"

class Helper {

    static async waitAndClick(selector: string) {
        return await browser.waitForEnabled(selector, 5000).click(selector);
    }

    static async scrollAndClick(selector: string) {
        await browser.scroll(selector).waitForEnabled(selector).click(selector);
    }

    static async clickButtonByText(text: string, selector?: string) {
        const locator = selector ? selector : `button*=${text}`;
        await browser.waitForEnabled(locator).click(locator);
    }

    static async waitAndSendKeys(selector: string, text: string) {
        await browser.waitForEnabled(selector).setValue(selector, text);
    }

    static async scrollToElement(selector: string) {
        await browser.execute('return arguments[0].scrollIntoView({"block": "center", "inline": "center"})', $(selector).value);
    }

    static async waitForCondition(selector: string, conditionName: ConditionName) {
        const conditionMap = new Map<string, Condition>([
            ['VISIBLE', 'waitForVisible'],
            ['SELECTED', 'waitForSelected']
        ]),
        condition = conditionMap.has(conditionName.toUpperCase()) ? conditionMap.get(conditionName.toUpperCase()) : 'waitForVisible';
        if(typeof condition === "string" && condition in browser) {
            await browser.waitForVisible(selector);
        }
    }

}

export default Helper