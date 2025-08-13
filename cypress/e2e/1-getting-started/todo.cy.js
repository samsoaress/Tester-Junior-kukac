require('cypress-xpath');


describe('Primeiros passos no Cypress', () => {

  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app')
  })
  const criarCard = (texto, colunaIndex = 0) => {

    cy.get('.sc-ftvSup.iZjleo')
      .eq(colunaIndex)
      .should('be.visible')
      .click()

    cy.get('.sc-gsnTZi.irWJb')
      .should('be.visible')
      .clear()
      .type(texto)


    cy.get('.btn')
      .should('be.visible')
      .click()
  }

  it('Cria múltiplos cards de forma estável', () => {
    criarCard('novo card', 0)
    criarCard('novo222', 2)
    criarCard('novo222', 0)
    criarCard('novo222', 2)

    cy.xpath('//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div')
      .should('be.visible')
      .click()
    cy.xpath('//*[@id="0Color"]').click();
    cy.xpath('//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div/div/section/div[2]')
      .should('be.visible')
      .click();
    cy.xpath('//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div/div/section/div[2]/form')
      .should('be.visible');
    cy.xpath('//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div/div/section/div[2]/form/input')
      .should('be.visible')
      .type('Texto do card');
    cy.get('.btn')
      .should('be.visible')
      .click()

  })

  it('Cria um card usando outro botão de criar', () => {

    cy.xpath('//*[@id="__next"]/div/div[2]').click();
    cy.xpath('//*[@id="__next"]/div/div[2]/div/form/input')
      .should('be.visible')
      .clear()
      .type('novo card');

    cy.get('.btn')
      .should('be.visible')
      .click()

  })

  it('Cria um card usando outro botão de criar', () => {
    cy.xpath('//*[@id="📝  To Dotrash"]')
    .should('be.visible')
    .click();
  })
})
