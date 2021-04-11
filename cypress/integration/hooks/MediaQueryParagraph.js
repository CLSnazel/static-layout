import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('strong').contains('special')
}

const mediumTest = () => {
  cy.get('em').contains('special')
}

const largeTest = () => {
  cy.get('p').contains('special')
}

export default () => screenSize('MediaQueryParagraph', '/hooks', smallTest, mediumTest, largeTest)
