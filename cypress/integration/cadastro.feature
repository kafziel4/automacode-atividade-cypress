Feature: Cadastro

    Scenario: Realizar o cadastro
        Given que eu acesso a página de cadastro
        When eu submeto meu cadastro:
            | nome           | João             |
            | sobrenome      | Silva            |
            | endereco       | R. Teste, 999    |
            | email          | joao123@mail.com |
            | telefone       | 9912345678       |
            | genero         | Male             |
            | hobbies        | Movies           |
            | habilidade     | Javascript       |
            | idiomas        | Portuguese       |
            | pais           | Brazil           |
            | selecionarPais | Australia        |
            | ano            | 1991             |
            | mes            | August           |
            | dia            | 7                |
            | senha          | Pwd123           |
            | foto           | foto_joao.jpg    |
        And eu clico em Submit
        Then sou redirecionado para a tela de registros

    Scenario: Preencher campos incorretamente
        Given que eu acesso a página de cadastro
        When eu submeto meu cadastro:
            | nome           | Maria             |
            | sobrenome      | Souza             |
            | endereco       | R. Automação, 111 |
            | email          | maria123&mail.com |
            | telefone       | 991234567         |
            | genero         | Female            |
            | hobbies        | Hockey            |
            | habilidade     | Programming       |
            | idiomas        | English           |
            | pais           | Switzerland       |
            | selecionarPais | New Zealand       |
            | ano            | 1990              |
            | mes            | August            |
            | dia            | 13                |
            | senha          | Pwd123            |
            | foto           | foto_maria.jpg    |
        And eu clico em Refresh
        Then a página é recarregada com os campos em branco