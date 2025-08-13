

/// <reference types="cypress" />


describe('Auditoria completa do site', () => {
  beforeEach(() => {
    cy.visit(URL, {
      onBeforeLoad(win) {
        cy.stub(win.console, 'error').as('consoleError');
      }
    });
  });

  it('Não deve ter erros no console', () => {
    cy.get('@consoleError').should('not.be.called');
  });

  it('Auditoria Lighthouse', () => {
    cy.lighthouse({
      performance: 50,
      accessibility: 80,
      'best-practices': 70,
      seo: 80
    }).then((report) => {
      console.log('Lighthouse report:', report.lhr);
    });
  });

  it('Auditoria de acessibilidade com axe', () => {
    cy.injectAxe();
    cy.checkA11y(null, null, (violations) => {
      if (violations.length) {
        cy.task('log', `${violations.length} problemas de acessibilidade encontrados.`);
      }
    });
  });
});