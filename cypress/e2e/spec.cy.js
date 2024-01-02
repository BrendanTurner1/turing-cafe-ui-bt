describe("It should test the application", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "/example.json"
    })
    cy.visit("http://localhost:3000/?name=&date=&time=&guests=")
  })
  describe("It displays the Page title", ()=> {
    it("Should show title", () => {
      cy.get(".app-title").contains('Turing Cafe Reservations')
    })
  })
  describe('It displays reservations', () => {
    it("Should show reservation cards", () => {
      cy.get(".reservation-card-1").contains('h1', "Christie")
      cy.get(".reservation-card-1").contains('p', "12/29")
      cy.get(".reservation-card-1").contains('p', "7:00")
      cy.get(".reservation-card-1").contains('p', "12")
      cy.get(".reservation-card-1").contains('button', 'Cancel')
      cy.get(".reservation-card-2").contains('h1', "Leta")
      cy.get(".reservation-card-2").contains('p', "4/5")
      cy.get(".reservation-card-2").contains('p', "7:00")
      cy.get(".reservation-card-2").contains('p', "2")
      cy.get(".reservation-card-2").contains('button', 'Cancel')

    })
  })
})