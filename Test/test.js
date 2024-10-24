const { Builder, By, until } = require('selenium-webdriver');
const SearchPage = require('../PageObject/searchpage');
const TestData = require('../setvariabel');
const productpage = require('../PageObject/detailproductpage');


async function SeleniumWebTest() {
    const driver = new Builder().forBrowser('chrome').build();
    const {targetproduct, baseurl, productsearch, }=TestData;
    const searchPage = new SearchPage(driver);
    const productPage = new productpage(driver);

    try {
        // Navigate to the Tokopedia website and perform the search
        await searchPage.open(baseurl);
        await searchPage.searchForProduct(productsearch);

        // Scroll and find the product by text
        await searchPage.findProductByText(targetproduct);
        await productPage.infopenting();
        await driver.sleep(1000);
        await productPage.spesifikasi();
        await productPage.infotoko();
        
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the browser after the test
        await driver.sleep(5000);
        await driver.quit();
    }
}

SeleniumWebTest();
