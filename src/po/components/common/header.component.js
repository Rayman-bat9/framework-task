class Header {
    get rootEl() {
        return $('.a7K4Uc');
    }

    search() {
        return this.rootEl.$('.ND91id');
    }

    item(param) {
        const selectors = {
            overview: '.QI6NKc [data-navigation-tab-index="0"] .nKZVnd',
            solutions: '.QI6NKc.X7bnNe.IwFYTd[data-navigation-tab-index="1"] .nKZVnd',
            products: '.QI6NKc.X7bnNe.IwFYTd[data-navigation-tab-index="2"] .nKZVnd',
            pricing: '.QI6NKc.X7bnNe.IwFYTd[data-navigation-tab-index="3"] .nKZVnd',
            resources: '.QI6NKc .X7bnNe .IwFYTd [data-navigation-tab-index="4"] .nKZVnd',
        }
        return this.rootEl.$(selectors[param.toLowerCase()]);
    }
}

module.exports = Header;