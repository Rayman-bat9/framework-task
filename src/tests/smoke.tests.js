const { expect, browser, $ } = require('@wdio/globals');
const CloudGooglePage = require("./../po/pages/cloudGoogle.page.js");

const cloudGooglePage = new CloudGooglePage();

describe('', async () => {
    it('Check page title', async () => {
        await cloudGooglePage.open();
        await expect(browser).toHaveTitle('Cloud Computing Services | Google Cloud');
    })

    it('Search calculator', async () => {
        //click on a search button in the header
        await cloudGooglePage.header.search().click();

        //type text on a search bar
        await $('#i4').setValue('Google Cloud Platform Pricing Calculator');

        //click on button to complete a search
        await $('.PETVs-OWXEXe-UbuQg').click();
    })

    it('Open Compute Engine', async () => {

        // click on "Google Cloud Pricing Calculator"
        await $('//a[text()="Google Cloud Pricing Calculator"]').click();

        // click on button Add to estimate
        await $('//span[text()="Add to estimate"]').click();

        // click on Compute Engine calculator
        await $('//h2[text()="Compute Engine"]').click();
    })

    it('Open Cost Estimate Summary', async () => {

        // Click button share
        await $('button[aria-label="Open Share Estimate dialog"]').click()

        // Open estimate summary
        await $('//a[text()="Open estimate summary"]').click()
    })

    it('', async () => {

        await browser.waitUntil(async () => {
            return (await browser.getWindowHandles()).length > 1
        }, { timeout: 10000, timeoutMsg: 'Expected new tab to be opened' })

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])

        await expect('.OtcLZb').toBeDisplayed();
    })
})