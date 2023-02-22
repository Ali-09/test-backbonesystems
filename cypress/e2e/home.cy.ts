/// <reference types="cypress" />

describe('/', () => {
  it('Render table contacts', () => {
    cy.visit('/');
    cy.get('.MuiTable-root')
      .find('.MuiTableCell-root')
      .invoke('text');
  });

  it('Search in table contacts', () => {
    cy.visit('/');
    cy.get('input[placeholder="Busqueda por correo"]')
      .type('a');
  });

  it('Click button Nuevo contacto', () => {
    cy.visit('/');
    cy.get('button')
      .contains('Nuevo contacto')
      .click()
      .url()
      .get('h4')
      .contains('Nuevo contacto');
  });

  it('Click button Editar contacto', () => {
    cy.visit('/');
    cy.get('.MuiTableRow-root [data-testid="EditIcon"] > path')
      .first()
      .click()
      .url()
      .get('h4')
      .contains('Modificar contacto');
  });

  it('Click button Eliminar contacto', () => {
    cy.visit('/');
    cy.get('.MuiTableRow-root [data-testid="DeleteIcon"] > path')
      .first()
      .click()
      .url()
      .get('h4')
      .contains('Eliminar contacto');
  });
});

export {};
