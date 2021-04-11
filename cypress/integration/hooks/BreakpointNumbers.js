import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('p').contains('0')
}

const mediumTest = () => {
  cy.get('p').contains('1')
}

const largeTest = () => {
  cy.get('p').contains('2')
}

export default () => screenSize('BreakpointNumbers', '/hooks', smallTest, mediumTest, largeTest)
