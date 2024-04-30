export const PRODUCT_LINK_SELECTOR = '[class="productLink"]'
export const ADD_TO_CART_BUTTON_TEXT = 'Do koszyka'
export const BASKET_COUNT_SELECTOR = '.icon-basket-count.small-basket-count'

export const selectProduct = (productName) => {
    cy.get(PRODUCT_LINK_SELECTOR).contains(productName).click()
    cy.hideCookieConsent()
    cy.wait(1000)
}

export const addToCart = () => {
    cy.contains(ADD_TO_CART_BUTTON_TEXT).click()
}

export const verifyBasketCount = (expectedCount) => {
    cy.get('.hidden-xs.hidden-sm.hidden-md').should('have.text', `Twój koszyk (${expectedCount})`);
}