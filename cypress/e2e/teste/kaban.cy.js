require('cypress-xpath');
const S = require('../../support/selectors');
const styleCss = require('../../support/css');

describe('Acessando Site', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/', { failOnStatusCode: false });
  })

  const adicionarTag = (texto, colunaIndex = 0) => {
    cy.get(S.colunaCard)
      .eq(colunaIndex)
      .should('be.visible')
      .click();

    cy.xpath(S.cardArea).should('be.visible').click();
    cy.get(S.modal).should('be.visible');
    cy.get(S.azul).click();
    cy.get(S.adicionarNovaTag).click();
    cy.xpath(S.cardFormInput).should('be.visible').type('Texto do card');
    cy.xpath(S.cardFormInput, { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled')
      .scrollIntoView()
      .click({ force: true })
      .clear()
      .type(texto, { delay: 50 })
      .should('have.value', texto);
    cy.get('section > .custom-input > .sc-bczRLJ > .sc-dkzDqf > .btn').should('be.visible').click();
    cy.xpath('//*[@id="__next"]/div/div[1]/div/div/div[1]').click('top');
  }

  const excluirCards = () => {
    cy.xpath('//header/div[contains(@class, "trash")]').each(($el) => {
      cy.wrap($el).click();
    });
  };

  const adicionarCard = (texto) => {
    const path = '//*[@id="__next"]/div/div[2]/div';
    const input = '//*[@id="__next"]/div/div[2]/div/form/input'
    cy.xpath(path).click(); // clica no primeiro elemento
    cy.xpath(input, { timeout: 10000 })
      .should('be.visible')
      .focus()
      .type(`${texto}{enter}`, { delay: 150 });
  };

  const adicionarTarefa = (texto, nomeCard) => {
    const path = '//*[@id="' + nomeCard + 'CreateTask"]/div';
    cy.xpath(path).click();
    cy.focused().type(`${texto}{enter}`, { delay: 150 });
  }

  const excluirTarefa = () => {
    cy.document().then((doc) => {
      // cria o estilo com um ID para facilitar a remoção
      const style = doc.createElement('style');
      style.id = 'css-hover-forcado';
      style.innerHTML = styleCss.forceHover;
      doc.head.appendChild(style);
    });
    cy.get('.content>header>.trash').click();
    // remove o CSS depois da ação
    cy.document().then((doc) => {
      const style = doc.getElementById('css-hover-forcado');
      if (style) {
        style.remove();
      }
    });
  };

  it('Cria múltiplos cards de forma estável', () => {
    excluirCards();
    adicionarCard("Primeiro Card");
    adicionarTarefa("Primeira Tarefa", "Primeiro Card");
    adicionarTag('Primeira Modal', 0);
    excluirTarefa('Primeira Modal');
    excluirCards();
  });
})
