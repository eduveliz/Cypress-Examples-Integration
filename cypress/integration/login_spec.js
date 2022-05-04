describe('login account test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login', () => {
    const username = 'test@test';
    const password = 'Password123';

    cy.get('input[name=email]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  });

});


