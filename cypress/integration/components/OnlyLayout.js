import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('p#only').contains('Only seen on small screens')
}

const mediumTest = () => {
  cy.wait(500)
  cy.get('p#only').contains('Only seen on medium screens')
}

const largeTest = () => {
  cy.wait(500)
  cy.get('p#only').contains('Only seen on large screens')
}

export default () => screenSize('OnlyLayout', '/components', smallTest, mediumTest, largeTest)
