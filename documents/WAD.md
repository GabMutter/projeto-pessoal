# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

- <a href="https://www.linkedin.com/in/gabriel-mutter-de-souza-9a0131351">Gabriel Souza</a>

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O presente documento tem como objetivo descrever o desenvolvimento de um Gerenciador de Tarefas voltado para a organização pessoal e aumento da produtividade. A aplicação web foi projetada para oferecer aos usuários uma maneira prática e eficiente de planejar, monitorar e concluir suas atividades diárias, proporcionando uma experiência intuitiva e funcional.

Em um cenário onde a gestão do tempo e das prioridades é cada vez mais essencial, a proposta deste projeto é criar uma ferramenta que permita o cadastro, categorização, atualização e finalização de tarefas, além de oferecer recursos de organização visual e alertas de prazos.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

A criação de personas é utilizada para representar os usuários-alvo de uma aplicação de forma mais concreta e humanizada. Por meio da construção de personagens fictícios baseados em características reais do público, é possível compreender melhor suas necessidades, comportamentos, dores e objetivos. Essa representação ajuda na desenvolvimento de soluções mais alinhadas às expectativas e demandas dos usuários, garantindo maior usabilidade e eficiência do sistema.

<div align= "center">
<img src="../assets/persona.png">
</div>

### 2.2. User Stories (Semana 01)

As user stories são descrições breves e simples que capturam as necessidades ou desejos dos usuários em relação ao sistema. Elas são formuladas do ponto de vista do próprio usuário e ajudam a guiar o desenvolvimento das funcionalidades de forma focada nas experiências reais. Cada user story geralmente inclui um critério de aceitação, que define as condições que a funcionalidade deve atender para ser considerada concluída. Esse método facilita a comunicação entre as equipes de design, desenvolvimento e stakeholders, promovendo um produto mais centrado no usuário.

Identificação| US01
---|---
Persona|Valkíria Hansen
User Story|"Como engenheira da computação com uma rotina intensa de projetos e reuniões, eu quero adicionar, categorizar e priorizar minhas tarefas em um painel visual para que eu consiga organizar meu dia de forma eficiente e acompanhar meus prazos sem estresse."
Critério de aceite 01|O usuário deve conseguir adicionar uma nova tarefa rapidamente;
Critério de aceite 02|O usuário pode categorizar tarefas (ex.: trabalho, pessoal, estudos);
Critério de aceite 03|O usuário pode definir prioridade (alta, média, baixa);
Critério de aceite 04|As tarefas devem ser exibidas em um painel organizado visualmente.

Identificação| US02
---|---
Persona| Possível usuários da aplicação _web_ em desenvolvimento
User Story|"Como designer freelancer, eu quero receber notificações de prazos de tarefas próximas para garantir que eu entregue meus projetos no prazo e mantenha a confiança dos meus clientes."
Critério de aceite 01|O usuário deve receber notificações antes do vencimento de tarefas;
Critério de aceite 02|O sistema deve permitir configurar com quanto tempo de antecedência avisar (ex.: 1 hora, 1 dia);
Critério de aceite 03|Notificações devem ser claras e exibidas de forma destacada.

Identificação| US03
---|---
Persona| Possível usuários da aplicação _web_ em desenvolvimento
User Story|"Como estudante universitária, eu quero poder dividir grandes projetos em tarefas menores para facilitar o planejamento das entregas acadêmicas e evitar acúmulo de trabalho na última hora."
Critério de aceite 01|O usuário pode criar uma tarefa principal e adicionar subtarefas a ela;
Critério de aceite 02|O sistema deve exibir subtarefas de forma hierárquica ou agrupada;
Critério de aceite 03|Ao concluir todas as subtarefas, a tarefa principal é marcada como concluída automaticamente.

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

Um banco de dados é uma coleção organizada de dados. Seu principal objetivo é armazenar informações de maneira estruturada para facilitar consultas e manipulação por sistemas computacionais. Os bancos de dados são fundamentais em aplicações modernas, permitindo persistência de dados, integridade e escalabilidade.

#### Modelo relacional

O modelo de banco de dados é a forma como os dados são estruturados e organizados dentro do banco. Ele define a lógica de como os dados se relacionam entre si.

O modelo lógico representa a estrutura do banco de dados com foco nas entidades, atributos e nos relacionamentos entre elas. Ele é independente do sistema gerenciador de banco de dados (SGBD) utilizado. No modelo lógico: Entidades viram tabelas, atributos viram colunas e relacionamentos viram chaves estrangeiras ou tabelas intermediárias.

<div align= "center">
<img src="../assets/banco-modelo.png">
</div>

#### Modelo físico

O modelo relacional é a implementação prática do modelo lógico em um SGBD. Nele, todas as entidades e relacionamentos são convertidos em tabelas com tipos de dados específicos, constraints (como PRIMARY KEY, FOREIGN KEY, NOT NULL) e relacionamentos reais.

```sql
    CREATE TABLE IF NOT EXISTS usuario (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS endereco (
    id INT PRIMARY KEY,
    rua VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS evento (
    id INT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    prioridade VARCHAR(20),
    id_usuario INT NOT NULL,
    id_endereco INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_endereco) REFERENCES endereco(id)
);

CREATE TABLE IF NOT EXISTS task (
    id INT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    confirmar BOOLEAN DEFAULT 0,
    data DATE NOT NULL,
    id_usuario INT NOT NULL,
    id_evento INT,
    id_anotacao INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_evento) REFERENCES evento(id),
    FOREIGN KEY (id_anotacao) REFERENCES anotacao(id)
);

CREATE TABLE IF NOT EXISTS anotacao (
    id INT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    id_task INT,
    id_evento INT,
    FOREIGN KEY (id_task) REFERENCES task(id),
    FOREIGN KEY (id_evento) REFERENCES evento(id)
);
```

### 3.1.1 BD e Models (Semana 5)

O Model é a camada responsável pela manipulação dos dados em uma aplicação. Ele define a estrutura dos dados, incorpora as regras de negócio, executa operações de acesso ao banco de dados e implementa a lógica de processamento. Essa camada funciona de forma independente da interface do usuário, interagindo com o controlador para receber as requisições, processá-las e retornar os resultados que serão exibidos na visualização. O Model exerce um papel fundamental na separação de responsabilidades, o que contribui para a modularidade e a fácil manutenção do código, além de facilitar a reutilização e a realização de testes automatizados.

#### usuário

- getAll 
- getById 
- create 
- update 
- delete 

#### Endereço

- getAll 
- getById 
- create 
- update 
- delete 

#### Evento

- getAll 
- getById 
- create 
- update 
- delete 

#### Task

- getAll 
- getById 
- create 
- update 
- delete 

#### Anotação

- getAll 
- getById 
- create 
- update
- delete 

### 3.2. Arquitetura (Semana 5)

Um diagrama de arquitetura é uma representação visual que mostra como os principais componentes de um sistema estão organizados e como eles se relacionam entre si.

<div align= "center">
<img src="../assets/Diagrama de arquetetura.png">
</div>

### 3.3. Wireframes (Semana 03)

#### wireframe da tela inicial

A imagem abaixo é o wireframe da tela inicial. Após fazer login, esta será a primeira tela exibida. Nela, é possível visualizar um grande calendário, onde o usuário poderá anotar os eventos que terá ao longo do mês. Logo abaixo, há alguns retângulos com textos, que servem para o usuário fazer anotações relacionadas aos eventos que irá ou está participando. À direita, é possível observar uma seção destinada às tarefas (tasks), onde serão exibidas as atividades que o usuário precisa realizar naquele dia, de acordo com o calendário ou com alguma tarefa previamente criada. Esse quadro de tarefas está alinhado com a necessidade descrita na user story 3.

<div align= "center">
<img src="../assets/wireframe1.png">
</div>

#### wireframe da tela inicial com o menu da conta aberto

Nesta tela, o menu da conta está aberto, exibindo apenas dois botões: um para efetuar o logout e outro para visualizar os detalhes da conta.

<div align= "center">
<img src="../assets/wireframe2.png">
</div>

#### wireframe da tela inicial com o menu de notificações aberto

Aqui, o menu de notificações está aberto. Nele, será possível visualizar as tarefas que estão atrasadas ou próximas do prazo final. Isso está alinhado com a User Story 2, que solicita uma barra de notificações para que o usuário não perca os prazos.

<div align= "center">
<img src="../assets/wireframe3.png">
</div>

#### wireframe da tela de criar anotação 

Esta tela aparece quando o usuário cria uma nova anotação, permitindo que ele insira as informações que considerar necessárias.

<div align= "center">
<img src="../assets/wireframe4.png">
</div>

### 3.4. Guia de estilos (Semana 05)

Este guia de estilos tem como objetivo padronizar o desenvolvimento visual e técnico do sistema, garantindo uma aparência consistente, uma melhor organização do código e uma experiência de usuário unificada em todas as partes do projeto.

<a href = "https://www.figma.com/design/UuUwHlxcbYgIYmgJYQ21EX/Untitled?node-id=0-1&t=C88TsD9gcdeJ5TB2-1"> Clique aqui para ver o guia de estilo. </a>

### 3.5. Protótipo de alta fidelidade (Semana 05)

#### protótipo da tela inicial

<div align= "center">
<img src="../assets/prototipo1.png">
</div>

#### protótipo da tela de criar anotação

<div align= "center">
<img src="../assets/prototipo2.png">
</div>

#### protótipo da tela inicial com o menu de notificações aberto

<div align= "center">
<img src="../assets/prototipo3.png">
</div>

#### protótipo da tela inicial com o menu da conta aberto

<div align= "center">
<img src="../assets/prototipo4.png">
</div>

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---