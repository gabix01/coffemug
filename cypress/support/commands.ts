Cypress.Commands.add('hideCookieConsent', () => {
    cy.get('div[data-controller="cookie-consent"]').invoke('hide')
})