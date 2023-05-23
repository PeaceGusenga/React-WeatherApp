describe('Weather App Front-End Test - Night/Day Mode', () => {

  it('Visit Site', () => {
    
    //Navigate to React-Weather App
    cy.visit('/')

  })

  it('Find Button', () => {
    //Find Button and Assert Correct Mode = Moon
    cy.get('.svg-inline--fa')

  })

  it('Assert Icon is NightMode Icon', () => {
    //Find Button and Assert Correct Mode = Moon
    cy.get('.svg-inline--fa').should('have.attr','data-icon','moon')

  })

  it('Click Button', () => {
    //Click Button
    cy.get('.svg-inline--fa').should('have.attr','data-icon','moon').click()

  })

  it('Confirm Website is in Dark Mode', () => {
    //Confirm Website is in Dark Mode
    cy.get('main.dark')

  })

  it('Assert Icon Changed to Sun', () => {
    
    //Assert Icon Changed
    cy.get('.svg-inline--fa').should('have.class', 'svg-inline--fa fa-sun')
    .and('have.attr','data-icon','sun')

  })

  it('Switch to Light Mode', () => {
    
  //Switch Back to Day Mode
  cy.get('.svg-inline--fa').should('have.class', 'svg-inline--fa fa-sun').click()

  })

  it('Confirm Website is in Day Mode', () => {
    
    //Confirm Website is in Day Mode
    cy.get('main.light')

  })

  it('Assert Icon Changed to Moon', () => {
    
   //Assert Icon Changed
   cy.get('.svg-inline--fa').should('have.class', 'svg-inline--fa fa-moon')
   .and('have.attr','data-icon','moon')

  })
})