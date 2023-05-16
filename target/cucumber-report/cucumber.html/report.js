$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "\r\nAs a user I should able to Login successfully with valid credentials\r\nand I verify the six products on display page",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 2951232900,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 10,
  "name": "User should able to Login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-able-to-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I enter User Name \"standard_user\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter Password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify Product title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 19
    }
  ],
  "location": "LoginTest.iEnterUserName(String)"
});
formatter.result({
  "duration": 237125700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 71484700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 98531100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iVerifyProductTitle()"
});
formatter.result({
  "duration": 44736000,
  "status": "passed"
});
formatter.after({
  "duration": 63200,
  "status": "passed"
});
formatter.before({
  "duration": 1196976100,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "User should verify that six products are display on page",
  "description": "",
  "id": "login-test;user-should-verify-that-six-products-are-display-on-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I enter User Name \"standard_user\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter Password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the List of Products on display page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 19
    }
  ],
  "location": "LoginTest.iEnterUserName(String)"
});
formatter.result({
  "duration": 120024000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 68041600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 103866100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iVerifyTheListOfProductsOnDisplayPage()"
});
formatter.result({
  "duration": 25086000,
  "status": "passed"
});
formatter.after({
  "duration": 56500,
  "status": "passed"
});
});