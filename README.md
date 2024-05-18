# TutorialServ

## Introdução

Este projeto implementa um CRUD (Create, Read, Update, Delete) utilizando Spring Boot, uma estrutura Java para criar aplicativos rapidamente. O CRUD gerencia tutoriais, permitindo a criação, leitura, atualização e exclusão de registros. Agora, a aplicação também possui uma interface front-end desenvolvida em ReactJS, tornando-se uma aplicação completa MVC (Model-View-Controller).

## Estrutura do Projeto

O projeto segue uma estrutura típica de aplicativo Spring Boot e ReactJS, com os seguintes diretórios principais:

### Back-end (Spring Boot)
- **controller:** Contém as classes responsáveis por lidar com as requisições HTTP e encaminhá-las para o serviço apropriado.
- **model:** Define as entidades de dados do aplicativo, neste caso, o modelo `Tutorial`.
- **repository:** Fornece interfaces para acessar os dados do banco de dados. Aqui, a interface `TutorialRepository` estende o `JpaRepository` do Spring Data JPA.

### Front-end (ReactJS)
- **src/components:** Contém os componentes React para a interface do usuário.
- **src/services:** Contém os serviços para fazer requisições HTTP à API back-end.
- **public:** Contém o arquivo `index.html` que carrega a aplicação React.
- **src/App.js:** Componente principal que define as rotas da aplicação.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

### Back-end
- **Spring Boot:** Framework Java que facilita a criação de aplicativos.
- **Spring Data JPA:** Facilita o acesso e a manipulação de dados utilizando o Hibernate ORM.
- **MySQL:** Banco de dados relacional utilizado para armazenar os tutoriais.

### Front-end
- **ReactJS:** Biblioteca JavaScript para construir interfaces de usuário.
- **Axios:** Biblioteca para fazer requisições HTTP.
- **Bootstrap:** Framework CSS para estilização da interface.

## Implementação do CRUD

### Back-end

#### Controller

- `TutorialController`: Gerencia as requisições HTTP relacionadas aos tutoriais, encaminhando-as para as operações apropriadas do serviço.

#### Model

- `Tutorial`: Define a estrutura de um tutorial, incluindo título, descrição e status de publicação.

#### Repository

- `TutorialRepository`: Define métodos para acessar os dados dos tutoriais no banco de dados. Fornece métodos para buscar, criar, atualizar e excluir tutoriais.

### Front-end

#### Componentes

- `TutorialList.js`: Exibe a lista de tutoriais.
- `Tutorial.js`: Exibe os detalhes de um tutorial específico.
- `AddTutorial.js`: Formulário para adicionar um novo tutorial.
- `EditTutorial.js`: Formulário para editar um tutorial existente.

## Testes e Validação

O projeto pode ser testado localmente utilizando o curl, exemplos:

### Criar novo tutorial
```
curl -X POST -H "Content-Type: application/json" -d '{"title":"Spring Boot Basics","description":"Introduction to Spring Boot.","published":true}' http://localhost:8080/api/tutorials
```

### Obter todos os tutoriais

```
curl -X GET http://localhost:8080/api/tutorials
```

### Obter por ID

```
curl -X GET http://localhost:8080/api/tutorials/1
```

### Obter por status de 'publicado'

```
curl -X GET http://localhost:8080/api/tutorials/published
```

### Atualizar Tutorial por ID

```
curl -X PUT -H "Content-Type: application/json" -d '{"title":"Spring Boot Basics Updated","description":"Introduction to Spring Boot. Updated description.","published":true}' http://localhost:8080/api/tutorials/1
```
### Deletar por ID

```
curl -X DELETE http://localhost:8080/api/tutorials/1
```

### Deletar todos os tutoriais
```
curl -X DELETE http://localhost:8080/api/tutorials
```

## Instalação

### Back-end

Clone esse repositório, e certifique-se de atualizar as configurações de acesso ao banco em `src/main/resources/application.properties` (exemplo em `src/main/resources/application.properties.example`).

### Front-end

No diretório do projeto React, execute:

```bash
npm install
npm run build
npm copy-build
```




