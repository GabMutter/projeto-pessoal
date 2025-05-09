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

*Posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário.*

*Posicione também o modelo físico com o Schema do BD (arquivo .sql)*

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

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