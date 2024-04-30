/// <reference types="cypress" />
import {faker} from "@faker-js/faker"
import 'cypress-wait-until'
import {generateUserCredentials, visitAndPreparePage, login, register} from '../support/loginHelpers'
import {
  applyFilter,
  searchForProduct,
  verifySearchResult,
  verifyUrlContains
} from "../support/searchingHelpers";
import {addToCart, selectProduct, verifyBasketCount} from "../support/cartHelpers";

const { email, password } = generateUserCredentials()
const productNameElectronics = 'electronics'
const productNameKeyboard = 'SteelSeries Apex 3'

beforeEach(() => {
  visitAndPreparePage()
})

describe('User Registration and Login', () => {
  it('register form', () => {
    register(email, password)
  })

  it('login form', () => {
    login(email, password)
  })
})

describe('Product Search and Filter', () => {
  it('search for a product', () => {
    searchForProduct(productNameElectronics)
    verifySearchResult(productNameElectronics)
    applyFilter('Aparatura elektryczna i modułowa')
    verifyUrlContains('Id=10439,10392,10393,10417')
    cy.get('[id="1020"]').should('have.class', 'active')
  })
})

describe('Adding Items to Cart', () => {
  it('add item to a Cart', () => {
    searchForProduct(productNameKeyboard);
    verifySearchResult(productNameKeyboard);
    selectProduct('SteelSeries Apex 3');
    addToCart();
    cy.url().should('include', 'koszyk');
    verifyBasketCount(1);
  });
})