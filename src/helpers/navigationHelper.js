"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NavigationHelper {
    static async selectOptionOnNavigationBar(baseElement, textValue, list = "a") {
        const baseElementId = await ((await browser.element(baseElement)).value.ELEMENT);
        const array = await browser.elementIdElements(await baseElementId, list);
        for (const element of await array.value) {
            const text = await (await browser.elementIdText(element.ELEMENT)).value;
            if (await text.toLowerCase() === textValue.toLowerCase()) {
                return await browser.elementIdClick(element.ELEMENT);
            }
        }
    }
}
exports.default = NavigationHelper;
