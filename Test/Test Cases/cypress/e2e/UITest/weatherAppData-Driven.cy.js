import { WeatherElements } from "../../../../TestData/webElements"

var weatherTest = new WeatherElements()

describe('Weather App Data-Driven Test', () => {

    it('Visit Site', () => {
      
      //Navigate to React-Weather App
      cy.visit('/')
  
    })
  
    it('Find Button', () => {
      //Find Button and Assert Correct Mode = Moon
      weatherTest.findButton()
  
    })
  
    it('Assert Icon is NightMode Icon', () => {
      //Find Button and Assert Correct Mode = Moon
      weatherTest.buttonIconCheck_Dark()
  
    })
  
    it('Click Button', () => {
      //Click Button
      weatherTest.clickLightMode()
  
    })
  
    it('Confirm Website is in Dark Mode', () => {
      //Confirm Website is in Dark Mode
      weatherTest.websiteTheme_Dark()
  
    })
  
    it('Assert Icon Changed to Sun', () => {
      
      //Assert Icon Changed
      weatherTest.buttonIconCheck_Light()
  
    })
  
    it('Switch to Light Mode', () => {
      
    //Switch Back to Day Mode
    weatherTest.clickDarkMode()
  
    })
  
    it('Confirm Website is in Day Mode', () => {
      
      //Confirm Website is in Day Mode
      weatherTest.websiteTheme_Light
  
    })
  
    it('Assert Icon Changed to Moon', () => {
      
     //Assert Icon Changed
     weatherTest.buttonIconCheck_Dark
  
    })
  })