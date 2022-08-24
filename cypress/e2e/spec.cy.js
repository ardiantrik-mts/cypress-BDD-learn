describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.xpath('//h1[normalize-space()="Kitchen Sink"]').should('be.visible')
  })
})