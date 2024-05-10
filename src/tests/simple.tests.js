const { expect, browser, $ } = require('@wdio/globals');
const CloudGooglePage = require("./../po/pages/cloudGoogle.page.js");
const ComputeEnginePage = require("./../po/pages/computeEngine.page.js");

const cloudGooglePage = new CloudGooglePage();
const computeEnginePage = new ComputeEnginePage();

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

    it('Fill Compute Engine form', async () => {
        // Number of instances: 4
        await computeEnginePage.computeEngineForm.numberOfInstances().setValue('4');

         // Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
        await browser.execute(() => {
            document.querySelector('#c21').click();
        })
        await computeEnginePage.computeEngineForm.operatingSystemSoftware().click();

        // Provisioning model: Regular
        await computeEnginePage.computeEngineForm.provisioningModel('regular').click();

        // Machine Family: General purpose 
        await browser.execute(() => {
            document.querySelector('#c25').click();
        })

        await computeEnginePage.computeEngineForm.machineType('machineFamily').click();

        // Series: N1 
        await browser.execute(() => {
            document.querySelector('#c29').click();
        })
        await computeEnginePage.computeEngineForm.machineType('series').click();

        // Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await browser.execute(() => {
            document.querySelector('#c33').click();
        })
        await computeEnginePage.computeEngineForm.machineType('machineType').click();

        await $('button[aria-label="Add GPUs"]').click();

        // Select region
        await browser.execute(() => {
            document.querySelector('#c45').click();
        })
        await $('li[data-value="europe-west3"]').click()

        // Committed use discount options - 1 year
        await computeEnginePage.computeEngineForm.payDuration('year').click();


        await browser.pause(3000);

        // Click button share
        await $('button[aria-label="Open Share Estimate dialog"]').click()

        // Open estimate summary
        await $('//a[text()="Open estimate summary"]').click()
    })

    it ('Verify that the "Cost Estimate Summary" matches with filled values', async () => {

        await browser.waitUntil(async () => {
            return (await browser.getWindowHandles()).length > 1
        }, { timeout: 10000, timeoutMsg: 'Expected new tab to be opened' })

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])

        const machineType = await $('//span[text()="n1-standard-8, vCPUs: 8, RAM: 30 GB"]').getText()
        expect(machineType).toExist()

        const osSoftware = await $('//span[text()="Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)"]').getText()
        expect(osSoftware).toExist()

        const provisioningModel = await $('//span[text()="Regular"]').getText()
        expect(provisioningModel).toExist()

        const region = await $('//span[text()="Frankfurt (europe-west3)"]').getText()
        expect(region).toExist()

        const discountOption = await $('//span[text()="1 year"]').getText()
        expect(discountOption).toExist()
    })
})