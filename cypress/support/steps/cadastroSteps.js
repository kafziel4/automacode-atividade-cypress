/* global Given, When, Then, And */

import cadastroPage from '../pages/cadastroPage'
const cadastropage = new cadastroPage

Given("que eu acesso a página de cadastro", () => {
    cadastropage.acessarSite()
})

When("eu submeto meu cadastro:", (dataTable) => {
    cadastropage.preencherCadastro(dataTable)
})

And("eu clico em Submit", () => {
    cadastropage.clicarSubmit()
})

Then("sou redirecionado para a tela de registros", () => {
    cadastropage.validarCadastro()
})

And("eu clico em Refresh", () => {
    cadastropage.clicarRefresh()
})

Then("a página é recarregada com os campos em branco", () => {
    cadastropage.validarRefresh()
})