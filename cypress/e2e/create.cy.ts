/// <reference types="cypress" />

import type { NewContactData } from '@/src/components';

const form: NewContactData = {
  firstName: 'DEMO01',
  lastName: 'DEMO01',
  email: 'demo01@gmail.com',
  phone: '1232112',
};

describe('/create', () => {
  it('Create contact succefully', () => {
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
  it('Create contact - email duplicate error', () => {
    const keys = Object.keys(form);
    cy.visit('/contacts/create');
    keys.forEach((key: string) => {
      cy.get(`input[name="${key}"]`)
        .type(form[key]);
    });
    cy.get('button[type="submit"]')
      .click()
      .get('.MuiAlert-message')
      .contains('This email address already exists!');
  });
});

export {};
