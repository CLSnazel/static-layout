import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('p').contains('Peek')
}

const mediumTest = () => {
  cy.wait(500)
  cy.get('span').contains('A')
}

const largeTest = () => {
  cy.wait(500)
  cy.get('span').contains('Boo')
}

export default () => screenSize('PeekABooComposition', '/components', smallTest, mediumTest, largeTest)
