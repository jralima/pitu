<h1 align="center">
    <img alt="Pitu" src="./icone.png" height="100px" />
    <br>Semana Full Stack JS<br/>
    Node.js | ReactJS | MySQL
</h1>

<p align="center">
    <a href="https://insomnia.rest/run/?label=&uri=" target="_blank">
        <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
    </a><br/>
</p>

<p align="center">
    Link do projeto em produção na AWS: 
    <a href="http://www.pitulacerda.tk/" target="_blank">http://www.pitulacerda.tk/</a>
    <br/>
</p>

<p align="center">
    <a href="#bookmark-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#memo-licença">Licença</a>
</p>

## :bookmark: Sobre o Projeto

O **Pitu** é uma aplicação Web que possibilita aos usuários encurtar e vizualizar estatíticas da URL que ele resolveu encurtar.

Este projeto foi idealizado pensando no camarão **pitu**, caracterizado por nascer pequenininho e em sua forma adulta ser muito grande.

Essa aplicação foi realizada durante a **Semana Full Stack JS**, projeto do professor [Luiz Duarte](https://www.luiztools.com.br).

## :rocket: Tecnologias Utilizadas

- [Axios](https://github.com/axios/axios)
- [Date-fns](https://date-fns.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Font Awesome](https://fontawesome.com/)
- [ReactJS](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)
- [Styled Components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador.
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[Yarn](https://yarnpkg.com/)** ou **[NPM](https://www.npmjs.com/)**.
  - Por fim, é **essencial** ter o **[MySQL](https://www.mysql.com/)** instalado na máquina.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/jralima/Pitu.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd backend
  # Instalando as dependências do projeto.
  $ npm install # yarn install
  # Inicie a API
  $ npm start # ou yarn start

  # CONEXÃO COM BANCO DE DADOS MYSQL
  # Criar arquivo .env
  # Incluir tag: DB_CONNECTION="mysql://<USUARIO>:<SENHA_MY_SQL>@<SUA_URL>:3306/<NOME_DO_BANCO_DE_DADOS>"
  # Obs: Quando executar o comando "npm start", será criada uma pasta "dist" dentro do backend. Copiar o arquivo .env pra dentro desta pasta também.

  # APLICAÇÃO WEB
  $ cd frontend
  # Instalando as dependências do projeto.
  $ yarn install # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start
```

## e-Books:

- [Frontend para iniciantes](https://github.com/jralima/pitu/blob/main/docs/frontend-para-iniciantes.pdf)

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<sup>Projeto desenvolvido com a tutoria de [Luiz Duarte](https://github.com/luiztools), da [LuizTools](https://www.luiztools.com.br).</sup>
