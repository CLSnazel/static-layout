import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('p').contains('pink')
}

const mediumTest = () => {
  cy.get('p').contains('gold')
}

const largeTest = () => {
  cy.get('p').contains('blue')
}

export default () => screenSize('PropControlledParagraph', '/hooks', smallTest, mediumTest, largeTest)
