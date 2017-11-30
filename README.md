## Requisitos

* PHP >= 7.0

*Descomentar as linhas abaixo no arquivo "php.ini":*
  extension=php_openssl.dll
  extension=php_pdo_pgsql.dll
  extension=php_mbstring.dll

* Composer

* PostgreSQL

## Desenvolvimento 

O desenvolvimento foi feito em duas etapas, no backend foi desenvolvido uma API em PHP utilizando o framework [Lumen](https://lumen.laravel.com/).
Já no front-end foi utilizado HTML, CSS, JS e o framework [Bootstrap](https://getbootstrap.com/), utilizando AJAX para consumir a API.

## Instalação

  git clone https://olatiferreira@bitbucket.org/olatiferreira/sikoni.git
*Clona o repositório para a máquina.*

  cd sikoni/
*Acessa a pasta raiz do projeto.*

  composer install
*Donwload das dependências do projeto.*

* Criar do banco de dados, as tabelas e inserir do usuário (para acessar o sistema).
Obs.: Os scripts estão dentro do arquivo "DB.sql" na pasta raiz do projeto.

* Criar o arquivo ".env" na pasta raiz do projeto seguindo as configurações do arquivo ".env.example", modificando apenas a porta, nome do banco, nome de usuário e senha, conforme seu banco de dados.

## Inicializando o servidor

Na pasta raiz do projeto, entre com o comando abaixo:

  php -S localhost:8000 -t public

**Acesse o projeto:**
  
  http://localhost:8000/web/
*Tela de login do sistema.*

## Contato

* [Ítalo Ferreira](http://www.olatiferreira.com)