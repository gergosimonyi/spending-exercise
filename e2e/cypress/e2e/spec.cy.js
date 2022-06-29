// These end-to-end tests cover the acceptance criteria

const spendings = {
  cheapHungarianItem: {
    description: "tej",
    amount: 305,
    currency: "HUF",
  },
  cheapAmericanItem: {
    description: "chocolate chip cookie",
    amount: 2,
    currency: "USD",
  },
  moderateHungarianItem: {
    description: "aktív zajszűrős fejhallgató",
    amount: 124990,
    currency: "HUF",
  },
  moderateAmericanItem: {
    description: "electric guitar",
    amount: 1600,
    currency: "USD",
  },
  expensiveAmericanItem: {
    description: "summer home in Eastern Europe",
    amount: 120000,
    currency: "USD",
  },
  expensiveHungarianItem: {
    description: "sajtos-tejfölös lángos a Balatonon",
    amount: 9999999999999,
    currency: "HUF",
  },
};

const fillForm = (spending) => {
  cy.get('input[placeholder="description"]').type(spending.description);
  cy.get('input[placeholder="amount"]').type(spending.amount);
  cy.get('select[name="currency"]').select(spending.currency);
};

const createSpending = (spending) => {
  fillForm(spending);
  cy.contains("Save").click();
};

const listMatches = (spendings) => {
  spendings.forEach((spending, index) => {
    cy.get("ol>li").eq(index).should("contain", spending.description);
  });
};

const listIncludes = (spendings) => {
  spendings.forEach((spending, index) => {
    cy.get("ol").should("contain", spending.description);
  });
};

const listExcludes = (spendings) => {
  spendings.forEach((spending, index) => {
    cy.get("ol").should("not.contain", spending.description);
  });
};

describe("spending-exercise app", () => {
  beforeEach(() => {
    cy.exec("cd ../api && bin/rails db:schema:load");
    cy.visit("http://localhost:3000");
  });

  it("creates new spendings", () => {
    // Given there are no existing spendings
    // When I fill the description, currency and amount
    fillForm(spendings.cheapHungarianItem);

    // And I click the "Save" button
    cy.contains("Save").click();

    // Then I see my spending in the list
    listIncludes([spendings.cheapHungarianItem]);

    // And the form is emptied
    cy.get('input[placeholder="description"]').should("have.value", "");
    cy.get('input[placeholder="amount"]').should("have.value", "0");
    cy.get('select[name="currency"]').should("have.value", "USD");

    // And the spending is persisted on the server
    cy.reload();
    listIncludes([spendings.cheapHungarianItem]);
  });

  it("shows error on incomplete form submission", () => {
    // Given that I have not filled the description or the amount
    ["description", "amount"].forEach((field) => {
      fillForm(spendings.cheapAmericanItem);
      cy.get(`input[placeholder="${field}"]`).clear();

      // When I click the "Save" button
      cy.contains("Save").click();

      // Then I see an error indicating the missing field
      cy.get("h1").should("contain", field);
    });
  });

  it("orders spendings", () => {
    // Given there are existing spendings in the list
    const creationOrder = [
      spendings.cheapAmericanItem,
      spendings.expensiveHungarianItem,
      spendings.moderateHungarianItem,
      spendings.expensiveAmericanItem,
      spendings.cheapHungarianItem,
      spendings.moderateAmericanItem,
    ];

    const valueOrder = [
      spendings.cheapHungarianItem,
      spendings.cheapAmericanItem,
      spendings.moderateHungarianItem,
      spendings.moderateAmericanItem,
      spendings.expensiveAmericanItem,
      spendings.expensiveHungarianItem,
    ];

    creationOrder.forEach((spending) => createSpending(spending));

    // When I change the selected ordering
    // Then the list is reorder by the selection

    cy.get('select[name="order"]').select("-date");
    listMatches(creationOrder.slice().reverse());

    cy.get('select[name="order"]').select("date");
    listMatches(creationOrder);

    cy.get('select[name="order"]').select("-value");
    listMatches(valueOrder.slice().reverse());

    cy.get('select[name="order"]').select("value");
    listMatches(valueOrder);
  });

  it("filters spendings by currency", () => {
    // Given there are existing spendings in the list
    for (let key in spendings) {
      createSpending(spendings[key]);
    }

    // When I click on a currency filter button (HUF, USD, All)
    // Then the list is filtered by that selection
    // And shows only the matching spendings
    const hungarianSpendings = [
      spendings.cheapHungarianItem,
      spendings.moderateHungarianItem,
      spendings.expensiveHungarianItem,
    ];
    const americanSpendings = [
      spendings.cheapAmericanItem,
      spendings.moderateAmericanItem,
      spendings.expensiveAmericanItem,
    ];

    cy.get("button").contains("ALL").click();
    cy.get("ol>li").should("have.length", 6);
    listIncludes(hungarianSpendings);
    listIncludes(americanSpendings);

    cy.get("button").contains("USD").click();
    cy.get("ol>li").should("have.length", 3);
    listIncludes(americanSpendings);
    listExcludes(hungarianSpendings);

    cy.get("button").contains("HUF").click();
    cy.get("ol>li").should("have.length", 3);
    listIncludes(hungarianSpendings);
    listExcludes(americanSpendings);

    expect(true).to.equal(true);
  });
});
