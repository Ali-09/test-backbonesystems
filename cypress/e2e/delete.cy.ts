/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
  cy.get('.PrivateSwitchBase-input')
    .click()
    .wait(200);
  cy.get('.MuiTableRow-root [data-testid="DeleteIcon"] > path')
    .first()
    .click();
});

describe('/[id]', () => {
  it('Delete contact - click', () => {
    cy.get('.MuiButton-containedError')
      .click();
  });

  it('Delete contact', () => {
    cy.get('button')
      .contains('Eliminar')
      .click()
      .get('h4')
      .contains('Contacto eliminado correctamente!');
  });
});

export {};
