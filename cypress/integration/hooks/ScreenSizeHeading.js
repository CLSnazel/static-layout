import { screens, screenSize } from '../../partials/screenSizes'

const smallTest = () => {
  cy.get('h2').contains(screens.small[0])
}

const mediumTest = () => {
  cy.get('h2').contains(screens.medium[0])
}

const largeTest = () => {
  cy.get('h2').contains(screens.large[0])
}

export default () => screenSize('ScreenSizeHeading', '/hooks', smallTest, mediumTest, largeTest)
