class cadastroElements {
    nome = () => {
        return "input[placeholder ='First Name']"
    }

    sobrenome = () => {
        return "input[placeholder ='Last Name']"
    }

    endereco = () => {
        return "textarea[ng-model='Adress']"
    }

    email = () => {
        return "input[type='email']"
    }

    telefone = () => {
        return "input[type='tel']"
    }

    masculino = () => {
        return "input[value='Male']"
    }

    feminino = () => {
        return "input[value='FeMale']"
    }

    cricket = () => {
        return "#checkbox1"
    }

    filmes = () => {
        return "#checkbox2"
    }

    hockey = () => {
        return "#checkbox3"
    }

    idiomas = () => {
        return "#msdd"
    }

    habilidades = () => {
        return "#Skills"
    }

    pais = () => {
        return "#countries"
    }

    selecionarPais = () => {
        return "#country"
    }

    ano = () => {
        return "#yearbox"
    }

    mes = () => {
        return "select[placeholder='Month']"
    }

    dia = () => {
        return "#daybox"
    }

    senha = () => {
        return "#firstpassword"
    }

    confirmarSenha = () => {
        return "#secondpassword"
    }

    foto = () => {
        return "#imagesrc"
    }

    enviar = () => {
        return "#submitbtn"
    }

    refresh = () => {
        return "#Button1"
    }
}

export default cadastroElements;