/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/
const assert = require('assert');

const driver = require('./../../driver');
const uri = 'C:/Users/toby.broadbent/OneDrive - ROQ IT/Documents/Week5JacobDOM/DOMProject/index.html';
const {By} = require('selenium-webdriver');

const {
    After,
    Before,
    Given,
    Then,
    When
} = require('@cucumber/cucumber');
const { getSystemErrorMap } = require('util');

Before({timeout: 8000}, async function() {
    this.driver = driver;
    this.headless = await driver.headless(uri);
});

After({timeout: 8000}, async function() {
    await this.headless.quit();
});

Given('the loaded web-site', async function() {
    // Nothing to do, as set-up loads the site
});

When('toggled using the button', async function() {
    await this.driver.toggle(this.headless);
})

When('toggled using the form button', async function() {
    await this.driver.formToggle(this.headless);
})

Then('the browser title should be {string}', async function(title) {
    assert(title == await this.headless.getTitle());
});

//Not fully working - throws error
Then('the div text should be {string}', async function(signUp) {
    assert(signUp == await this.headless.findElement(By.id('change')));
});

Then('the heading should be {word}', async function(color) {
    const colours = {
        'black': 'rgba(124, 124, 124, 1)'
    };

    const actual = await this.driver.header(this.headless);
    
    const expected = colours[color];
    
    console.log(actual)
    console.log(expected)

    assert(expected != null);
    assert(expected == actual);

});

