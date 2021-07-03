import {LOGIN_USERS} from '../configs/e2e.contants'

class LoginPage{

    get username() {
       return $('input[name="userName"]') ;
    }
    get password() {

        return $('input[name="password"]');
    }
    get submitBtn() {
        return $('input[type="submit"]') ;
    }

    login() {
         this.username.waitForExist();
        this.username.setValue(LOGIN_USERS.DEFAULT.username);
        this.password.setValue(LOGIN_USERS.DEFAULT.password);
        this.submitBtn.scrollIntoView();
        this.submitBtn.click();
    }

    getMercuryHomePageTitle() {

       return browser.getTitle();
    }
}

export default new LoginPage()