describe('Login', () => {
    it('Verificar se está na tela de login', () => {
        cy.visit("https://www.saucedemo.com/")

        cy.title().should('eq', 'Swag Labs')
    })
    it("Logando com Usuário comum", () => {
        cy.visit("https://www.saucedemo.com/")

        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get('#logout_sidebar_link')
    })

    it("Logando usuário problemático", () => {
        cy.visit("https://www.saucedemo.com/")

        cy.get("#user-name").type("problem_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get('#logout_sidebar_link')
    })

    it("Logando usuário com falha de desempenho", () => {
        cy.visit("https://www.saucedemo.com/")

        cy.get("#user-name").type("performance_glitch_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get('#logout_sidebar_link')
    })

    it("Tentando logar com usuário bloqueado", () => {
        cy.visit("https://www.saucedemo.com/")

        cy.get("#user-name").type("locked_out_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
});