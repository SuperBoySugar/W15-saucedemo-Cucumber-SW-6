package saucedemo.com.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import saucedemo.com.pages.HomePage;
import saucedemo.com.pages.ProductPage;

public class LoginTest {
    @When("^I enter User Name \"([^\"]*)\"$")
    public void iEnterUserName(String name)  {
        new HomePage().enterUserName(name);

    }

    @When("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new HomePage().enterPassword(password);

    }

    @And("^I click on Login Button$")
    public void iClickOnLoginButton() {
        new HomePage().clickOnLoginButton();
    }

    @And("^I verify Product title$")
    public void iVerifyProductTitle() {
        new ProductPage().verifyProductTitle();
    }

    @Then("^I verify the List of Products on display page$")
    public void iVerifyTheListOfProductsOnDisplayPage() {
        new ProductPage().verifyListOfProductsDisplayedOnPage();
    }
}
