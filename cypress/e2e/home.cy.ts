/// <reference types="cypress" />

describe('/', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', '/contacts?page=1', {
      fixture: 'GET/getAll.json',
    }).as('getTodos-Fixture');
    cy.intercept('GET', '/contacts?page=1&email_contains=DEMO', {
      fixture: 'GET/getAllSearch.json',
    }).as('getSearch-Fixture');
    cy.intercept('GET', '/contacts/628aa531cfe289001693fbea', {
      fixture: 'GET/getContact.json',
    }).as('getContact-Fixture');
  });

  it('Render table contacts', () => {
    cy.get('.MuiTable-root')
      .find('.MuiTableCell-root')
      .invoke('text');
  });

  it('Search in table contacts', () => {
    cy.get('input[placeholder="Busqueda por correo"]')
      .type('DEMO01');
  });

  it('Click button Nuevo contacto', () => {
    cy.get('button')
      .contains('Nuevo contacto')
      .click()
      .url()
      .get('h4')
      .contains('Nuevo contacto');
  });

  it('Click button Editar contacto', () => {
    cy.get('.MuiTableRow-root [data-testid="EditIcon"] > path')
      .first()
      .click()
      .url()
      .wait('@getContact-Fixture')
      .get('h4')
      .contains('Modificar contacto');
  });

  it('Click button Eliminar contacto', () => {
    cy.get('.MuiTableRow-root [data-testid="DeleteIcon"] > path')
      .first()
      .click()
      .url()
      .wait('@getContact-Fixture')
      .get('h4')
      .contains('Eliminar contacto');
  });
});

export {};
