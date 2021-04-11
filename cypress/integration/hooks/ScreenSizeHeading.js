import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('h1').contains('small')
}

const mediumTest = () => {
  cy.get('h1').contains('medium')
}

const largeTest = () => {
  cy.get('h1').contains('large')
}

export default () => screenSize('ScreenSizeHeading', '/hooks', smallTest, mediumTest, largeTest)
