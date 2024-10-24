const { By, until } = require('selenium-webdriver');

class ProductPage {
    constructor(driver) {
        this.driver = driver;
    }

    async spesifikasi() {
        const spesifik = await this.driver.wait(until.elementLocated(By.xpath("//p[normalize-space()='Spesifikasi']")), 10000);
        spesifik.click()
    }

    async infopenting() {
        const info = await this.driver.wait(until.elementLocated(By.xpath("//p[normalize-space()='Info Penting']")), 10000);
        info.click()
    }
    async infotoko(){
        const toko = await this.driver.wait(until.elementLocated(By.css('[data-testid="imgPDPFooterShopBadge"]')), 10000);
        toko.click();
    }
}

module.exports = ProductPage;
