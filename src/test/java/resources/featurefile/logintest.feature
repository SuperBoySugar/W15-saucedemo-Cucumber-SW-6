@smoke
Feature: Login Test

  As a user I should able to Login successfully with valid credentials
  and I verify the six products on display page

  Background: I am on homepage


    Scenario:     User should able to Login successfully with valid credentials
      Given        I enter User Name "standard_user"
      When         I enter Password "secret_sauce"
      And          I click on Login Button
      Then         I verify Product title



   Scenario:       User should verify that six products are display on page
     Given          I enter User Name "standard_user"
     When           I enter Password "secret_sauce"
     Then           I click on Login Button
     Then           I verify the List of Products on display page
