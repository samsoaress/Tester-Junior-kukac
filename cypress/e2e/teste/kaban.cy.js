require('cypress-xpath');
const S = require('../support/selectors'); // ajuste o caminho conforme necessário

describe('Primeiros passos no Cypress', () => {

  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app')
  })

  const criarCard = (texto, colunaIndex = 0) => {
    cy.get(S.colunaCard)
      .eq(colunaIndex)
      .should('be.visible')
      .click()

    cy.get(S.inputCard)
      .should('be.visible')
      .clear()
      .type(texto)

    cy.get(S.btnSubmit)
      .should('be.visible')
      .click()
  }

  it('Cria múltiplos cards de forma estável', () => {
    criarCard('novo card', 0)
    criarCard('novo222', 2)
    criarCard('novo222', 0)
    criarCard('novo222', 2)

    cy.xpath(S.cardArea).should('be.visible').click()
    cy.xpath(S.cardColor0).click()
    cy.xpath(S.cardForm).should('be.visible')
    cy.xpath(S.cardFormInput).should('be.visible').type('Texto do card')
    cy.get(S.btnSubmit).should('be.visible').click()
  })

  it('Cria um card usando outro botão de criar', () => {
    cy.xpath(S.outroBotaoCriar).click()
    cy.xpath(S.outroBotaoCriarInput)
      .should('be.visible')
      .clear()
      .type('novo card')

    cy.get(S.btnSubmit).should('be.visible').click()
  })

  it('Clica no card To Do Trash', () => {
    cy.xpath(S.cardToDoTrash).should('be.visible').click()
  })

})
