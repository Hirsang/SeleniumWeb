const { By, Key } = require('selenium-webdriver');

class SearchPage {
    constructor(driver) {
        this.driver = driver;
        this.searchInput = By.css('[data-unify="Search"]');
    }

    async open(url) {
        await this.driver.get(url);
    }

    async searchForProduct(productsearch) {
        let searchElement = await this.driver.findElement(this.searchInput);
        await searchElement.sendKeys(productsearch, Key.RETURN);
        await this.driver.sleep(2000);
    }

    async findProductByText(targetproduct) {
        let found = false;
        while (!found) {
            const elements = await this.driver.findElements(By.xpath(`//*[contains(text(), "${targetproduct}")]`));
            if (elements.length > 0) {
                await elements[0].click();
                found = true;
            } else {
                await this.driver.executeScript('window.scrollBy(0, window.innerHeight);');
                await this.driver.sleep(1000);
            }
        }
    }
}

module.exports = SearchPage;
