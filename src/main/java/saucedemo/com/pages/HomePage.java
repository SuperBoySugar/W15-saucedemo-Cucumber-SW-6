package saucedemo.com.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import saucedemo.com.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }



    @CacheLookup
    @FindBy(id = "user-name")
    WebElement username;

    @CacheLookup
    @FindBy(id = "password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "login-button")
    WebElement loginBtn;

    public void enterUserName(String name){
        sendTextToElement(username, name);
        log.info("Enter User Name: " + name.toString() );

    }

    // Enter Password
    public void enterPassword(String password1) {
        sendTextToElement(password, password1);
        log.info("Enter Password: " + password1.toString() );

    }

    // Click on Login Button
    public void clickOnLoginButton() {
        pmClickOnElement(loginBtn);
        log.info("Click On Login Button: " .toString() );
    }

}
