// cypress/support/selectors.js
const Selectors = {
  // Botões principais
  btnSubmit: '.btn',

  // Cards
  colunaCard: '.sc-ftvSup.iZjleo',
  inputCard: '.sc-gsnTZi.irWJb',

  // XPaths específicos
  cardArea: '//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div',
  cardColor0: '//*[@id="0Color"]',
  cardForm: '//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div/div/section/div[2]/form',
  cardFormInput: '//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div/div/section/div[2]/form/input',
  outroBotaoCriar: '//*[@id="__next"]/div/div[2]',
  outroBotaoCriarInput: '//*[@id="__next"]/div/div[2]/div/form/input',
  cardToDoTrash: '//*[@id="📝  To Dotrash"]'
};

module.exports = Selectors;
