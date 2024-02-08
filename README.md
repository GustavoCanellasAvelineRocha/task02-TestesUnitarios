<h1 align="center"> Task 02 - Escrevendo Testes Unitários com Testing Library </h1>

<p align="center">
  Este projeto foi criado para realizar a Task 02 - Escrevendo Testes Unitários com Testing Library.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-instalação-do-projeto">Instalação do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#eventos-testes">Eventos Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#considerações">Considerações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#coverage">Coverage</a>&nbsp;&nbsp;&nbsp;
</p>

![image](https://github.com/GustavoCanellasAvelineRocha/Favoritos-GameOfThrones/assets/125305894/e7364a1f-79e3-4079-b03c-2b15a4f5713a)


## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- React
- Context 
- Styled Components
- TestingLibrary
  
## ⚙️ Instalação do Projeto

Passo a passo:

1. Clone o repositório principal.
2. Execute o comando "npm install" para baixar as dependências.
3. Execute o comando "npm start" para iniciar o projeto.

## 💻 Sobre o Projeto

Este projeto foi criado para realizar a Task 02 - Escrevendo Testes Unitários com Testing Library, para isso, utilizei a Testing Library para realizar os testes unitarios e ter o máximo possivel de coverage.

## Eventos testes

- Component Card:
Evento 1: Os campos do Personagem e os botões de adicionar favorito devem estar renderizado em tela.  
Evento 2: Ao apertar o botão de adicionar o botão remover deve aparecer em tela.
Evento 3: Ao apertar o botão de adicionar e apertar botão remover o botão de adicionar deve estar em tela.

- ContainerFavorite Component:
Evento 1: Os campos do Personagem e os botão de remover favorito devem estar renderizado em tela.
Evento 2: Os campos devem sumir ao apertar em remover.

- Pagina Home:
Evento 1: Os campos do Personagem e os botões de adicionar favorito devem estar renderizado em tela.
Evento 2: Deve ir para pagina favoritos ao clicar no link.

- Pagina Favoritos:
Evento 1: Os campos do Personagem favorito e os botão de remover favorito devem estar renderizado em tela.
Evento 2: O campo sem favoritos deve estar renderizado na tela.
Evento 3: Deve ir para pagina home ao clicar no link.

- Pagina NotFound:
Evento 1: Os campos do notFound devem ser renderizados na tela.

## Considerações

Tive uma dificuldade para testar as mudanças de context integrado com as páginas, desse modo tive que fazer um mock. Isso levou a não conseguir testar o context CharacterContext onde havia conexão com a API, como pode ser visto abaixo.

![image](https://github.com/GustavoCanellasAvelineRocha/task02-TestesUnitarios/assets/125305894/4eacb6da-6de7-41d6-87f9-e36495c37fb7)

Além disso, não fiz testes muito complexos, pois, novamente, o context dificultou esses testes, assim fiz os testes de renderização de todos componentes e da navegação com os links

## Coverage

![image](https://github.com/GustavoCanellasAvelineRocha/task02-TestesUnitarios/assets/125305894/787ab330-8aab-42f4-9d7f-f76d0abdea24)

