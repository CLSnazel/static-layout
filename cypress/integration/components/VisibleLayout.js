import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('p').contains('Visible on small screens')
}

const mediumTest = () => {
  cy.wait(500)
  cy.get('p').contains('Visible on medium screens')
}

const largeTest = () => {
  cy.wait(500)
  cy.get('p').contains('Visible on large screens')
}

export default () => screenSize('VisibleLayout', '/components', smallTest, mediumTest, largeTest)
