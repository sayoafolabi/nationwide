import BasePage from './src/pages'

class RatesPage extends BasePage {

    get noNationwideMortgage() { return $('#selectorItemHaveNationwideMortgage1 span') }
    get changingLender() { return $('#selectorItemNationwideMortgageTypeNo2 span') }
    get propertyValue() { return $('#SearchPropertyValue') }
    get mortgageAmount() { return $('#SearchMortgageAmount') }
    get mortgageTerm() { return $('#SearchMortgageTerm') }
    get findRateBtn() { return $('#myButton') }
    get fixedRateBox() { return $('#fixed span') }
    get withFeeBox() { return $('#product-fee-fee span') }
    get moreInfo() { return $('a[href="#prod142250"] span.iconText.closed') }
    get applyBtn() { return $('a[href="/products/mortgages/remortgage-to-nationwide/ready-to-apply"]') }
    get twoYrsFixed() { return $('#table20_ProductName') }
    get threeYrsFixed() { return $('#table21_ProductName') }
    get fiveYrsFixed() { return $('#table22_ProductName') }
    get tenYrsFixed() { return $('#table23_ProductName') }



    getTwoYrsFixedText(){
      return this.twoYrsFixed.getText();
      }

    getThreeYrsFixedText(){
    return this.threeYrsFixed.getText();
    }

    getFiveYrsFixedText(){
      return this.fiveYrsFixed.getText();
      }

    getTenYrsFixedText(){
    return this.tenYrsFixed.getText();
    }


    enterPropertyValue(value)
    {
      this.propertyValue.setValue(value);
    }

    enterMortgageAmount(amt)
    {
      this.mortgageAmount.setValue(amt);
    }

    enterMortgageTerm(term)
    {
      this.mortgageTerm.setValue(term);
    }

    waitForloginPageToLoad () {
      if(!this.noNationwideMortgage.isDisplayed()){
        this.noNationwideMortgage.waitForDisplayed(10000);
      }
    }


    open() {
      super.open('products/mortgages/our-mortgage-rates')
      $('.ajax-loading-bar').waitForExist(undefined, true)
  }


    expandMoreInfo(){
        this.moreInfo.click()
    }

    clickNoNationwideMortgage(){
      this.noNationwideMortgage.click()
    }

    clickChangingLender(){
      this.changingLender.click()
    }

    findRate() {
        this.findRateBtn.click()
        $('.ajax-loading-bar').waitForExist(undefined, true)
    }

    tickFixedRateBox(){
      this.fixedRateBox.click()
    }

    tickWithFeeBox(){
      this.withFeeBox.click()
    }

     beginApplication(){
        this.applyBtn.click()
    }


}

export default new RatesPage()
