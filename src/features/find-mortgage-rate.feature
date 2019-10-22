Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  #@Pending
  Scenario: Find mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    And I navigate to Mortgage rates using the Menu tab
    When I click on No for Nationwide mortgage
    And I click on Changing lender for Type of mortgage
    And I enter "300,000" as the Property value
    And I enter "150,000" as the Mortgage amount
    And I enter "30" as the Term years
    And I click on Find a mortgage rate button
    And I filter the result by Fixed Mortgage type
    And I filter the result by With Fee Product fee
    Then "2 yr Fixed" is displayed as the first result
    And "3 yr Fixed" is displayed as the second result
    And "5 yr Fixed" is displayed as the third result
    And "10 yr Fixed" is displayed as the fourth result
    And I click on More info and apply link against 5 yr Fixed product
    And I click on Apply button
    And "Start your remortgage application" is the header of the page displayed
