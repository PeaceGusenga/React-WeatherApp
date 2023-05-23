export class WeatherElements {
    
    weatherApp_NightOrDay_Button = '.svg-inline--fa'
    weatherApp_Theme = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    change_NightOrDay_Button = '.oxd-button'

    enterUsername(username){
        cy.get(this.loginpage_textbox_username).type(username)
    }

    enterPassword(password){
        cy.get(this.loginpage_textbox_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginpage_loginbutton).click()
    }

}