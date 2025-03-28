const elements = {
    fields: {
        email: '#email', 
        password: '#password'
    },
    buttons: {
        submit: '#submitLoginBtn'
    },
    messages: {
        badCredentials: '.alert-danger'
    }
}

export default {

    fillEmail(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },

    clickSubmit() {
        cy.get(elements.buttons.submit)
            .should('be.enabled')
            .click()
    },

    checkMessageBadCredentials() {
        cy.get(elements.messages.badCredentials)
            .should('be.visible')
            .and('have.text', "Bad credentials! Please try again! Make sure that you've registered.")
    }
}