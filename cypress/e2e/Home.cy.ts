describe("Home", () => {
  it("should render the company name", () => {
    cy.visit("/");
    cy.get('[data-test="company-name"]').contains(/Innoscripta News/i);
  });

  it("should render search field", () => {
    cy.visit("/");
    cy.get("#q")
      .should("exist")
      .then(($element) => {
        expect($element).to.have.attr("name", "q");
      });
  });

  it("should render the filters", () => {
    cy.visit("/");
    cy.get("#category")
      .should("exist")
      .then(($element) => {
        expect($element).to.have.attr("placeholder", "category1,category2");
      });

    cy.get("#source")
      .should("exist")
      .then(($element) => {
        expect($element).to.have.attr("placeholder", "source1,source2");
      });

    cy.get("#author")
      .should("exist")
      .then(($element) => {
        expect($element).to.have.attr("placeholder", "author1,author2");
      });
  });

  it("should render the articles", () => {
    cy.visit("/");
    cy.get('[data-test="article-list"]')
      .find(".item-wrapper")
      .its("length")
      .should("be.gte", 0);
  });

  it("should search articles by keyword", () => {
    cy.visit("/");
    cy.get(":input[placeholder='Search by keyword']")
      .type("politics")
      .url()
      .should("include", "?q=politics");
  });

  it("should filter by date", () => {
    cy.visit("/");
    cy.get("select")
      .select("Past month")
      .should("have.value", "PastMonth")
      .url()
      .should("include", "date=PastMonth");
  });

  it("should search articles by source", () => {
    cy.visit("/");
    cy.get(":input[placeholder='source1,source2']")
      .type("bbc")
      .url()
      .should("include", "source=bbc");
  });

  it("should search articles by multiple source", () => {
    cy.visit("/");
    cy.get(":input[placeholder='source1,source2']")
      .type("bbc,new york times")
      .url()
      .should("include", "source=bbc%2Cnew+york+times");
  });

  it("should search articles by author", () => {
    cy.visit("/");
    cy.get(":input[placeholder='author1,author2']")
      .type("victoria")
      .url()
      .should("include", "author=victoria");
  });

  it("should search articles by multiple authors", () => {
    cy.visit("/");
    cy.get(":input[placeholder='author1,author2']")
      .type("victoria,aziz")
      .url()
      .should("include", "author=victoria%2Caziz");
  });

  it("should clear filters", () => {
    cy.visit("/");
    cy.get(":input[placeholder='source1,source2']").type("bbc");
    cy.get(":input[placeholder='author1,author2']").type("victoria,aziz");
    cy.get("#clear").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
