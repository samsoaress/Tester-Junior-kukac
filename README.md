# Kanban Teste Kukac

Este projeto é um teste prático para a posição de Analista Júnior na empresa Kukac. O objetivo é demonstrar habilidades em manipulação de interface web, organização de tarefas e criação de testes automatizados usando Cypress.

## 📌 Descrição do Projeto
O projeto consiste em um quadro Kanban com três colunas principais:

- **To Do**: Lista de tarefas a serem iniciadas.
- **In Progress**: Tarefas em andamento.
- **Done**: Tarefas concluídas.

Cada coluna permite adicionar novos cards com título e tags, bem como interagir com cards existentes (alterar cor, mover, etc). O layout é simples e funcional, simulando o gerenciamento de tarefas típico de projetos ágeis.

## 🛠 Tecnologias Utilizadas
- **Automação de Testes**: Cypress com suporte a XPath (cypress-xpath)

## 🚀 Funcionalidades
- Adicionar cards em qualquer coluna do quadro Kanban.
- Diferenciar tarefas com tags.
- Mover tarefas entre colunas (via interface).
- Testes automatizados para garantir que o fluxo de criação de cards funciona corretamente.

## ⚙️ Como Rodar o Projeto
Clone o repositório:
```bash
git clone [<URL_DO_REPOSITORIO>](https://github.com/samsoaress/Tester-Junior-kukac.git)
```

Instale as dependências:
```bash
npm install
```

Execute o projeto:
```bash
npm start
```

Para rodar os testes com Cypress:
```bash
npx cypress open
```

## 🧪 Estrutura de Testes
Os testes automatizados verificam:
- Criação de múltiplos cards em diferentes colunas.
- Funcionalidade de campos de input e botões.
- Interação com elementos específicos via XPath e seletores CSS.

Os seletores estão centralizados em um arquivo de constraints (`selectors.js`) para facilitar manutenção e organização.

## 📁 Estrutura do Projeto
```bash
kanban-kukac/
├─ cypress/
│  ├─ e2e/               # Testes end-to-end
│  └─ support/
│     └─ selectors.js    # Arquivo com seletores centralizados
├─ src/
│  ├─ components/        # Componentes React
│  └─ styles/            # Arquivos de estilo
├─ package.json
└─ README.md
```

## 💡 Observações
- Este projeto é um teste prático, não possui back-end persistente; os dados são mantidos apenas em memória.
- Foco principal do teste: organização, testes automatizados e interação com a interface.


Auditoria de Site com Cypress, Lighthouse e axe

Este projeto adiciona auditorias automatizadas ao Cypress, permitindo identificar problemas de **performance, SEO, boas práticas e acessibilidade** diretamente no site.

---

## 1️⃣ Instalação das dependências

No diretório do projeto, execute:

```bash
npm install --save-dev @cypress-audit/lighthouse lighthouse chrome-launcher cypress-axe
```
---

## 4️⃣ Executando os testes

- **Modo UI**:

```bash
npx cypress open
```

- **Modo headless**:

```bash
npx cypress run
```

---

## 5️⃣ Benefícios

- Detecta **erros de console e scripts quebrados**.
- Auditoria completa de **performance, SEO e boas práticas** via Lighthouse.
- Checagem detalhada de **acessibilidade** via axe.
