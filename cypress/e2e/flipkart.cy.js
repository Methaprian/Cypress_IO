describe('Flipkart Scenario',()=>{
    let product='jbl soundbars'
    it('Adding to Kart',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get("[name='q']").should('be.visible').type(product)
    })
})