# Pokélist

## Índice

* [1. Projeto Pokélist](#1-pokélist)
* [2. Usuários](#2-usuários)
* [3. História  de Usuários](#3-histórias-de-usuários)
* [4. Desenho de Interface do Usuário](#4-desenho-de-interface-do-usuário)
* [5. Testes de usabilidade](#5-testes-de-usabilidade)
* [6. Considerações finais](#6-considerações-finais)

***

## 1. Pokélist

Pokémon GO é um jogo de realidade aumentada para smartphones que foi criado pela empresa Niantic, Inc. Lançado em 2016, oferece ao usuário a experiência de se tornar um mestre Pokémon, podendo caçar, evoluir e batalhar
com seus Pokémons.
Neste projeto misturamos referências do mundo Pokémon como um todo, com a interface
do jogo. Buscamos trazer as informações dentro de Cards Pokémons, que são queridos
até hoje por fãs em todos os lugares do mundo.

E porquê Pokémon GO? 
No mês de agosto de 2019 o jogo voltou a ser o free to play mais lucrativo do
mundo, faturando us$176 milhões e passando o marco de 1 Bilhão de downloads.
O projeto Pokélist veio com o intuito de resolver alguns problemas que o jogador
de Pokémon GO tem, como por exemplo descobrir quais os Pokémons vem em cada tipo 
de Ovo, e assim facilitar estratégias de batalha e organização da pokedéx do jogador.

## 2. Usuários
![Usuários](src/images/usuarios.png)


## 3. Histórias de Usuários

#### Maria:

Maria tem um grande sonho que é ser uma grande mestre Pokémon, para isso ela precisa
saber quais são os Pokémons que vem em cada tipo de Ovo, os de 2 km, 5 km, 10 km e 
os que não vem em ovos. Assim quando ela encontrar um ovo Pokémon já
pode planejar a organização de sua pokedéx, tendo em vista que saberá se o Pokémon é repetido ou não, permitindo a ela focar apenas nos Pokémons de seu interesse.

Além disso, Maria gostaria de saber quais são as 
porcentagens de Pokémons que vem em cada Ovo, e as dos Pokémons que ela conseguirá somente por evolução.


#### Adriana:

Adriana começou a jogar Pokémon GO por pura insistência de sua amiga Maria, agora
ela já está viciada nesse novo mundo e quer acompanhar a amiga. Como Adriana joga a 
pouco tempo ela precisa saber os nomes dos Pokémons e visualizar seus tipos e fraquezas, assim ela vai conseguir traçar estratégias para vencer no campo de batalha
e se tornar cada vez mais forte. 
Outra necessidade que Adriana tem é saber quais Pokémons ela vai conseguir evoluir
mais rápido, no jogo ela consegue evoluir seus Pokémons com candies, portanto ela saberá quais 
Pokémons precisam de menos ou mais candies para
evoluir.


#### Como o projeto Pokélist pode ajudar essas usuárias?

Criamos uma interface que permite as usuárias:

* Visualizar quais Pokémons vem em cada tipo de Ovo;
* Ordenar os Pokémons por Nome em ordem crescente e decrescente;
* Ordenar os Pokémons por quantos candies precisam para evoluir;
* Visualizar estatísticas de porcentagem Pokémon por Ovo;
* Buscar um Pokémon por nome na barra de busca;
* Visualizar Pokémons em Cards, com as informações essenciais a cada jogador: nº Pokémon,
tipo, fraquezas, em que ovo vem e quantos candies são necessários para evoluir.

Além disso trazemos a sensação nostálgica de brincar com Cards Pokémons, girando os cards
ao passar com o mouse por cima deles.
Ambas usuárias estão contentes com o resultado e já informaram que irão utilizar o site
toda vez que tiverem uma dúvida com relação aos Pokémons e como vão seguir com suas estratégias no jogo.


## 4. Desenho de interface do usuário

#### Protótipo de baixa fidelidade - Papel

Tivemos dois desenhos de interface de usuário, uma realizada em papel e outra em formato digital. No papel colocamos algumas
opções antes de fazer a história de usuário, conforme fizemos a pesquisa posteriormente 
vimos que algumas dessas opções eram na verdade dispensáveis e que não despertavam interesse 
nas nossas usuárias.

![Protótipo Papel](src/images/prototipopapel.jpg)

#### Protótipo de baixa fidelidade - Digital

Depois do protótipo de papel fizemos a digital no Figma, mas somente para visualização da interface.
Pensamos em mostrar as pokebolas com nomes e ID dos Pokémos e somente mostrar os
dados após clicar nas pokébolas, nesse segundo protótipo também já havíamos entrevistados usuárias e definido quais aspectos seriam interessantes de serem visualizados.

![Protótipo Figma](src/images/protótipo.png)

Porém, não era visualmente agradável uma interface somente com as pokebolas,o card por sua vez, traria uma sensação nostálgica, tendo em vista que também existe um jogo Pokémon em cards.

## 5. Testes de usabilidade

Durante a criação do projeto fizemos testes de usabilidade com as usuárias, e algumas alterações 
foram feitas durante o processo.

A dificuldade de deixar claro a ordenação de candies foi grande. Da primeira vez a opção 
estava com o nome de "Candies" e o dropdown dessa opção como "maior-menor", "menor-maior"
e "sem evolução", as usuárias disseram que estava confuso e que não entenderam que se tratava de
ordenar os Pokémos por candies para evoluir, modificamos então essa opção para "Candies para 
Evoluir" e o dropdown para "12-400", "400 -12" e "sem evolução", passamos novamente para as 
usuárias e tivemos a mesma resposta, estava
confuso. Perguntamos se ao colocarmos "Ordenar por Candies" ficaria claro sobre o que se tratava, e tivemos uma resposta positiva, assim o fizemos, passamos novamente pelo teste de uso e dessa vez ficou claro para as usuárias.

Outro ponto que foi levantado durante os testes foi a necessidade de implementação de um botão para
voltar ao topo da página, pois a quantidade de cards é grande tornando a volta ao menu desgastante, portanto colocamos um botão no canto
inferior direito para facilitar esse acesso.

Com relação as outras partes do projeto tivemos ótimas respostas das usuárias, disseram ser de fácil
usabilidade e elogiaram o design da interface, as informações serem dispostas em cards foi outro ponto
que as usuárias gostaram, por lembrar um jogo da infância.

## 6. Considerações finais

Esse projeto foi desenvolvido em dupla por Andreza Amorim e Jackeline Mattar como parte do Bootcamp
<Laboratória>, a fim de desenvolver a prática e estudo de Arrays e Objetos em JavaScript, além da manipulação de dados de um data-base.
Agradecemos aos nossos mentores, toda equipe Laboratória e a imensa ajuda que recebemos de nossas amigas de turma. Juntas somos mais fortes! 