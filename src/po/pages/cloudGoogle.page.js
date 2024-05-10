const Header = require("../components/common/header.component");

class CloudGooglePage {

    constructor() {
        this.header = new Header();
    }

    async open() {
        await browser.url('https://cloud.google.com/');
    }
}

module.exports = CloudGooglePage;