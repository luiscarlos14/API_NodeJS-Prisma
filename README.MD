
# API em NodeJS usando o Prisma e Mysql.

API de um sistama simples de aluguel de filmes, contendo as tabelas de usuário, filmes e uma tabela que relaciona usuário e simbolizando assim o aluguel do filme. 




## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/luiscarlos14/API_NodeJS-Prisma
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install ou yarn install
```

Inicie o servidor

```bash
  npm dev ou yarn dev
```


## Documentação da API

#### Retorna todos os usuários

```http
  GET /users
```
#### Adiciona um usuário
```http
  POST /users/
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório** |
| `email` | `string` | **Obrigatório** |

#### Adiciona um filme
```http
  POST /movies/
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório** |
| `duration` | `int` | **Obrigatório** |
| `release_date` | `datetime` | **Obrigatório** |

#### Retorna todos os filmes

```http
  GET /movies/releases
```

#### Adicionar relação de aluguel

```http
  POST /movies/rent
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `movieID`      | `string` | **Obrigatório**. O ID do filme |
| `userID`      | `string` | **Obrigatório**. O ID do usuário |




## Aprendizados

Nesse projeto foi possível notar de forma prática o ganho de tempo e praticidade na construção do banco de dados com o Prisma, assim como das requisições de forma bem mais simples que as consultas tradicionais SQL.


## Stack utilizada


**Back-end:** Node, Express, Typescript, Prisma


## Referência

 - [Canal GB Dev](https://www.youtube.com/watch?v=NDWV5hHSPBk)
 - [Documentação do Prisma](https://www.prisma.io/)
 
