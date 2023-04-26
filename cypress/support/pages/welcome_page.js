import BasePage from "../utils/basePage";
import {BASE_URL} from "../utils/constants";

const JOIN_BTN = 'ul > :nth-child(1) > .md';
const LOGIN_BTN = 'ul > :nth-child(2) > .md';
const TAKE_A_LOOK_BTN = '#takeaLookButton';
const JOIN_AND_GET_RECOMMENDATIONS_BTN = '#recommendationButton';
const CONNECT_BTN = '[title = "Connect and chat with a Blood Cancer Support Coordinator"]';

export class Welcome_page extends BasePage {
    constructor() {
        super();
    }

    clickOnJoinBtn(){
        this.waitForElementToAppear(JOIN_BTN);
        this.click(JOIN_BTN);
        this.click(JOIN_BTN);
        cy.get(JOIN_BTN).click(true);
    }
    clickOnLoginBtn(){
        this.click(LOGIN_BTN);
    }
    clickOnTakeALookBtn(){
        this.click(TAKE_A_LOOK_BTN);
    }
    clickOnJoinAndGetRecommendationBtn(){
        this.waitForElementToAppear(JOIN_AND_GET_RECOMMENDATIONS_BTN);
        this.click(JOIN_AND_GET_RECOMMENDATIONS_BTN);
    }
    clickOnConnectBtn(){
        this.click(CONNECT_BTN);
    }

    visitWelcomePage(){
        cy.visit(BASE_URL);
    }

}