import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.wait(500)
  cy.get('#text-align').should('have.css', 'margin-left', '16px')
}

const mediumTest = () => {
  cy.wait(500)
  cy.get('#text-align').should('have.css', 'margin-left', '160px')
}

const largeTest = () => {
  cy.wait(500)
  cy.get('#text-align').should('have.css', 'margin-left', '480px')
}

export default () => screenSize('TextAlignBox', '/components', smallTest, mediumTest, largeTest)
