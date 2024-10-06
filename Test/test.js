const { Builder, By, Key } = require('selenium-webdriver');

// Initialize the WebDriver
let driver = new Builder().forBrowser('chrome').build();

async function setValueForElement() {
    const targetText = 'Montbell Trail Wallet';
    const productsearch= 'dompet'
    try {
        // Navigate to the Tokopedia website
        await driver.get('https://www.tokopedia.com');
        

        let searchElement = await driver.findElement(By.css('[data-unify="Search"]'));
        await searchElement.sendKeys(productsearch, Key.RETURN);

        await driver.sleep(2000);

        

        // Fungsi untuk scroll dan menemukan teks
        let found = false;
        while (!found) {
            // Mencari elemen dengan teks target
            const elements = await driver.findElements(By.xpath(`//*[contains(text(), "${targetText}")]`));
            if (elements.length > 0) {
                // Jika elemen ditemukan, klik dan keluar dari loop
                await elements[0].click();
                found = true;
            } else {
                // Jika elemen tidak ditemukan, scroll ke bawah
                await driver.executeScript('window.scrollBy(0, window.innerHeight);');
                await driver.sleep(1000); // Tunggu sebentar sebelum scroll lagi
            }
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the browser after use
        await driver.sleep(5000);
        await driver.quit();
    }
}

setValueForElement();
