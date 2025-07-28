# Projeto ADS Labs - Sistema de Gerenciamento de Pedidos

Este repositório contém o desenvolvimento de um projeto completo com **Sequelize** e **Express** utilizando **Node.js** no back-end e **Angular** no front-end. A proposta do projeto foi entregue como parte das atividades da disciplina **ADS Labs** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** do **Instituto Federal da Bahia (IFBA)**.

---

## 📌 Objetivo do Projeto

O principal objetivo foi criar um sistema de gerenciamento de pedidos simples, com foco total no processo de **integração entre front-end e back-end**, utilizando as tecnologias modernas do ecossistema web e aplicando os princípios de boas práticas de desenvolvimento. O projeto também visava realizar a **dockerização completa** da aplicação — e essa etapa foi **concluída com êxito**, permitindo a execução integrada dos serviços de forma isolada e escalável.

---

## 🧩 Tecnologias Utilizadas

### Back-End
- **Node.js**
- **Express.js**
- **Sequelize (ORM)**
- **SQLite3** (como banco de dados)
- **Nodemon** (para hot reload)

### Front-End
- **Angular Standalone Components**
- **TypeScript**
- **Angular Services e Observables**

---

## ⚙️ Etapas do Desenvolvimento

### 1. Inicialização do Projeto
- Criação de dois projetos separados: um para o **back-end** com Node.js/Express e outro para o **front-end** com Angular.
- Configuração inicial do repositório Git.

### 2. Criação do Back-End
- Inicialização do projeto com `npm init` e instalação das dependências necessárias (Express, Sequelize, SQLite3).
- Configuração do Sequelize com models, migrations e conexão com o banco de dados.
- Criação do model `Pedido` com os campos: `id`, `cliente`, `produto`, `quantidade`, `status`.
- Criação de rotas RESTful:
  - `GET /pedidos`
  - `GET /pedidos/:id`
  - `POST /pedidos`
  - `PUT /pedidos/:id`
  - `DELETE /pedidos/:id`

### 3. Criação do Front-End
- Geração do projeto Angular com componentes standalone.
- Criação dos componentes:
  - `home`
  - `pedido-form`
  - `pedido-list`
- Criação do service `PedidoService` para consumir as APIs do back-end usando `HttpClient`.

### 4. Funcionalidades Implementadas
- Listagem de pedidos com botão para editar e excluir.
- Formulário para criar e atualizar pedidos.
- Comunicação completa entre front-end e back-end via HTTP.

### 5. Problemas Encontrados
- Os métodos `PUT` e `DELETE` inicialmente estavam com erros por conta da utilização incorreta de `HttpParams`, que não eram necessários para a construção do endpoint.

---

## 🐳 Dockerização

A aplicação foi **dockerizada com sucesso**, tanto no front-end quanto no back-end. A estrutura definida utiliza:

- Arquivos `Dockerfile` separados para cada camada da aplicação.
- Arquivo `docker-compose.yml` para orquestração de múltiplos containers.
- Containers distintos para o servidor Angular e o servidor Express.
- Volume persistente para o banco de dados.
- Comunicação entre containers via rede Docker personalizada.

Com isso, foi possível levantar o sistema completo com um único comando, garantindo portabilidade, isolamento e facilidade de deploy.

---

## 📊 Status do Projeto

✅ Sistema funcional com cadastro, listagem, edição e exclusão de pedidos  
✅ Integração completa entre front-end e back-end  
✅ Interface amigável e responsiva  
✅ Dockerização 100% concluída  
⚠️ Pequenas melhorias e refatorações futuras

---

## 🎓 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina **ADS Labs** no curso de **Análise e Desenvolvimento de Sistemas (ADS)** do **IFBA - Instituto Federal da Bahia**. A proposta da disciplina é aplicar na prática os conceitos estudados ao longo do curso, integrando diversas tecnologias modernas em um único produto funcional.

---

## ✍️ Autor

**Vinicius S. R.**  
Aluno do IFBA - ADS  
Desenvolvedor entusiasta de back-end e apaixonado por projetos fullstack
