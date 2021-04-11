import { screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('strong').contains('unique')
}

const mediumTest = () => {
  cy.get('small').contains('unique')
}

const largeTest = () => {
  cy.get('p').contains('unique')
}

export default () => screenSize('ResponsiveQueryParagraph', '/hooks', smallTest, mediumTest, largeTest)
