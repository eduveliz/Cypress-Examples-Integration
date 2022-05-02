describe('login account test', () => {
  it('Login', () => {
    const username = 'test@test';
    const password = 'Password123';

    cy.visit(Cypress.env('HOST') || 'index.html')
    cy.get('input[name=email]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  });

});


