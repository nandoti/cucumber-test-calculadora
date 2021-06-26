cypress-cucumber-preprocessor

### Instalação:

`npm install -D cypress-cucumber-preprocessor`

### Configuração do Cypress:

Adicionar o trecho abaixo no arquivo de plugins: 

`cypress/plugins/index.js`

```js
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
``` 

Adicionar o suporte aos arquivos da feature em sua configuração do Cypress:

`cypress.json`

{
  "testFiles": "**/*.feature"  
}

### Configuração:

fazer uso de cosmiconfig para criar uma configuração para o plugin 
(adicionando a seção abaixo ao seu package.json:).

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true 
}
``` 

*Essa configução se tornara padrão futuramente.* 

## Como organizar os testes

### Arquivos de feature independentes

Adicionar o seu arquivo de feature na pasta `cypress/integration`
Exemplo: `cypress/integration/Calculadora.feature`

```gherkin
  Feature: Calculadora

    O usuário irá utilizar a calculadora para
    conferir suas contas

    Scenario: Calcular o somatório dos valores
        Given eu acesso a Calculadora
        And irei realizar a "soma"
        When informo os valores "10" e "20"
        And finalizo o calculo
        Then e obtenho o resultado "30"

```
*Termos em inglês: Given, When, Then, And* 

## Definição dos passos (step definitions)

**RECOMENDADO**

Criando os passos

Os arquivos de feature irão utilizar os passos definidos nos arquivos que estiverem em uma 
pasta **com o mesmo nome do arquivo de feature**. 
Os arquivos `js` dentro dessa pasta podem ter qualquer outro nome, 
caso queira quebrar ou organizar com mais formas.


> plugin para facilitar a criação do Steps.js Cuke Step Definition Generator
> Doc usada https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/370
- Botão direito nos steps > Generate step defs > Copy to clipboard
