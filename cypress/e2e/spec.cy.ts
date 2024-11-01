describe('should be able to refund', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').first().click()
  })
})
