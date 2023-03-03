/// <reference types="cypress" />

describe('/[id]', () => {
  beforeEach(() => {
    cy.visit('/contacts/628aa531cfe289001693fbea/delete');
    cy.intercept('GET', '/contacts/628aa531cfe289001693fbea', {
      fixture: 'GET/getContact.json',
    }).as('getContact-Fixture');
    cy.intercept('DELETE', '/contacts/628aa531cfe289001693fbea', {
      fixture: 'POST/postContact.json',
    }).as('deleteContact-Fixture');
  });

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
