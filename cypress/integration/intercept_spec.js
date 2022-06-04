describe('Login, intercept test', () => {

    it('Login', () => {
        cy.visit('/')
        const username = 'test@test';
        const password = 'Password123';

        cy.get('input[name=email]').type(username);
        cy.get('input[name=password]').type(password).screenshot();
        cy.get('button[type=submit]').click();
        cy.url().should('include', '/panel')
        cy.screenshot('login-complete');
    });

    it('panel', () => {
        cy.screenshot('panel');
        cy.url().should('include', '/panel')
        cy.contains('Chuck').click();
    });


    it('chuck', () => {
        cy.screenshot('chuck');
        cy.url().should('include', '/panel/norris')
        cy.get('#joke').screenshot('first')
        cy.get('button[name=new]').click();

        cy.intercept('GET', 'https://api.chucknorris.io/jokes/random', (req) => {
            /* do something with request and/or response */
        })

        cy.get('#joke').screenshot('end')
    });


});


