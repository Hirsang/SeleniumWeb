# SeleniumWeb
Readme Selenium

1. Install Node.js
If you don’t have Node.js installed yet, download and install it from nodejs.org. This will also install npm (Node Package Manager), which you’ll use to install Selenium.

2. Initialize npm in Your Project
Open your terminal or command prompt, navigate to your project directory, and run:
npm init -y 
This will create a package.json file in your project.

3. Install Selenium WebDriver
Run the following command to install the Selenium WebDriver package for JavaScript:
npm install selenium-webdriver

4. Install a Web Browser Driver (e.g., ChromeDriver)
To use Selenium with a specific browser, you’ll also need to install the corresponding browser driver.


if The absence of the node_modules/chromedriver/bin/ directory indicates that chromedriver is not installed as a local dependency in your project. Let's go through the steps to ensure everything is set up correctly.

Steps to Install ChromeDriver and Verify Versions

Install chromedriver Locally: To install the chromedriver package as a local dependency, run: npm install chromedriver --save-dev (This will download the latest version of ChromeDriver that corresponds to your installed version of Google Chrome.)

Check the Installed Version: After installation, check the version of the installed ChromeDriver: npx chromedriver --version

Verify the Directory Structure: Once installed, verify that the chromedriver binary is now present: ls -l node_modules/chromedriver/bin/

Run Your Test Again: After verifying the installation and updating your test script, run your test again.

