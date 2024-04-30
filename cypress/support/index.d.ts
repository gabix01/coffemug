declare namespace Cypress {
    interface Chainable<Subject = any> {
        hideCookieConsent(): void
    }
}