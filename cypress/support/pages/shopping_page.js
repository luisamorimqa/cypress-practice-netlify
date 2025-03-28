const elements = {
    labels: {
        header: '.section-header'
    },
    buttons: {
        checkout: '.btn-purchase'
    }
}

export default {

    checkHeader() {
        cy.get(elements.labels.header)
            .should('be.visible')
            .and('have.text', 'SHOPPING CART')
    },

    checkCheckoutButton() {
        cy.get(elements.buttons.checkout)
            .should('be.visible')
    },

    clickCheckoutButton() {
        cy.get(elements.buttons.checkout)
            .should('be.visible')
            .click()
    }
}