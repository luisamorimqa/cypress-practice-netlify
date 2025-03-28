import { faker } from '@faker-js/faker'
import home_page from '../support/pages/home_page'
import login_page from '../support/pages/login_page'
import shopping_page from '../support/pages/shopping_page'

describe ('Login', () => {

    beforeEach(() => {
        home_page.accessLoginPage()
    })

    const user = {
        email: Cypress.env('user'),
        password: Cypress.env('password')
    }

    it('Login sem informar email e senha', () => {
        login_page.clickSubmit()
        login_page.checkMessageBadCredentials()
    })

    it('Login sem informar email', () => {
        login_page.fillPassword('123456', { log: false })
        login_page.clickSubmit()
        login_page.checkMessageBadCredentials()
    })

    it('Login com email inválido', () => {
        login_page.fillEmail('email.com.br')
        login_page.fillPassword(user.password, { log: false })
        login_page.clickSubmit()
        login_page.checkMessageBadCredentials()
    })

    it('Login sem preencher campo senha', () => {
        login_page.fillEmail(user.email, { log: false })
        login_page.clickSubmit()
        login_page.checkMessageBadCredentials()
    })

    it('Login com senha inválida', () => {
        login_page.fillEmail(user.email, { log: false})
        login_page.fillPassword('123123')
        login_page.clickSubmit()
        login_page.checkMessageBadCredentials()
    })

    it('Login com sucesso', () => {
        login_page.fillEmail(user.email, { log: false})
        login_page.fillPassword(user.password, { log: false })
        login_page.clickSubmit()
        shopping_page.checkHeader()
    })
})