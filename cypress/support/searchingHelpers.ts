export const SEARCH_BOX_SELECTOR = '.h-quick-search > .h-quick-search-box > .morele-autocomplete > .quick-search-autocomplete'
export const SEARCH_BUTTON_SELECTOR = '.h-quick-search > .h-quick-search-box > .btn'
export const CATEGORY_TITLE_SELECTOR = '.category-search-title'
export const FILTER_SELECTOR = '.search__filter'

export const searchForProduct = (productName) => {
    cy.get(SEARCH_BOX_SELECTOR).type(productName)
    cy.get(SEARCH_BUTTON_SELECTOR).click()
    cy.hideCookieConsent()
}

export const verifySearchResult = (expectedText) => {
    cy.get(CATEGORY_TITLE_SELECTOR).should('contain.text', expectedText)
}

export const applyFilter = (filterText) => {
    cy.get(FILTER_SELECTOR).contains(filterText).click()
}

export const verifyUrlContains = (expectedUrlPart) => {
    cy.url().should('include', expectedUrlPart)
}