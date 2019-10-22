var { Given, When, Then } = require('cucumber')
import homePage  from '../src/pages/HomePage';
import ratesPage from '../src/pages/RatesPage';
import applicationPage from '../src/pages/ApplicationPage';



Given("I open the url {string}", async function (url) {
   homePage.open();
   homePage.waitForloginPageToLoad();
   
});

Given("I navigate to Mortgage rates using the Menu tab", async function () {
   homePage.hoverOverMortgageTab();
   homePage.clickMortgageRateLink();
    
});

When("I click on No for Nationwide mortgage", async function () {
   ratesPage.waitForloginPageToLoad();
   ratesPage.clickNoNationwideMortgage();
   
    
});

When("I click on Changing lender for Type of mortgage", async function () {
   ratesPage.clickChangingLender();
    
});

When("I enter {string} as the Property value", async function (propertyValue) {
   ratesPage.enterPropertyValue(propertyValue);
    
});

When("I enter {string} as the Mortgage amount", async function (mortgageAmount) {
   ratesPage.enterMortgageAmount(mortgageAmount);
    
});

When("I enter {string} as the Term years", async function (termYear) {
   ratesPage.enterMortgageTerm(termYear);
   
});

When("I click on Find a mortgage rate button", async function () {
   ratesPage.findRate();
   
});

When("I filter the result by Fixed Mortgage type", async function () {
   ratesPage.tickFixedRateBox();
    
});

When("I filter the result by With Fee Product fee", async function () {
   ratesPage.tickWithFeeBox();
    
});

Then("{string} is displayed as the first result", async function (twoYear) {
   ratesPage.getTwoYrsFixedText().should.equal(twoYear);
    
});

Then("{string} is displayed as the second result", async function (threeYear) {
   ratesPage.getThreeYrsFixedText().should.equal(threeYear);
    
});

Then("{string} is displayed as the third result", async function (fiveYear) {
   ratesPage.getFiveYrsFixedText().should.equal(fiveYear);
    
});

Then("{string} is displayed as the fourth result", async function (tenYear) {
   ratesPage.getTenYrsFixedText().should.equal(tenYear);
   
});

Then("I click on More info and apply link against 5 yr Fixed product", async function () {
   ratesPage.expandMoreInfo();
    
});

Then("I click on Apply button", async function () {
   ratesPage.beginApplication();
    
});

Then("{string} is the header of the page displayed", async function (pageTitle) {
   applicationPage.getHeaderInfo().should.equal(pageTitle);
    
});