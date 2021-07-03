import {Given,When,Then} from 'cucumber';
import LoginPage from '../pageobjects/login.page';
import {expect} from 'chai';
import constants, {MERCURY_TOURS_PAGE_TITLE,URLS} from '../configs/e2e.contants';
// import {URLS} from '../configs/e2e.contants';

Given(/^I'm on the login page$/,  ()=> {
browser.url(URLS.MERCURY_TOURS_URL);
browser.pause(2000);
});

When(/^I log in with a default user$/,  ()=> {
     LoginPage.login();
});

Then(/^I shall be on the Flight Finder page$/,  ()=> {
     const title = LoginPage.getMercuryHomePageTitle();
     console.log(title);
     expect(title).to.equal(MERCURY_TOURS_PAGE_TITLE);

});