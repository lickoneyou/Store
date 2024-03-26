describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("input").should("have.value", "");
    cy.get("input").type("mac");
    cy.get("input").should("have.value", "mac");
    cy.get("header div > button").click();
    cy.get(".Goods_goodsWrapper__8HIA-");
    cy.get(".Goods_goodWrapper__p-H7o > h3").should("have.text", "500$");
    cy.get("header b").should("have.text", "");
    cy.get(".addCart__Img");
    cy.get(".addCart__Img").click();
    cy.get("header b").should("have.text", "500$");
    cy.get(".addCart__Img").click();
    cy.get("header b").should("have.text", "");
    cy.get("main a");
    cy.get("main a").click();
    cy.get("div").contains("Add to Cart").click();
    cy.get("header b").should("have.text", "500$");
    cy.get("div").contains("Back").click();
    cy.get("header b").should("have.text", "500$");
  });
});
