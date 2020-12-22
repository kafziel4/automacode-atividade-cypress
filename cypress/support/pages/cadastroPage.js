/// <reference types = "Cypress" />

import { should } from 'chai'
import cadastroElements from '../elements/cadastroElements'
const cadastroelements = new cadastroElements
const url = Cypress.config('baseUrl')

class cadastroPage {
    acessarSite() {
        cy.visit(url)
        cy.screenshot()
    }

    preencherCadastro(dataTable) {
        let cadastro = dataTable.rowsHash()

        cy.get(cadastroelements.nome()).type(cadastro.nome).should('contain.value', cadastro.nome)

        cy.get(cadastroelements.sobrenome()).type(cadastro.sobrenome).should('contain.value', cadastro.sobrenome)

        cy.get(cadastroelements.endereco()).type(cadastro.endereco).should('contain.value', cadastro.endereco)

        cy.get(cadastroelements.email()).type(cadastro.email).should('contain.value', cadastro.email)

        cy.get(cadastroelements.telefone()).type(cadastro.telefone).should('contain.value', cadastro.telefone)

        if (cadastro.genero == 'Male') {
            cy.get(cadastroelements.masculino()).check().should('be.checked')
        }
        else {
            cy.get(cadastroelements.feminino()).check().should('be.checked')
        }

        if (cadastro.hobbies == 'Cricket') {
            cy.get(cadastroelements.cricket()).check().should('be.checked')
        }
        else if (cadastro.hobbies == 'Movies') {
            cy.get(cadastroelements.filmes()).check().should('be.checked')
        }
        else {
            cy.get(cadastroelements.hockey()).check().should('be.checked')
        }

        cy.get(cadastroelements.idiomas()).click()
        cy.contains(cadastro.idiomas).click()
        cy.get(cadastroelements.idiomas()).children('.ui-autocomplete-multiselect-item').should('contain.text', cadastro.idiomas)

        cy.get(cadastroelements.habilidades()).select(cadastro.habilidade, {force: true}).should('contain.value', cadastro.habilidade)

        cy.get(cadastroelements.pais()).select(cadastro.pais).should('contain.value', cadastro.pais)

        cy.get(cadastroelements.selecionarPais()).select(cadastro.selecionarPais, {force: true}).should('contain.value', cadastro.selecionarPais)

        cy.get(cadastroelements.ano()).select(cadastro.ano).should('contain.value', cadastro.ano)

        cy.get(cadastroelements.mes()).select(cadastro.mes).should('contain.value', cadastro.mes)

        cy.get(cadastroelements.dia()).select(cadastro.dia).should('contain.value', cadastro.dia)

        cy.get(cadastroelements.senha()).type(cadastro.senha)

        cy.get(cadastroelements.confirmarSenha()).type(cadastro.senha)

        cy.get(cadastroelements.foto()).attachFile(cadastro.foto).should('contain.value', cadastro.foto)

        cy.screenshot()
    }

    clicarSubmit() {
        cy.get(cadastroelements.enviar()).click()
        cy.screenshot()
    }

    validarCadastro() {
        cy.url().should('include', 'WebTable.html')
        cy.screenshot()
    }

    clicarRefresh() {
        cy.get(cadastroelements.refresh()).click()
        cy.screenshot()
    }

    validarRefresh() {

        cy.get(cadastroelements.nome()).should('be.empty')

        cy.get(cadastroelements.sobrenome()).should('be.empty')

        cy.get(cadastroelements.endereco()).should('contain.value', '')

        cy.get(cadastroelements.email()).should('be.empty')

        cy.get(cadastroelements.telefone()).should('be.empty')

        cy.get(cadastroelements.masculino()).should('not.be.checked')

        cy.get(cadastroelements.feminino()).should('not.be.checked')

        cy.get(cadastroelements.cricket()).should('not.be.checked')

        cy.get(cadastroelements.filmes()).should('not.be.checked')

        cy.get(cadastroelements.hockey()).should('not.be.checked')

        cy.get(cadastroelements.idiomas()).children('.ui-autocomplete-multiselect-item').should('not.exist')

        cy.get(cadastroelements.habilidades()).should('contain.value', '')

        cy.get(cadastroelements.pais()).should('contain.value', '')

        cy.get(cadastroelements.selecionarPais()).should('contain.value', '')

        cy.get(cadastroelements.ano()).should('contain.value', '')

        cy.get(cadastroelements.mes()).should('contain.value', '')

        cy.get(cadastroelements.dia()).should('contain.value', '')

        cy.get(cadastroelements.senha()).should('be.empty')

        cy.get(cadastroelements.confirmarSenha()).should('be.empty')

        cy.get(cadastroelements.foto()).should('contain.value', '')

        cy.url().should('include', 'Registr.html') // erro de digitação proposital para ter um teste falhado no mochawesome reports

        cy.screenshot()
    }
}

export default cadastroPage;