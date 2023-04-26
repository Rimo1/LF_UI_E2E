import BasePage from "../utils/basePage";
import 'cypress-xpath';
const GET_STARTED_BTN = '.ion-padding-horizontal > .ion-color';
const FIRSTNAME_TEXTBOX = 'input[name=\'first_name\']';
const LASTNAME_TEXTBOX = 'input[name=\'last_name\']';
const EMAIL_TEXTBOX = 'input[name=\'email\']';
const MOBILE_TEXTBOX ='input[name=\'mobile\']';
const GENDER_DROPDOWN = '//ion-select[contains(@formcontrolname,\'gender\')]';
const DOB_FIELD = 'input[placeholder=\'DD/MM/YYYY\']';
const DOB_YEAR_SCROLLER = '.mbsc-datetime-year-wheel > .mbsc-scroller-wheel';
const DOB_MONTH_SCROLLER = 'mbsc-datetime-month-wheel > .mbsc-scroller-wheel';
const DOB_DAY_SCROLLER = '.mbsc-datetime-day-wheel > .mbsc-scroller-wheel';
const TERMS_CONDITIONS_LINK = '//span[contains(text(),\'Read and accept the terms of use and collection st\')]';
const I_ACCEPT_BTN ='//ion-button[contains(text(),\'I accept\')]';
const TERMS_AND_CONDITIONS_POPUP = '.ion-padding-horizontal.md.content-ltr';
const TERMS_AND_CONDITIONS_POPUP_HEADER = '//h2[contains(text(),\'terms of use and collection statement\')]';


export interface SignUpForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    gender: string;
    dob_year: string;
    dob_month: string;
    dob_day: string
}

export class CreateAccount_page extends BasePage {
    constructor() {
        super();
    }


    provideFirstName(){
     cy.get(FIRSTNAME_TEXTBOX).type('Rimo');
    }
    provideLastName(){
        cy.get(LASTNAME_TEXTBOX).type('Sen');
    }
    provideEmail(){
        cy.get(EMAIL_TEXTBOX).type('rimo@sen.com');
    }
    providePhoneNumber(){
        cy.get(MOBILE_TEXTBOX).type('6452729373');
    }
    provideGender(){
        cy.xpath(GENDER_DROPDOWN).click();
        cy.get('.popover-viewport>.ios>.md>.ion-activatable:nth-child(2)').click();
    }

    provideDOB(){
        cy.get(DOB_FIELD).click();
        cy.get(DOB_YEAR_SCROLLER).should('be.visible').contains('1993').scrollIntoView().click({force: true});
      //  cy.get(DOB_MONTH_SCROLLER).should('be.visible').contains('June').scrollIntoView().click({force: true});
     //   cy.get(DOB_DAY_SCROLLER).should('be.visible').contains('19').scrollIntoView().click({force: true});
        cy.get('body').click();
    }

    clickOnTermsConditionsLink(){
        cy.xpath(TERMS_CONDITIONS_LINK).click();
        cy.wait(2000);
        cy.get(TERMS_AND_CONDITIONS_POPUP).shadow().find('.inner-scroll.scroll-y').scrollTo('bottom');
        cy.wait(2000);
        cy.get('.ion-no-border > .primary').click();
    }




}