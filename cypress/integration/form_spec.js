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
        cy.contains('FORMS').click();
    });


    it('forms', () => {
        cy.screenshot('forms');
        cy.url().should('include', '/panel/forms')
        cy.get("input[name=name]").type("Ed test")
        cy.get("input[name=age]").type("12")
        cy.get("div[role=button]").click({force: true})
        cy.contains("Mac").dblclick({force: true})
        cy.contains("3").click({force: true})
        cy.get('#contact').submit()
    });


});


