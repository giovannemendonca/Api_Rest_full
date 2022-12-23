# EXPRESS COM TYPESCRIPT

 
## inicia o node
* npm init -y

## inicia o typeScript

### cria o arquivo de cofiguração do typeScript
* tsc --init

## Dependencias
- config (configurações da aplicação)
- dotenv  (guardar as variaveis de ambiente)
- express
- express-validator (faz as validações)
- mongoose
- morgan (relatorios)
- winston (logs)

## Devs Depencias @types
- @types/config
- @types/express
- @types/mongoose
- @types/morgan
- @types/node
- ts-node-dev
- typescript


## Adicionando script

- "dev": "ts-node-dev --respawn --transpile-only src/app.ts"