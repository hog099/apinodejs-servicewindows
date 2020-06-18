#### API nodejs base para criação de um serviço no windows.


-- 

#### /src/server.js - Arquivo raiz para chamar app.js e definir porta.
#### /src/app.js - Classe onde se inicia o serviço, la pode ser importado o socketio para implementaçção
#### /src/routes.js - Rotas para api caso usar
#### /src/app/controllers - Controllers da aplicação
#### /src/app/models - Classes de tabelas
#### /src/app/middlwares - Classes de middlewares
#### /src/config =- Helpers de configurações como de banco, arquivos, auth etc
#### /src/database - Migrations, seeds e instanciação do banco e conexão com as models

#### /public - Pasta public para injeção de html e arquivos
#### /dist - Pasta de distribuição que é gerar apos rodar node build (utiliza sucrase para compilar assim podemos usar import/exports ao inves de reuire)
#### /.env - Variaveis de ambientes
#### /package.json - Info, dependencias e scripts de start e build
#### /procfile - arquivo da hospedagem heroku
#### /nodemon.json - Helper para rodar aplicação em modo desenvolvimento
#### /service.js - Arquivo para instalar serviço (node service.js)
#### /unistallservice.js - Arquivo para desinstalar serviço (node unistallservice.js)
#### /nodeprinter.bat - BAT de instalação e manutenção do serviço, ajustar e configurar


-- 

### Sobre o comando node service.js
#### Definir um pasta para o build e jogar a pasta dist e o arquivo bat
#### Ao rodar node service.js (antes rodar o build - node build) criará uma pasta daemon com o serviço em si e já o instalará, no arquivo e definido o caminho aonde foi colocado a pasta dist, esta pasta pode ficar no C: , arquivos de programas, etc ao seu critério, posteririormente so definir para serviço iniciar com windows e outros detalhes.
#### Observar se serviço esta se mantendo iniciado, senão no arquivo App.js deve ter algo quebrando.


-- 


### Comandos CMD uteis
#### SC START nomeservico - Inicia um servico
#### SC DELETE nomeservico - Deleta um servico


