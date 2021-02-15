## Bem vindo ao challenge-encurtador-backend!

Serviço de encurtador de url.
[Documentação](https://documenter.getpostman.com/view/2898019/TWDTLyE8)

### Instruções
Para executar a aplicação é necessário os seguintes passos:
- Criar um arquivo `.env` no mesmo padrão do `example.env` do projeto.
- Executar o `npm install` ou `yarn` para instalar as dependências de desenvolvimento.
- Executar o comando `make up` ou `docker-compose up -d` para subir os containers docker da aplicação.
- Sistema pronto para ser usado via docker.

#### Comandos
comandos utlizados no serviço. Executar com `yarn` ou `npm run`
- `yarn start` - Inicia o servidor.
- `yarn dev:server` - inicia o servidor em desenvolvimento.
- `yarn build` - cria o build do projeto.
- `yarn typeorm` - comando referente ao typeorm.cli
- `yarn typeorm migration:run` - Criar/atualizar as entidade e arquitetura das tabelas da base de dados.
- `yarn typeorm migration:revert` - Deletar/desfazer entidade e arquitetura das tabelas da base de dados.
- `yarn test` - Executar os testes da aplicação.

#### Tecnologias utilizadas
- [nodejs](https://nodejs.org/en/)
- [postgres](https://www.postgresql.org/)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

#### Frameworks utilizados
- [typeORM](https://typeorm.io/#/)
- [express](https://www.npmjs.com/package/express)
- [jest](https://jestjs.io/docs/en/getting-started)

#### Observações
- Verificar se o `.env` está correto no arquivo.
- Verificar se a porta 8081 e 5432 estão livres para execução. Pois a 8081 é a porta da aplicação e a 5432 é a base de dados. Caso deseje mudar. Alterar o `.env`