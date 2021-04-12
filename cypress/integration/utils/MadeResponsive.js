import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.wait(500)
  cy.get('h1').should('have.css', 'color', 'rgb(0, 0, 0)')
}

const mediumTest = () => {
  cy.wait(500)
  cy.get('h1').should('have.css', 'color', 'rgb(165, 42, 42)')
}

const largeTest = () => {
  cy.wait(500)
  cy.get('h1').should('have.css', 'color', 'rgb(0, 0, 255)')
}

export default () => screenSize('MadeResponsive', '/utils', smallTest, mediumTest, largeTest)
