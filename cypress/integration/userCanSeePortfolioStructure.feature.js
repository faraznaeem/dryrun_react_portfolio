describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("http://localhost:300");
    cy.get("#header").should("contain", "My portfolio");
    cy.get("#footer").should("contain", "Made with React 16.12.0");
    cy.get("#hello").should("contain", "Hello World");
  });
});
