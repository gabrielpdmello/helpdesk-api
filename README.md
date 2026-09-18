# API de Helpdesk
API back-end de um sistema de HelpDesk.

## Características
- As solicitações de suporte são registradas e acompanhadas desde sua abertura até a solução do problema. 
- O sistema permite registrar informações sobre os solicitantes, organizar os chamados por categoria, identificar os técnicos responsáveis pelo atendimento e acompanhar informações como descrição do problema, prioridade, situação do chamado e solução apresentada.

## Rotas atualmente implementadas

| Método | URI         | Descrição                    |
| ------ | ----------- | ---------------------------- |
| GET    | /categorias | Retorna todas as categorias. |
| GET    | /tecnicos   | Retorna todos os técnicos.   |

## Rodar API localmente
1. Clone esse repositório e entre nele
```bash
git clone https://github.com/gabrielpdmello/helpdesk-api.git
cd helpdesk-api
```
2. Instale as dependências
```bash
npm install
```
3. Crie um banco de dados MySQL / MariaDB usando os scripts .sql em [database/](./database/)
4. Copie o arquivo exemplo de variáveis de ambiente
```bash
cp .env.example .env
```
5. Atualize as variáveis de ambiente
6. Inicie a aplicação
```bash
npm run start
```
