const screens = {
  small: [
    375,
    667
  ],
  medium: [
    1024,
    768
  ],
  large: [
    1440,
    900
  ]
}

export function screenSize (name, endpoint, smallTest, mediumTest) {
  return describe(name, () => {
    before(() => {
      cy.visit(endpoint)
    })
    it('should correctly display when small', () => {
      cy.viewport(...screens.small)
      smallTest()
    })
    it('should correctly dispaly when medium', () => {
      cy.viewport(...screens.medium)
      mediumTest()
    })
    it('should correctly display when large', () => {
      cy.viewport(...screens.large)
    })
  })
}
