import {Given,Then, And } from "@badeball/cypress-cucumber-preprocessor";
import {Welcome_page} from '../pages/welcome_page';
import {GetStarted_page} from '../pages/getStarted_page';
import  {CreateAccount_page} from "../pages/createAccount_page";

const welcomePage = new Welcome_page();
const getStartedPage = new GetStarted_page();
const createAccountPage = new CreateAccount_page();

Given("The user is on the LF welcome page", function () {
    welcomePage.visitWelcomePage();

});
Then(/^Click on the Join button$/, function () {

   welcomePage.clickOnJoinAndGetRecommendationBtn();

});
/*
And ("Click on the Get started button", function () {
   getStartedPage.clickOnGetStartedBtn();
});
 */

Then(/^Click on the Get started button$/, function () {
    cy.scrollTo('bottom', { ensureScrollable: false });

    getStartedPage.clickOnGetStartedBtn();
});

Then("Fill the sign up form", function () {
    createAccountPage.provideFirstName();
    createAccountPage.provideLastName();
    createAccountPage.provideEmail();
    createAccountPage.providePhoneNumber();
    createAccountPage.provideGender();
    createAccountPage.provideDOB();
    createAccountPage.clickOnTermsConditionsLink()
});