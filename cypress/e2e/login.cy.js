describe('VTiger',()=>{
    let userName='admin'
    let passWord='admin'

    let first_name='Anup'
    let last_name='Raj'
    let company='Michelien'

    let phone_no='0123456789'
    let mobile_no='9876543210'

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

        cy.get("[name='firstname']").type(first_name).should('have.value',first_name)

        cy.get("[name='lastname']").type(last_name).should('have.value',last_name)

        cy.get("[name='company']").type(company).should('have.value',company)

        cy.get("input.crmButton").should('be.visible').click()

        cy.xpath("(//td[@class='dvtCellInfo'])[2]").should('contain.text','LEA')

        cy.get(':nth-child(1) > :nth-child(1) > table.small > :nth-child(1) > :nth-child(1) > [align="right"] > .edit')
        .should('be.visible').click()

        cy.get('.lvtHeaderText').should('contain.text',last_name)

        cy.get('#phone').type(phone_no).should('have.value',phone_no)

        cy.get('#mobile').type(mobile_no).should('have.value',mobile_no)

        cy.get("input.crmButton").should('be.visible').click()

        cy.get('.tabSelected > a').should('have.text','Leads')
        .click()

        cy.xpath("(//select[@id='bas_searchfield'])[1]").select('First Name').should('have.value','firstname')

        cy.get("[name='search_text']").type(first_name).should('have.value',first_name)

        cy.get("[name='submit']").should('be.visible').click()
        
        cy.get('table.lvt>tbody>tr:last-child>td:nth-child(6)').should('contain.text',phone_no)
    })
})