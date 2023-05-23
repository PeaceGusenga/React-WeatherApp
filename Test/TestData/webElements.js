export class WeatherElements {
    
    weatherApp_NightOrDay_Button = '.svg-inline--fa'
    weatherApp_Theme_Dark = 'main.dark'
    weatherApp_Theme_Light = 'main.light'
    button_attributes_Dark = 'moon'
    button_attributes_Light = 'sun'

    findButton(){
        cy.get(this.weatherApp_NightOrDay_Button)
    }

    buttonIconCheck_Dark(){
        cy.get(this.weatherApp_NightOrDay_Button).should('have.attr','data-icon',this.button_attributes_Dark)
    }
    buttonIconCheck_Light(){
        cy.get(this.weatherApp_NightOrDay_Button).should('have.attr','data-icon',this.button_attributes_Light)
    }

    clickLightMode(){
        cy.get(this.weatherApp_NightOrDay_Button).should('have.attr','data-icon',this.button_attributes_Dark).click()
    }

    clickDarkMode(){
        cy.get(this.weatherApp_NightOrDay_Button).should('have.attr','data-icon',this.button_attributes_Light).click()
    }

    websiteTheme_Dark(){
        cy.get(this.weatherApp_Theme_Dark)
    }

    websiteTheme_Light(){
        cy.get(this.weatherApp_Theme_Dark)
    }
}