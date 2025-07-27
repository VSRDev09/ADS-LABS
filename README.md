# Projeto ADS Labs - Sistema de Gerenciamento de Pedidos

Este repositório contém o desenvolvimento de um projeto completo com **Sequelize** e **Express** utilizando **Node.js** no back-end e **Angular** no front-end. A proposta do projeto foi entregue como parte das atividades da disciplina **ADS Labs** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** do **Instituto Federal da Bahia (IFBA)**.

---

## 📌 Objetivo do Projeto

O principal objetivo foi criar um sistema de gerenciamento de pedidos simples, com foco total no processo de **integração entre front-end e back-end**, utilizando as tecnologias modernas do ecossistema web e aplicando os princípios de boas práticas de desenvolvimento. O projeto também visava realizar a **dockerização** completa da aplicação, porém, devido a **limitações de espaço no disco da máquina local**, essa etapa não foi finalizada, mas está planejada para ser realizada posteriormente.

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

### 1. **Inicialização do Projeto**
- Criação de dois projetos separados: um para o **back-end** com Node.js/Express e outro para o **front-end** com Angular.
- Configuração inicial do repositório Git.

### 2. **Criação do Back-End**
- Inicialização do projeto com `npm init` e instalação das dependências necessárias (Express, Sequelize, SQLite3).
- Configuração do Sequelize com models, migrations e conexão com o banco de dados.
- Criação do model `Pedido` com os campos: `id`, `cliente`, `produto`, `quantidade`, `status`.
- Criação de rotas RESTful:
  - `GET /pedidos`
  - `GET /pedidos/:id`
  - `POST /pedidos`
  - `PUT /pedidos/:id`
  - `DELETE /pedidos/:id`

### 3. **Criação do Front-End**
- Geração do projeto Angular com componentes standalone.
- Criação dos componentes:
  - `home`
  - `pedido-form`
  - `pedido-list`
- Criação do service `PedidoService` para consumir as APIs do back-end usando `HttpClient`.

### 4. **Funcionalidades Implementadas**
- Listagem de pedidos com botão para editar e excluir.
- Formulário para criar e atualizar pedidos.
- Comunicação completa entre front-end e back-end via HTTP.

### 5. **Problemas Encontrados**
- Os métodos `PUT` e `DELETE` inicialmente estavam com erros por conta da utilização incorreta de `HttpParams`, que não eram necessários para a construção do endpoint.
---

## 🐳 Dockerização

A ideia era dockerizar tanto o front-end quanto o back-end usando arquivos `Dockerfile` e `docker-compose.yml`. A estrutura estava planejada para permitir:

- Containers separados para front e back.
- Volume persistente para banco de dados.
- Comunicação entre containers usando uma rede Docker personalizada.

Contudo, por **falta de espaço no disco**, o processo de build dos containers foi interrompido. A dockerização completa está planejada para ser finalizada em breve, após a limpeza e organização do sistema de arquivos.

---

## 📊 Status do Projeto

✅ Sistema funcional com cadastro, listagem, edição e exclusão de pedidos  
✅ Integração completa entre front-end e back-end  
✅ Interface amigável e responsiva  
⚠️ Dockerização pendente (95% concluído)  
⚠️ Pequenas melhorias e refatorações futuras

---

## 🎓 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina **ADS Labs** no curso de **Análise e Desenvolvimento de Sistemas (ADS)** do **IFBA - Instituto Federal da Bahia**. A proposta da disciplina é aplicar na prática os conceitos estudados ao longo do curso, integrando diversas tecnologias modernas em um único produto funcional.

---

## ✍️ Autor

Vinicius S. R.  
Aluno do IFBA - ADS  
Desenvolvedor entusiasta de back-end e apaixonado por projetos fullstack

---

