describe('Handling Dropdowns',()=>{
    xit('Auto Suggestions',()=>{
        cy.visit('https://www.amazon.in')
        
        cy.get('#twotabsearchtextbox').should('be.visible').type('samsung mobiles 5g')
        cy.get('.s-suggestion-container').contains('samsung mobiles 5g').click()
        cy.get('.a-color-state').should('contain.text','samsung mobiles 5g')

        // cy.get('#nav-search-submit-button').should('be.visible').click()

        
    })

    it('Dynamic Auto Suggestions',()=>{
        cy.visit('https://www.google.com')
        cy.get("[name='q']").type('Samsung Mobiles')

        cy.get('div.wM6W7d>span').should('have.length.at.least',10).each(($el,index,$list)=>{
            if($el.text()=='samsung mobiles 5g'){
                cy.wrap($el).click()
            }
        })
        cy.get("[name='q']").should('have.value','samsung mobiles 5g')
    })
})