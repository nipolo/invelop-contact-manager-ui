import moment from "moment";

describe("CRUD operations on Contacts", () => {
  const uniqueNumber = Date.now().toString();
  const contact = {
    firstName: `FirstName_${uniqueNumber}`,
    surname: `Surname_${uniqueNumber}`,
    birthDate: new Date(),
    address: {
      line1: `line1_${uniqueNumber}`,
      line2: `line2_${uniqueNumber}`,
      city: `city_${uniqueNumber}`,
      country: `country_${uniqueNumber}`,
      postcode: `postcode_${uniqueNumber}`,
    },
    phoneNumber: "0888888888",
    iban: "BG12-AAAA-BBBB-CCCC-DDDD-FF",
  };

  const contactUpdated = {
    firstName: `${contact.firstName}_updated`,
    surname: `${contact.surname}_updated`,
    birthDate: new Date(),
    address: {
      line1: `${contact.address.line1}_updated`,
      line2: `${contact.address.line2}_updated`,
      city: `${contact.address.city}_updated`,
      country: `${contact.address.country}_updated`,
      postcode: `${contact.address.postcode}_updated`,
    },
    phoneNumber: "0888888889",
    iban: "BG12-AAAA-BBBB-CCCC-DDDD-EE",
  };

  beforeEach(() => {
    cy.visit(Cypress.env("UI_BASE_URL"));
  });

  it("Create new contact", () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq(Cypress.env("UI_BASE_URL") + "/contacts/all");
    });

    cy.get("#add-new-contact-btn", { timeout: 5000 }).click("center");

    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq(Cypress.env("UI_BASE_URL") + "/contacts/add");
    });

    cy.get("#firstName", { timeout: 5000 }).type(contact.firstName);
    cy.get("#surname", { timeout: 5000 }).type(contact.surname);
    cy.get("#birthDate", { timeout: 5000 }).type(
      contact.birthDate.toLocaleDateString("en-US")
    );
    cy.get("#line1", { timeout: 5000 }).type(contact.address.line1);
    cy.get("#line2", { timeout: 5000 }).type(contact.address.line2);
    cy.get("#city", { timeout: 5000 }).type(contact.address.city);
    cy.get("#country", { timeout: 5000 }).type(contact.address.country);
    cy.get("#postcode", { timeout: 5000 }).type(contact.address.postcode);
    cy.get("#phoneNumber", { timeout: 5000 }).type(contact.phoneNumber);
    cy.get("#iban", { timeout: 5000 }).type(contact.iban);

    cy.get("#add-edit-btn", { timeout: 5000 }).click("center");

    cy.get("#add-new-contact-btn", { timeout: 5000 });

    cy.get("tr>td").eq(0).should("have.text", contact.firstName);
    cy.get("tr>td").eq(1).should("have.text", contact.surname);
    cy.get("tr>td")
      .eq(2)
      .should("have.text", moment(contact.birthDate).format("DD/MM/yyyy"));
    cy.get("tr>td")
      .eq(3)
      .should(
        "have.text",
        `${contact.address.line1}, ${contact.address.line2}, ${contact.address.postcode}, ` +
          `${contact.address.city}, ${contact.address.country}`
      );
    cy.get("tr>td").eq(4).should("have.text", contact.phoneNumber);
    cy.get("tr>td").eq(5).should("have.text", contact.iban);
  });

  it("Update existing contact", () => {
    cy.get("tr>td>button", { timeout: 5000 }).eq(0).click("center");

    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.contains(
        Cypress.env("UI_BASE_URL") + "/contacts/update"
      );
    });

    cy.get("#firstName", { timeout: 5000 })
      .clear()
      .type(contactUpdated.firstName);
    cy.get("#surname", { timeout: 5000 }).clear().type(contactUpdated.surname);
    cy.get("#birthDate", { timeout: 5000 })
      .clear()
      .type(contactUpdated.birthDate.toLocaleDateString("en-US"));
    cy.get("#line1", { timeout: 5000 })
      .clear()
      .type(contactUpdated.address.line1);
    cy.get("#line2", { timeout: 5000 })
      .clear()
      .type(contactUpdated.address.line2);
    cy.get("#city", { timeout: 5000 })
      .clear()
      .type(contactUpdated.address.city);
    cy.get("#country", { timeout: 5000 })
      .clear()
      .type(contactUpdated.address.country);
    cy.get("#postcode", { timeout: 5000 })
      .clear()
      .type(contactUpdated.address.postcode);
    cy.get("#phoneNumber", { timeout: 5000 })
      .clear()
      .type(contactUpdated.phoneNumber);
    cy.get("#iban", { timeout: 5000 }).clear().type(contactUpdated.iban);

    cy.get("#add-edit-btn", { timeout: 5000 }).click("center");

    cy.get("#add-new-contact-btn", { timeout: 5000 });

    cy.get("tr>td").eq(0).should("have.text", contactUpdated.firstName);
    cy.get("tr>td").eq(1).should("have.text", contactUpdated.surname);
    cy.get("tr>td")
      .eq(2)
      .should(
        "have.text",
        moment(contactUpdated.birthDate).format("DD/MM/yyyy")
      );
    cy.get("tr>td")
      .eq(3)
      .should(
        "have.text",
        `${contactUpdated.address.line1}, ${contactUpdated.address.line2}, ${contactUpdated.address.postcode}, ` +
          `${contactUpdated.address.city}, ${contactUpdated.address.country}`
      );
    cy.get("tr>td").eq(4).should("have.text", contactUpdated.phoneNumber);
    cy.get("tr>td").eq(5).should("have.text", contactUpdated.iban);
  });

  it("Delete existing contact", () => {
    cy.get("tr>td>button", { timeout: 5000 }).eq(1).click("center");
    cy.get(".p-confirm-dialog-accept", { timeout: 5000 }).click("center");
    cy.visit(Cypress.env("UI_BASE_URL"));
    cy.get("tr>td>button", { timeout: 5000 }).eq(0).click("center");

    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.contains(
        Cypress.env("UI_BASE_URL") + "/contacts/update"
      );
    });

    cy.get("#firstName", { timeout: 5000 })
      .should("not.have.text", contact.firstName)
      .should("not.have.text", contactUpdated.firstName);
  });
});
