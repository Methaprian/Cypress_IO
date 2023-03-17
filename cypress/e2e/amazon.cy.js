describe('Amazon Suite',()=>{
    let prod_name='Airdopes 141 Bold Black'
    it('Launch Application and Verify url',()=>{
        
        cy.visit("https://www.amazon.in/")
        cy.url().should('eq','https://www.amazon.in/')
       
       cy.get('#twotabsearchtextbox').type(prod_name)
       cy.get('#nav-search-submit-button').should('be.visible').click()
       cy.get('.a-color-state').should('have.text','"Airdopes 141 Bold Black"')

       cy.xpath("(//a[contains(.,'Airdopes 141') and contains(.,'(Bold Black)')])[1]")
       .invoke('removeAttr','target').click()
       
       cy.get('#add-to-cart-button').should('be.visible').click()

       cy.get('#attachDisplayAddBaseAlert>.a-size-medium-plus').should('contain','Added to Cart')

       cy.get('#attach-popover-lgtbox').click({force:true})

       cy.get('#nav-cart').should('be.visible').click()

       cy.get('.a-truncate-cut').should('contain.text','Airdopes 141')


    })
    
   
})