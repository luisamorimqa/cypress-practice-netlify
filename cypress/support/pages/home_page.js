export default { 

    accessLoginPage() {
        cy.visit('/')
            .get('#auth-shop')
            .should('be.visible')

        cy.get('#auth-shop')
            .click()
    }
}