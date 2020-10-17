<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://i.ibb.co/9tmXJf4/happy.png" alt="Logo" height="80" />
  <h3 align="center">Projeto Happy</h3>
  <p align="center">Levando felicidade para o mundo</p>
    


<p align="center">
    ⚠️ Atenção: Essa é apenas o back-end do projeto, você pode encontrar as outras partes aqui.
    <br>
 📱 <a href="https://github.com/cKauan/happy-mobile">Mobile</a>
 💻 <a href="https://github.com/cKauan/happy-web">Web</a>
  🌐 <strong><a href="https://github.com/cKauan/happy-server">Back-end</a></strong>
</p>

<!-- TABLE OF CONTENTS -->
## :paperclip: Sumário

* [Sobre o projeto](#sobre-o-projeto)
* [Tecnologias](#tecnologias-usadas)
* [Iniciando](#iniciando)
* [Documentação](#documentação)
* [Contribuições](#contribuições)
* [Licença](#licença)
* [Contato](#contato)

 
## Sobre o projeto

💡 Projeto idealizado para a divulgação de orfanatos locais por meio de cadastro.

### Tecnologias Usadas
:pushpin: Essas foram as tecnologias mais utilizados no decorrer do projeto
* [Typescript](https://www.typescriptlang.org)
* [Postgres](https://www.postgresql.org)
* [Typeorm](https://typeorm.io/#/)


<!-- GETTING STARTED -->
## Iniciando
:bookmark: Para rodar o projeto localmente você precisará seguir algumas intruções

### Pré-requisitos

- É necessário que o <a href="https://nodejs.org/en/">NodeJS</a> esteja instalado em sua máquina
- Você também irá precisar de um gerenciador de pacotes, nesse projeto usei o <a href="https://yarnpkg.com">Yarn</a>
- Foi usado <a href="https://www.postgresql.org">Postgres</a> nesse projeto, vá ao arquivo ```ormconfig.js``` e insira as informações de sua conexão.

### Instalação

```bash
# Clone o repositório
git clone https://github.com/cKauan/happy-server.git

# Instale todos os pacotes

# Yarn
yarn install
# Npm
npm install


# Rode as migrations

# Yarn
yarn typeorm migration:run
# Npm
npm run typeorm migration:run

# Ambiente de desenvolvimento

# Yarn
yarn dev
# Npm
npm run dev

# Ambiente de Produção

# Yarn
yarn build
# Npm
npm run build

# Iniciar em produção

# Yarn
yarn start
# Npm
npm run start
```


<!-- USAGE EXAMPLES -->
## Documentação

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Happy%20Servidor&uri=https%3A%2F%2Fgithub.com%2FcKauan%2Fhappy-server%2Fblob%2Fmaster%2Finsomnia-workspace.json)

```js

// Criar orfanatos
POST - /orphanages
Content-Type: multipart/form-data

name: string*
latitude: number*
longitude: number*
about: string*
instructions: string*
opening_hours: string*
open_on_weekends: boolean*
images: file*

*: Obrigatório

// Listar orfanatos
GET - /orphanages

[
  {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    about: string,
    instructions: string,
    opening_hours: string,
    open_on_weekends: boolean,
    images: [
      {
        id: number,
        url: string
      }
    ]
  }
]

// Detalhes de um orfanato
GET - /orphanages/:id

{
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: boolean,
  images: [
    {
      id: number,
      url: string
    }
  ]
}


// Deletar um orfanato
DELETE - /orphanages/:id

{
  message: "Sucess Deleted"
}

```
<!-- CONTRIBUTING -->
## Contribuições

:dart: Você quer contribuir para o projeto e não sabe como?

1. Dê Fork no projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Comite as alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça o push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

<!-- LICENSE -->
## Licença

<a href="https://choosealicense.com/licenses/mit/">MIT</a>

<!-- CONTACT -->
## Contato

:boy: Carlos Kauãn - [https://twitter.com/carlaodamassaa](https://twitter.com/carlaodamassaa) - carloskauanmoreiradesousa@gmail.com

:zap: Link do projeto: [https://github.com/cKauan/happy-web](https://github.com/cKauan/happy-web)

<p align="center">Feito com 💚 por Carlos Kauãn</p>
