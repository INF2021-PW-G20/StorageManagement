# Storage Management

Repositório criado para alojar o código fonte do projeto realizado no âmbito da disciplica de programação web, [Instituto Superior da Maia](https://www.ismai.pt/pt).

## Breve descrição do tema

O âmbito deste tema engloba a utilização de uma aplicação de apoio a manutenções de máquinas industriais, onde poderão ser armazenadas peças de substituição numa caixa, pertencente a uma prateleira, localizada num determinado corredor. Quando forem retiradas ou adicionadas peças a este armazém, deverá ser feito um registo das alterações de stock, mantendo um histórico de transações do mesmo. Com a estrutura - criada em OpenAPI 3.0 - deverá ser possível executar alguns os métodos baseados numa arquitetura de serviços do tipo REST (GET, POST, PUT, DELETE, PATCH,…).

## Organização do repositório

_Projeto constituido pelos seguinte repostórios principais_
* **Código fonte** => [StorageManagement](https://github.com/INF2021-PW-G20/StorageManagement).
* **Documentação** => [Docs](https://github.com/INF2021-PW-G20/StorageManagement/Docs).

## Modelo conceptual

![](/images/Concept_diagram.png)

## Tecnologias

_Tecnologias utilizadas neste projeto._
* HTML5 + CSS3
* Javascript
* JSON
* MariaDB
* nodeJS

### _Frameworks_ & _Libraries_

_As Frameworks & Libraries utilizadas neste projeto foram as seguintes._
* Loopback4
* React
* NodeJS
* Bootstrap

## Relatório
_O projeto está dividido nos seguintes capítulos._

### Como executar o projeto

#### Clonar repositório
```bash

    git clone https://github.com/INF2021-PW-G20/StorageManagement

```

#### Importar Base de Dados

[BD](https://github.com/INF2021-PW-G20/StorageManagement/tree/master/Docs/BDscripts)

#### Iniciar Backend
> 
```bash
    cd ./PW_M2_P2/Backend/sm
```
```bash

    npm install

```
```bash

    npm start

```

##### Aceder ao link

```bash
    http://127.0.0.1:3000
```

#### Iniciar Frontend
> 
```bash
    cd ./PW_M2_P2/Frontend/storage_management
```
```bash

    npm install

```
```bash

    npm start

```
##### Aceder ao link

```bash
    http://127.0.0.1:3006
```

### Métodos do projeto
* [Métodos](Docs/method.md)

### W3C VALIDATOR
* [Resultado](Docs/W3CValidator/)

### Árvore do site

* Dashboard
* Storages
    - Create, Show, Edit, Delete
* Products
    - Create, Show, Edit, Delete
* Input/outputs
    - Create, Show, Edit, Delete
* ProductsStorages
    - Show


### Aplicação

_DASHBOARD_
![](/images/dashboard.png)

_STORAGES LIST_
![](/images/storages.png)

_STORAGES / PRODUCT RELATION_
![](/images/storages_products.png)

_PRODUCT LIST_
![](/images/products.png)

_INPUT/OUTPUT LIST_
![](/images/inputoutput.png)

_INPUT/OUTPUT CREATE_
![](/images/inputoutputcreate.png)

_PRODUCT STORAGE LIST_
![](/images/productsstorages.png)


_EXEMPLO RESPONSIVIDADE_
_DASHBOARD_
![](/images/resp1.png)

_TABELAS_
![](/images/resp2.png)




## Equipa de desenvolvimento
* João Afonso - [@Jafonso55](https://github.com/Jafonso55)
* João Osório - [@jlsOsorio](https://github.com/jlsOsorio)
* Pedro Moreira - [@a108537](https://github.com/a108537)

## Licença de utilização
* **Termos de uso** disponíveis em [MIT](LICENSE).