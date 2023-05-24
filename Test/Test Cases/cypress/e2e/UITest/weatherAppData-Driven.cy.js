import { WeatherElements } from "../../../../TestData/webElements"

var App = new WeatherElements()

describe('Weather App Data-Driven Test', () => {

    it('Visit Site', () => {
      
      //Navigate to React-Weather App
      cy.visit('/')
      // Take Screenshot
      cy.screenshot("SiteLoadsSuccessfully")
    })
  
    it('Check Whether Night/Day Mode Button Displays Night Icon', () => {
      //Confirm that the Night/Day button has Night Icon
      cy.get(App.weatherApp_NightOrDay_Button).should(App.have_attribute, App.button_Class, App.button_attributes_Dark)
      // Take Screenshot
      cy.screenshot('NightIcon')
    })
  
      //NEGATIVE TEST
      it('NEGATIVE TEST - Check Whether Night/Day Mode Button Displays Day Icon', () => {
        //Confirm that the Night/Day button has Day Icon
        cy.get(App.weatherApp_NightOrDay_Button).should('not.have.attr',App.button_Class, App.button_attributes_Light)
        
      })

    it('Switch to Night Mode by Clicking Night/Day Mode Button', () => {
      //Switch to Night Mode by Clicking Night/Day Mode Button
      cy.get(App.weatherApp_NightOrDay_Button).should(App.have_attribute,App.button_Class, App.button_attributes_Dark).click()
      // Take Screenshot
      cy.screenshot('SwitchToNightMode')
    })
  
    it('Assert whether Website Theme Changed to Dark Mode', () => {
      //Check Webpage Theme in main class
      cy.get(App.weatherApp_Theme_Dark)
      // Take Screenshot
      cy.screenshot('DarkModeSelected')
    })
  
    it('Night/Day Mode Button Should Display Day Icon', () => {
      //Confirm that the Night/Day button has Day Icon
      cy.get(App.weatherApp_NightOrDay_Button).should(App.have_attribute, App.button_Class, App.button_attributes_Light)
  
    })
    it('NEGATIVE TEST -Night/Day Mode Button Should Display Night Icon', () => {
      //Confirm that the Night/Day button has Day Icon
      cy.get(App.weatherApp_NightOrDay_Button).should('not.have.attr', App.button_Class, App.button_attributes_Dark)
  
    })
    it('Switch To Light Mode', () => {
      //Switch to Night Mode
      cy.get(App.weatherApp_NightOrDay_Button).should(App.have_attribute,App.button_Class,App.button_attributes_Light).click()
      // Take Screenshot
      cy.screenshot('LightModeSelected')
    })
  
    it('Assert whether Website Theme Changed to Back to Light Mode', () => {
      //Confirm Website is in Dark Mode
      cy.get(App.weatherApp_Theme_Light)
      // Take Screenshot
      cy.screenshot('LightModeTheme')
    })
  
    it('Assert Icon Changed back to Moon Icon', () => {
     //Confirm that the Night/Day button has Night Icon
     cy.get(App.weatherApp_NightOrDay_Button).should(App.have_attribute,App.button_Class,App.button_attributes_Dark)
     // Take Screenshot
     cy.screenshot('NightIcon')

    })
  })