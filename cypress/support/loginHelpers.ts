import {faker} from "@faker-js/faker"

export const generateUserCredentials = () => {
    const email = faker.internet.email()
    const password = faker.internet.password({ length: 8 }) + 'Aa!1'
    return { email, password }
}

export const visitAndPreparePage = () => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.morele.net')
    cy.wait(1000)
    cy.hideCookieConsent()
}

export const register = (email, password) => {
    cy.get('.h-user-control > .h-control-btn > .h-control-btn-label').dblclick()
    cy.url().should('include', '/login')
    cy.hideCookieConsent()
    cy.wait(1000)
    cy.get('[id="register-tab"]').click()
    cy.get('[id="user_userEmail"]').type(email)
    cy.get('[id="user_plainPassword"]').type(password)
    cy.get('#accept_regulation > .switch-container > .switch > .slider').click()
    cy.get('.nst-is-collapsed > .form-control-input > .switch-container > .switch > .slider').click()
    cy.contains('Utwórz konto').click()
    cy.hideCookieConsent()
    cy.wait(1000)
    cy.url().should('eq', 'https://www.morele.net/')
    cy.contains('Założono konto za pomocą email.').should('be.visible')
}

export const login = (email, password) => {
    cy.get('.h-user-control > .h-control-btn > .h-control-btn-label').dblclick()
    cy.url().should('include', '/login')
    cy.hideCookieConsent()
    cy.wait(1000)
    cy.get('[id="username"]').type(email)
    cy.get('[id="password-log"]').type(password)
    cy.contains('Zaloguj się').click()
    cy.hideCookieConsent()
    cy.wait(1000)
    cy.url().should('eq', 'https://www.morele.net/')
}

