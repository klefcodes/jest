describe("My First Test", () => {
  it("Does not do much", () => {
    expect(true).to.equal(true);
  });
});

describe("Testing my frontend app", () => {
  it("should visit the grents client hosted on PORT 3000 and add a restaurant named Heavenly Chaw", () => {
    cy.visit("http://127.0.0.1:3000");

    cy.get("button").contains("Add Restaurant").click();

    cy.get("input").type("Heavenly Chaw").should("have.value", "Heavenly Chaw");
    cy.get("button").contains("Add").click();
  });
});
