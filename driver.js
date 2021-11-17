require('chromedriver'); // for availability
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

module.exports = (() => {
    return {
        // To initialize a 'headless' browser for testing
        headless: async (url) => {
            const headless = new webdriver.Builder().forBrowser('chrome').
            setChromeOptions(new chrome.Options().headless().
            setAcceptInsecureCerts(true).
            windowSize({width: 1920, height: 1200})).
            build();

            await headless.get(url);
            return headless;
        },

        // Returns body colour
        header: async (headless, expected) => {
            const css = webdriver.By.css('.Color-change');
            const el = await headless.findElement(css);
            return await el.getCssValue('background-color');
        },

        /* Returns p tag text
        pTag: async (headless, expected) => {
            const css = webdriver.By.id('change');
            const el = await headless.findElement(css);
            return await el.getAttribute("innerHTML");
        },
        */
       
        // Clicks the toggle button
        toggle: async (headless) => {
            const css = webdriver.By.css('#toggle');
            const el = await headless.findElement(css);
            el.click();
        },

        // Clicks the form toggle button
        formToggle: async (headless) => {
            const css = webdriver.By.css('#signUp');
            const el = await headless.findElement(css);
            el.click();
        }
    };
})();