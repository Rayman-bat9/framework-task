class ComputeEngineForm {
    get rootEl() {
        return $('.vHartc');
    }

    numberOfInstances() {
        return this.rootEl.$('#c11');
    }

    operatingSystemSoftware() {
        return this.rootEl.$('[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"]');
    }

    provisioningModel(param) {
        const selectors = {
            regular: '[for="regular"]',
            spot: '[for="spot"]',
        }
        return this.rootEl.$(selectors[param.toLowerCase()]);
    }
    
    machineType(param) {
        const selectors = {
            machineFamily: '[data-value="general-purpose"]',
            series: '[data-value="n1"]',
            machineType: '[data-value="n1-standard-8"]',
        }
        return this.rootEl.$(selectors[param]);
    }

    payDuration(param) {
        const selectors = {
            none: '[for="none"]',
            year: '[for="1-year"]',
            threeYears: '[for="3-years"]',
        }
        return this.rootEl.$(selectors[param]);
    }
}

module.exports = ComputeEngineForm;