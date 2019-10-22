export default class BasePage {
    constructor() {
        this.title = 'Nationwide Test Base Page'
    }

    open(path) {
        browser.url(path)
    }

}
