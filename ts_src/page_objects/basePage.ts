export default abstract class BasePage {
          
    async getUrlFromPage(selector?: string) {
        if(selector) {
            await browser.waitForVisible(selector, 5000);
        }
        return browser.getUrl();
    }

    async openByUrl(url: string) {
        await browser.url(url);
    }

}