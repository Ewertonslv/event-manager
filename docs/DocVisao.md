# Documento de Visão

Documento construído a partir do do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no 
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Histórico de revisões

| Data       | Versão | Descrição                                                                                         | Autor          |
| ---------- | ------ | ------------------------------------------------------------------------------------------------- | -------------- |
| 23/06/2020 | 1.0    | Documento revisado.                                                                               | Kael           |
| 03/07/2020 | 1.1    | Documento revisado.                                                                               | Kael           |
| 11/07/2020 | 1.2    | Correção de tabela de riscos, perfis de usuário e atualização de lista de requisitos funcionais.  | Kael           |
| 23/07/2020 | 1.3    | Correção da lista de requisitos funcionais.                                                       | Ewerton Silva  | 



## Equipe e definição de papéis

| Equipe          | Papel                                      | E-mail                       |
| --------------- | ------------------------------------------ | ---------------------------- |
| Ewerton Silva   | Gerente, Desenvolvedor, Analista, Testador | ewertoncom297@gmail.com      |
| Eduardo Victor  | Gerente, Desenvolvedor, Analista, Testador | eduvictornobrega@gmail.com   |
| Arthur Medeiros | Gerente, Analista, Desenvolvedor, Testador | arthurmedeiros2005@gmail.com |
| Kael Silva      | Gerente, Desenvolvedor, Analista, Testador | kaelsilvaaraujo@gmail.com    |
| Clodoaldo Brito | Gerente, Desenvolvedor, Analista, Testador | clodoaldo.brtp4@gmail.com    |

## Matriz de competências


| Equipe          | Competências                                                                     |
| --------------- | -------------------------------------------------------------------------------- |
| Ewerton Silva   | Python, C, JavaScript, SQL
| Eduardo Victor  | Javascript, NodeJS, React, React-Native, Typescript, SQL, Mongo, PHP, CI, Docker |
| Arthur Medeiros | JavaScript, Node.js, React, React-Native
| Kael Silva      | JavaScript, Node.js, React, React-Native, TypeScript, SQL                        |
| Clodoaldo Brito | JavaScript, React, SQL, Ejs                                                      |


## Descrição geral do sistema

O sistema Event Manager é uma ferramenta para o processo de gerenciamento de
eventos. Fornece uma maneira intuitiva e eficiente para definir eventos adequados ao
público-alvo. Um evento é um acontecimento (festa, espetáculo, comemoração, solenidade
etc.) organizado por especialistas, com objetivos institucionais, comunitários ou
promocionais.

A ferramenta estará disponível para ser utilizada tanto por organizadores de evento
quanto para clientes que desejam participar do evento.
Utilizando a ferramenta, o usuário cliente poderá buscar eventos, adquirir ingressos e receber notificações sobre possíveis eventos que estão de acordo com o seu interesse ou proximidade da sua cidade.
Utilizando a ferramenta, o usuário organizador de eventos poderá cadastrar novos
eventos ou criar eventos a partir de outros já existentes. Além disso, poderá alterar, remover
e consultar eventos já criados. Tais eventos geraram relatórios para o seu organizador que
serão enviados via e-mail ou gerar um arquivo PDF que poderam ser visualizados sem utilizar
a ferramenta.

A ferramenta conterá também afiliação com outras empresas, como o PayPal, que
possibilitem a venda de ingressos pela ferramenta e garanta a confiabilidade e segurança
dos usuários com o sistema. O Event Manager contribui de modo decisivo para melhorar a
qualidade do processo de gerenciamento de eventos como plataforma virtual de uma
empresa.

## Lista de requisitos funcionais

|     Requisito                                             |  Descrição                                                                                                                                                                                            |  Ator
|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------
|  **RF01 - Manter usuário (genérico)**                     | Usuários têm como atributos: Login, Senha.                                                                                                                                                            | Usuário
|  **RF02 - Manter usuário (cliente)**                      | Usuários do tipo cliente têm como atributos: cpf, nome, e-mail, telefone, estado, cidade, login.                                                                                               | Cliente
|  **RF03 - Manter usuário (organizador)**                  | Usuários do tipo organizador têm como atributos: cnpj, nome, e-mail, telefone, login.                                                                                                  | Organizador
|  **RF04 - Manter evento**                                 | Eventos têm como atributos: codigo, nome, data, horario_inicio, Horario_fim, cod_atracao, cod_local, cod_empresa, cod_orcamento, cod_ingresso.                                                                            | Organizador
|  **RF05 - Cadastrar localização do evento**               | Eventos possuem localizações, e têm como atributos: codigo, local, rua, bairro, cidade, estado, cod_evento.                                                                                                                                                                         | Organizador
|  **RF06 - Consultar localização**                         | Clientes podem consultar a localização do evento desejado.                                                                                                                           | Cliente
|  **RF07 - Alterar localização**                         | Um organizador pode alterar o local do evento.                                                                                                                           | Organizador
|  **RF08 - Associar empresa**                              | O sistema contará com empresas associadas que se cadastraram na aplicação para fornecerem serviços a um evento.                                                                                       | Organizador
|  **RF09 - Manter empresa**                                | Empresa têm como atributos: cnpj, nome, serviço, telefone, e-mail.                                                                                                                                   | Organizador
|  **RF10 - Atribuir atrações a evento**                    | Eventos possuem atrações.                                                                                                                                                                             | Organizador
|  **RF11 - Manter atração**                                | Atrações têm como atributos: codigo, nome, telefone, e-mail, horario_inicio, horario_fim, descrição.                                                                                                                                          | Organizador
|  **RF12 - Manter orçamento**                              | Orçamentos têm como atributos: codigo, descriçao, ingressos_vendidos, valor_arrecadado, valor_investido, cod_evento, receita.                                                                                     | Organizador
|  **RF13 - Adquirir ingresso**                             | Ingressos podem ser adquiridos pelos clientes.                                                                                                                                                        | Cliente
|  **RF14 - Especificar tipo de ingresso**                  | Ingressos possuem tipos: Estudante, VIP, normal, entre outros. Por isso, é necessário a criação de uma entidade ingresso pertencente a evento.                                                       | Organizador
|  **RF15 - Manter ingresso**                               | Ingressos têm como atributos: codigo, tipo, valor, quantidade.                                                                                                                                        | Organizador
|  **RF16 - Manter ouvidoria**                              | Mensagem de ouvidoria tem como atributos: cod_mensagem, cod_usuario, mensagem.                                                                                                                        | Administrador
|  **RF17 - Manter tipo de ingresso**                       | Tipo_ingresso tem como atributos: cod_ingresso, cod_tipo.                                                                                                                                           | Organizador
|  **RF18 - Cadastrar mensagem na ouvidoria**               | A aplicação possuirá uma interface de ouvidoria na qual os clientes e organizadores podem realizar sugestões e/ou reclamações sobre o sistema.                                                        | Administrador
|  **RF19 - Notificar usuários**                            | A aplicação poderá enviar notificações sobre eventos por meio da localização do usuário caso o mesmo tenha permitido ser notificado, essa informação sobre a permissão constará no registro de status.| Administrador
|  **RF20 - Manter notícias**                               | A aplicação contará com uma central de notícias que exibirá informações referentes a todos os eventos.                                                                                    | Administrador
|  **RF21 - Consultar relatório**                            | Relatórios de eventos/atração podem ser consultados pelos organizadores, e têm como atributos: codigo, valor_investido, valor_arrecadado, cod_evento, receita.                                                                                                        | Organizador
|  **RF22 - Deletar relatório**                              | Um relatório poderá ser removido por um organizador.                                                                                                        | Organizador
|  **RF23 - Manter usuário membro da equipe organizadora**  | Membros da equipe organizadora têm como atributos: codigo, nome, cpf, nome, e-mail, telefone, estado, cidade.                                                                                         | Organizador
|  **RF24 - Associar membro da equipe a evento**            | O organizador é capaz de associar um membro da equipe organizadora a um evento.                                                                                                                       | Organizador

## Perfis dos usuários
O sistema poderá ser utilizado por diversos usuários . Temos os seguintes perfis:
|  Perfil                                     |                                                    Descrição                                                                                                                            |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  **Perfil Administrador**                   |  Este usuário possui todas as permissões disponíveis no sistema, buscando realizar operações que necessitem das mesmas, como por exemplo manutenção de registros de eventos no sistema. |
|  **Perfil Cliente**                         |  Este usuário visita o sistema a fim de obter ingressos para eventos, consultar eventos, insere informações sobre ele mesmo, consulta dados de atrações entre outras necessidades.      |
|  **Perfil Organizador**                     |  Este usuário poderá cadastrar novos eventos ou criar eventos a partir de outros já existentes. Além disso, poderá alterar, remover e consultar eventos já criados.                     |
|  **Perfil Membro da Equipe Organizadora**   |  Este usuário terá permissões de realizar ações no evento previamente definidas e concedidas pelo usuário organizador.                                                                  |

## Riscos
| Data       | Risco                                                       | Prioridade | Responsável | Status  | Providência/Solução                                                                                                                 |
| ---------- | ------------------------------------------------------------| ---------- | ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------|
| 23/06/2020 | Fragilidade na segurança do login do usuário.               | Média      | Todos       | Vigente | Utilização de bibliotecas/frameworks de transferência segura de dados e autenticação.                                               |
| 23/06/2020 | Vender de ingresso com quantidade disponível 0 (esgotada).  | Alta       | Todos       | Vigente | Garantir sincronia da aplicação na parte do usuário com o servidor.                                                                 |
| 23/06/2020 | Curto prazo para desenvolver o sistema.                     | Alta       | Todos       | Vigente | Realizar todas as tarefas solicitadas pelo gerente da iteração o mais rápido possível.                                              |
| 23/06/2020 | Falta de técnica de membros da equipe.                      | Média      | Todos       | Vigente | Estudar, praticar e buscar ajuda com membros da equipe mais experientes nas ferramentas utilizadas.                                 |
| 23/06/2020 | Acúmulo de tarefas não relacionadas ao projeto.             | Alta       | Todos       | Vigente | Buscar diminuir número de tarefas ou realizá-las o mais rápido possível, resultando em tempo disponível para dedicar-se ao projeto. |
