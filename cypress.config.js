const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl: "https://kanban-dusky-five.vercel.app/",
    setupNodeEvents(on, config) {
      // Registrando tasks
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // Retorna config para que Cypress continue funcionando
      return config;
    },
    // Opcional: se quiser, pode definir o padrão de spec files
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
  },
});
