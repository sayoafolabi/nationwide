import BasePage from './src/pages'

class ApplicationPage extends BasePage {

    get pageHeader() { return $('<h1 />') }

    open() {
        super.open('products/mortgages/remortgage-to-nationwide/ready-to-apply')
        $('.ajax-loading-bar').waitForExist(undefined, true)
    }


    waitForloginPageToLoad () {
        if(!this.pageHeader.isDisplayed()){
          this.pageHeader.waitForDisplayed(10000);
        }
      }

    getHeaderInfo(){
        return this.pageHeader.getText();
    }

}

export default new ApplicationPage()
