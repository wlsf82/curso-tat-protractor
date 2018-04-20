# INSTALAÇÃO DO MONGODB

Iremos utilizar o MongoDB como banco de dados da aplicação exemplo deste curso. Ao final deste artigo você deve ser capaz de rodar o MongoDB em seu computador, em ambiente Mac ou Windows.

> Caso seu computador notificar sobre permissões de fireweall, você de permitir.

## Instalacão no Mac OS X

Abra uma nova sessão do terminal.
Verifique se o Homebrew já está instalado em seu computador (Homebriew é o software que o computador utiliza para instalar outros aplicativos via linha de comando). Iremos utilizá-lo para instalar o MongoDB.

Execute o comando abaixo para verificar a versão do Homebrew:

`$ brew -v`

- Se o computador não possuir o Homebrew instalado ele irá responder uma uma mensagem de `command not found`.
- Instalação do Homebrew - Cole o comando de instalação do Homebrew conforme descrito nesta [página](https://brew.sh/). Digite a senha caso solicitado e aguarde pelo final da instalação.
- Instalação do MongoDB - Cole o seguinte comando no terminal e execute: `brew install mongodb`

Crie um diretório para os dados do MonboDB - Este diretório é onde o MongoDB irá gravar os arquivos do banco de dados para a aplicação exemplo.

Cole o seguinte comando e execute no terminal: `mkdir -p ~/data/db`

> Este comando irá criar o diretório em seu diretório principal.

Para iniciar o processo Mongo execute o seguinte comando: `mongod --dbpath ~/data/db`

> É necessário que o banco de dados já esteja rodando para inicializar a aplicação exemplo que será utilizada durante o curso.

> Caso seja solicitado que a aplicação mongod aceite conexões com a rede, escolha que aceita.

Se o Mongo inicializar corretamente você deve ver uma mensagem como:

`connection accepted from ... #1 (1 connection now open)`

> Para finalizar o processo Mongo basta precionar CTRL+C na janela do terminal onde ele estiver rodando.

## Instalação no Windows

Download - Abra a [página de downloads do MongoDB](https://www.mongodb.com/download-center) e baixe o versão mais atual do "Commiunity Server" para Windows.

Instalação - Abra o arquivo de instalação e siga os passos para instalação.

Crie um diretório para os dados do MonboDB - Este diretório é onde o MongoDB irá gravar os arquivos do banco de dados para a aplicação exemplo.

Abra o powershell, cole e execute o seguinte comando: `md \data\db`

Para iniciar o processo Mongo execute o seguinte comando: `& 'C:\Program Files\MongoDB\Server\X.X\bin\mongod.exe'` (Substitua X.X com a versão que você baixou).

Se o Mongo inicializar corretamente você deve ver uma mensagem como:

`connection accepted from ... #1 (1 connection now open)`

> Para finalizar o processo Mongo basta precionar CTRL+C na janela do terminal onde ele estiver rodando.
