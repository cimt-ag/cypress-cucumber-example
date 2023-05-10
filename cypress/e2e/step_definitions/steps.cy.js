import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

When('ich die cypress website aufrufe', () => {
  cy.visit('https://example.cypress.io');
});

Then('enthält die Überschrift {string}', headline => {
  cy.get('h1').should('contain.text', headline)
});
