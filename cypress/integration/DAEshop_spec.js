describe("My First Cypress Test", () => {
    it('first cypress test on a webpage', () => {
        cy.visit("http://localhost:3000/")
        cy.get(".MuiInputBase-input").type("Nintendo Switch {enter}")
        cy.contains("Switch").click();

    })
})