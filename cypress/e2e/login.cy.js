describe('VTiger',()=>{
    let userName='admin'
    let passWord='admin'
    it('Login Page',()=>{
        cy.visit('http://testingserver:8888/')
        cy.title().should('eq','vtiger CRM 5 - Commercial Open Source CRM')
        
        cy.get('input[name="user_name"]').type(userName)
        cy.get('input[name="user_password"]').type(passWord)
        cy.get('input[id=submitButton]').click()

        cy.title().should('include','Administrator')

        cy.get('td.small > table > tbody > tr > :nth-child(4) > a').should('have.text','Leads')
        .click()

        cy.title().should('include','Leads')

        cy.get("[alt='Create Lead...']").should('be.visible').click()

        cy.get('.lvtHeaderText').should('have.text','Creating New Lead')

        cy.get("[name='lastname']").type('Raj').should('have.value','Raj')

        cy.get("[name='company']").type('Michelein').should('have.value','Michelein')

        cy.get("input.crmButton").should('be.visible').click()

        cy.xpath("(//td[@class='dvtCellInfo'])[2]").should('have.text')
    })
})