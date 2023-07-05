# Sistema de Gestão de Torneios Left 4 Dead 2

[![Status da Construção](https://dev.azure.com/altairsossai/Torneio%20L4D2/_apis/build/status/build-web-app?branchName=master)](https://dev.azure.com/altairsossai/Torneio%20L4D2/_build/latest?definitionId=22&branchName=master)
[![Status do Lançamento](https://vsrm.dev.azure.com/altairsossai/_apis/public/Release/badge/59d9b252-ba33-43e4-b3c5-b8b204c4dfae/2/2)](https://dev.azure.com/altairsossai/Torneio%20L4D2/_release?_a=releases&view=mine&definitionId=2)

## Sobre o Projeto
Este projeto foi criado para apoiar a comunidade de **Left 4 Dead 2**, na qual estou inserido, que se organizou para realizar um torneio com o objetivo de fortalecer as amizades dentro e fora do jogo. O torneio utiliza a regra de pontos corridos para definir os vencedores, algo muito parecido com o que acontece nos campeonatos de futebol.

Com a finalidade de facilitar a gestão do torneio, desenvolvi um site para auxiliar no controle dos confrontos, jogadores, equipes e pontuações. A aplicação é dividida em duas partes: um *front-end* construído em **Angular** e um *back-end* desenvolvido em **C#**, utilizando *Azure Functions*. Os dados são armazenados em um *Storage Account* no *Azure*.

## Organizadores do Torneio
- [Altair](https://steamcommunity.com/profiles/76561198141521946/)
- [Fear](https://steamcommunity.com/profiles/76561198135872482/)
- [Lyon](https://steamcommunity.com/profiles/76561198076227103/)

## Links da Aplicação
A aplicação está hospedada e os códigos-fonte estão disponíveis nos links abaixo:

- Site do Torneio: https://torneio-l4d2.azurewebsites.net/
- Repositório do Front-end: https://github.com/altair-sossai/torneio-l4d2-front-end
- Repositório do Back-end: https://github.com/altair-sossai/torneio-l4d2-back-end

## Funcionalidades da Aplicação
A aplicação oferece os seguintes recursos:

- Recursos Administrativos:
  - Cadastro de jogadores via perfil da Steam.
  - Cadastro de equipes.
  - Associação dos jogadores às equipes.
  - Geração automática dos confrontos.
  - Cadastro dos resultados dos confrontos.
  
- Recursos Públicos:
  - Visualização da tabela geral de pontos.
  - Acompanhamento dos resultados dos confrontos.
  - Visualização das equipes e jogadores participantes.

## Capturas de Tela da Aplicação
- Tela administrativa para gerenciar os jogadores no torneio.<br/><br/>
![Cadastro dos jogadores](https://torneiol4d2.blob.core.windows.net/imgs/cadastro-jogadores.png)<br/><br/>

- Tela administrativa para gerenciar as equipes e seus jogadores.<br/><br/>
![Cadastro das equipes](https://torneiol4d2.blob.core.windows.net/imgs/cadastro-times.png)<br/><br/>

- Tela administrativa para gerenciar os confrontos entre as equipes, pontuação e penalidades.<br/><br/>
![Cadastro dos confrontos](https://torneiol4d2.blob.core.windows.net/imgs/cadastro-confrontos.png)<br/><br/>

- Tela pública para acompanhar os confrontos.<br/><br/>
![Visualização dos confrontos](https://torneiol4d2.blob.core.windows.net/imgs/visualizacao-confrontos.png)<br/><br/>

- Tela pública para acompanhar a pontuação geral do torneio.<br/><br/>
![Tabela de pontuação geral](https://torneiol4d2.blob.core.windows.net/imgs/tabela-pontos-gerais.png)<br/><br/>
