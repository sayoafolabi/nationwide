import BasePage from './src/pages'

class HomePage extends BasePage {

    get mortgage() { return $('a[href="/products/mortgages/our-mortgages/who-we-can-help"]') }
    get rates() { return $('nav[aria-label="New mortgage customers"] > a[href="/products/mortgages/our-mortgage-rates"]') }
    get logo() { return $('#content_1_header_0_primaryheader_1_logonavigation_0_NationwideHomeLogo') }

    

    open() {
        super.open('/')
        $('.ajax-loading-bar').waitForExist(undefined, true)
    }

    hoverOverMortgageTab(){
      browser.moveToElement(this.mortgage)
    }

    clickMortgageRateLink(){
    this.rates.click()
    }

    waitForloginPageToLoad () {
      if(!this.logo.isDisplayed()){
        this.logo.waitForDisplayed(10000);
      }
    }

}

export default new HomePage()
