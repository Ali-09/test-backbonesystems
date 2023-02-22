/// <reference types="cypress" />

import type { NewContactData } from '@/src/components';

const form: NewContactData = {
  firstName: 'DEMO02',
  lastName: 'DEMO02',
  email: 'demo02@gmail.com',
  phone: '1231122',
};

describe('/[id]', () => {
  it('Click button Editar contacto', () => {
    cy.visit('/');
    cy.get('.PrivateSwitchBase-input')
      .click()
      .wait(200);
    cy.get('.MuiTableRow-root [data-testid="EditIcon"] > path')
      .first()
      .click();
  });

  it('Edit contact - email duplicate error', () => {
    const keys = Object.keys(form);
    cy.visit('/contacts/create');
    keys.forEach((key: string) => {
      cy.get(`input[name="${key}"]`)
        .type(form[key]);
    });
    cy.get('button[type="submit"]')
      .click()
      .get('.MuiAlert-message')
      .contains('Contacto creado correctamente!');
  });

  it('Edit contact - email duplicate error', () => {
    const keys = Object.keys(form);
    cy.visit('/contacts/create');
    keys.forEach((key: string) => {
      cy.get(`input[name="${key}"]`)
        .type(form[key]);
    });
    cy.get('button[type="submit"]')
      .click()
      .get('.MuiAlert-message')
      .contains('This email address already exists');
  });
});

export {};
