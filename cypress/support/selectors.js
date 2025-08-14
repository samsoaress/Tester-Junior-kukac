// cypress/support/selectors.js
const Selectors = {
  // Botões principais
  btnSubmit: '.btn',
  // Cards
  colunaCard: '.sc-ftvSup.iZjleo',
  inputCard: '//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div/div/section/div[2]/form/input',
  dropList: '.drop-list',
  // XPaths específicos
  cardArea: '//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div',
  azul: '#\\30 Color',
  roxo: '#\\31 Color',
  verde: '#\\32 Color',
  adicionarNovaTag: 'section > .custom-input > p',
  modal: '.sc-jSMfEi',
  cardFormInput: '//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div/div/section/div[2]/form/input',
  outroBotaoCriar: '//*[@id="__next"]/div/div[2]',
  outroBotaoCriarInput: '//*[@id="__next"]/div/div[2]/div/form/input',
  cardToDoTrash: '//*[@id="📝  To Dotrash"]'
};

module.exports = Selectors;
