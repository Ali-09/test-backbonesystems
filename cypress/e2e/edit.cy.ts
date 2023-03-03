/// <reference types="cypress" />

import type { NewContactData } from '@/src/components';

const form: NewContactData = {
  firstName: 'DEMO02',
  lastName: 'DEMO02',
  email: 'demo02@gmail.com',
  phone: '1231122',
};

describe('/contacts/[id]', () => {
  beforeEach(() => {
    cy.visit('/contacts/628aa531cfe289001693fbea');
    cy.intercept('GET', '/contacts/628aa531cfe289001693fbea', {
      fixture: 'GET/getContact.json',
    }).as('getContact-Fixture');
    cy.intercept('PUT', '/contacts/628aa531cfe289001693fbea', {
      fixture: 'POST/postContact.json',
    }).as('postContact-Fixture');
  });

  it('Edit contact - email duplicate error', () => {
    const keys = Object.keys(form);
    keys.forEach((key: string) => {
      cy.get(`input[name="${key}"]`)
        .clear()
        .type(form[key]);
    });
    cy.get('button[type="submit"]')
      .click()
      .get('.MuiAlert-message')
      .contains('Contacto modificado correctamente!');
  });

  it('Edit contact - email duplicate error', () => {
    cy.intercept('PUT', '/contacts/628aa531cfe289001693fbea', {
      statusCode: 422,
      body: {
        message: 'This email address already exists!',
      },
    }).as('postContactFailed-Fixture');

    const keys = Object.keys(form);
    keys.forEach((key: string) => {
      cy.get(`input[name="${key}"]`)
        .clear()
        .type(form[key]);
    });
    cy.get('button[type="submit"]')
      .click()
      .wait('@postContactFailed-Fixture')
      .get('.MuiAlert-message')
      .contains('This email address already exists');
  });
});

export {};
