# 📅 ScheduleUP

O **ScheduleUP** é um **Gerenciador de Tarefas Pessoais** desenvolvido para ajudar usuários a manterem suas atividades organizadas, aumentando sua produtividade e controle sobre compromissos diários. O sistema foi projetado com uma interface simples e moderna, facilitando o uso mesmo para quem não tem familiaridade com ferramentas digitais.

---

## Funcionalidades

- Cadastro e login de usuários
- Calendário interativo com navegação por meses
- Criação de tarefas com data e título
- Criação de anotações pessoais com título e descrição
- Visualização automática das tarefas e anotações salvas
- Interface intuitiva, responsiva e com foco na usabilidade

---

## demonstração

Link para o vídeo de demonstração: https://drive.google.com/file/d/1cck1cHDl54ofeWapjb7c3CKUivhQi0VJ/view?usp=sharing

---

## Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3 tradicional (sem frameworks)
  - JavaScript puro

- **Backend:**
  - Node.js
  - Express.js

- **Banco de Dados:**
  - PostgreSQL

---

## Como Executar Localmente

Siga os passos abaixo para rodar o projeto localmente em sua máquina:

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/scheduleup.git
```

### Acesse o diretório do projeto:

```bash
cd scheduleup
```

### Instale as dependências:

```bash
npm install
```

### Configure o banco de dados:

- Crie um banco de dados PostgreSQL local (ex: scheduleup_db);

- Execute os scripts SQL de criação das tabelas (disponíveis em /scripts/);

- Configure o arquivo de conexão (ex: db.js) com seus dados de acesso ao banco.

### Inicie o servidor:

```bash
npm start
```

### Acesse a aplicação:

Abra o navegador e vá para:

```arduino
http://localhost:3000
```