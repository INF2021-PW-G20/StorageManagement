# Métodos implementados no projeto

{{baseUrl}}=>http://127.0.0.1:3000

## STORAGES

**GET** STORAGES
```bash
{{baseUrl}}/storages
```
Mostrar todos os locais de armazenamento.

<hr/>

**GET** NUMBER OF STORAGES
```bash
{{baseUrl}}/storages/count
```
Mostra o número de locais de armazenamento existentes.

<hr/>

**GET** STORAGES BY CORRIDOR
```bash
{{baseUrl}}/storages?filter={"where": {"corridor":{{corridorNumber}}}}
```
Mostra os locais de armazenamento existentes de um corredor específico.
{{corridorNumber}} => número do corredor a filtrar.

<hr/>

**GET** STORAGES BY SHELF
```bash
{{baseUrl}}/storages?filter={"where": {"corridor":{{corridorNumber}},"shelf":{{shelfNumber}}}}
```
Mostra os locais de armazenamento existentes de uma prateleira específica.
{{shelfNumber}} => número da prateleira a filtrar.
{{corridorNumber}} => número do corredor a filtrar.

<hr/>

**GET** STORAGES BY BOX
```bash
{{baseUrl}}/storages?filter={"where": {"corridor":{{corridorNumber}},"shelf":{{shelfNumber}}, "box":{{boxNumber}}}}}
```
Mostra os locais de armazenamento existentes de uma caixa específica.
{{shelfNumber}} => número da prateleira a filtrar.
{{corridorNumber}} => número do corredor a filtrar.
{{boxNumber}} => número da caixa a filtrar

<hr/>

**POST** STORAGE
```bash
{{baseUrl}}/storages
```
_body_
```JSON
{
    "corridor": 1,
    "shelf": 1,
    "box": 1,
    "name": "Excepteur sunt id nulla"
}
```
Inserir uma nova storage

<hr/>

### STORAGES/:ID

**GET** STORAGE BY ID
```bash
{{baseUrl}}/storages/:id
```
_params_
>id

![](/images/Storagebyid.png)

Mostrar uma storage pelo seu id.

<hr/>

**GET** PRODUCTS IN A STORAGE
```bash
{{baseUrl}}/storages/:id/productstorages
```
_params_
>id

![](/images/Storagebyid.png)

Mostrar os products numa determinada storage.

<hr/>

**PUT** STORAGE BY ID
```bash
{{baseUrl}}/storages/:id
```

_params_
>id

![](/images/Storagebyid.png)

```JSON
{
    "corridor": 1,
    "shelf": 1,
    "box": 1,
    "name": "Excepteur sunt id nulla"
}
```
Alterar uma storage específica a partir do id.

<hr/>

**PATCH** STORAGE BY ID
```bash
{{baseUrl}}/storages/:id
```

_params_
>id

![](/images/Storagebyid.png)

```JSON
{
    "corridor": 1,
    "shelf": 1,
    "box": 1,
    "name": "Excepteur sunt id nulla"
}
```
Alterar uma storage específica a partir do id.

<hr/>

**DEL** STORAGE BY ID
```bash
{{baseUrl}}/storages/:id
```

_params_
>id

Eliminar uma storage específica a partir do id.

<hr/>

## PRODUCTS

**GET** PRODUCTS
```bash
{{baseUrl}}/products
```
Mostrar todos os produtos.

<hr/>

**GET** NUMBER OF PRODUCTS
```bash
{{baseUrl}}/products/count
```
Mostrar o número de produtos.

<hr/>

**GET** PRODUCT BY TYPE
```bash
{{baseUrl}}/products?filter={"where":{"type":"{{productType}}"}}
```
Mostrar os produtos existentes de determinado tipo.
{{productType}} => tipo de produto a filtrar.

<hr/>

**GET** PRODUCTS BY MINIMUM PRICE
```bash
{{baseUrl}}/products?filter={"where": {"uprice":{"gte":{{minPrice}}}}}
```
Mostrar todos os produtos abaixo de um determinado valor.
{{minPrice}} => valor a filtrar.

<hr/>

**GET** PRODUCTS BY MAXIMUM PRICE
```bash
{{baseUrl}}/products?filter={"where": {"uprice":{"lte":{{maxPrice}}}}}
```
Mostrar todos os produtos acima de um determinado valor.
{{maxPrice}} => valor a filtrar.

<hr/>

**GET** PRODUCTS WITH LOW STOCK
```bash
{{baseUrl}}/products?filter={"where": {"stock":{"lte":1}}}
```
Mostrar todos os produtos com stock abaixo de 1.

<hr/>

**POST** PRODUCT
```bash
{{baseUrl}}/products
```
_body_
```JSON
{
    "name": "et aliquip ea non labore",
    "type": "exercitation id",
    "uprice": 100,
    "stock": 0
}
```
Inserir um novo produto.

<hr/>

### PRODUCTS/:ID

**GET** PRODUCT BY ID
```bash
{{baseUrl}}/product/:id
```
_params_
>id

![](/images/Storagebyid.png)

Mostrar um produto pelo seu id.

<hr/>

**PUT** PRODUCT BY ID
```bash
{{baseUrl}}/products/:id
```

_params_
>id

![](/images/Storagebyid.png)

```JSON
{
    "name": "et aliquip ea non labore",
    "type": "exercitation id",
    "uprice": 100,
    "stock": 0
}
```
Alterar um produto específico a partir do id.

<hr/>

**PATCH** PRODUCT BY ID
```bash
{{baseUrl}}/products/:id
```

_params_
>id

![](/images/Storagebyid.png)

```JSON
{
    "name": "et aliquip ea non labore",
    "type": "exercitation id",
    "uprice": 100,
    "stock": 0
}
```
Alterar um produto específico a partir do id.


**DEL** PRODUCT BY ID
```bash
{{baseUrl}}/products/:id
```

_params_
>id

Eliminar um produto específico a partir do id.

<hr/>

**GET** INPUTOUTPUTS BY PRODUCT
```bash
{{baseUrl}}/products/:id/inputoutputs
```
_params_
>id

![](/images/Storagebyid.png)

Mostrar os movimentos de um produto.

<hr/>

## PRODUCTSTORAGES

**GET** PRODUCTSTORAGES
```bash
{{baseUrl}}/productstorages
```

Mostrar todos os produtos e os seus locais de armazenamento.

<hr/>

## INPUTOUTPUTS

**GET** INPUTOUTPUTS
```bash
{{baseUrl}}/innputoutput
```

Mostrar todos os movimentos.

<hr/>

**GET** NUMBER OF INPUTOUTPUTS
```bash
{{baseUrl}}/innputoutput/count
```

Mostrar o número de movimentos.

<hr/>

**GET** INPUTOUTPUTS BY OPERATION
```bash
{{baseUrl}}/inputoutputs?filter={"where": {"operation":{{ioOperation}}}}
```
{{ioOperation}} => 0 - Saídas | 1 - Entradas

Mostrar todos os movimentos de entrada ou saída.

<hr/>

**POST** INPUTOUTPUTS
```bash
{{baseUrl}}/inputoutputs
```

```Json
{
    "date_time": "1978-04-17T20:10:17.973Z",
    "quantity": 1,
    "operation": 1,
    "storage_id": 1,
    "product_id": 1
}

```

Inserir movimento novo.

<hr/>

### INPUTOUTPUTS/:ID

**GET** INPUTOUTPUTS BY ID
```bash
{{baseUrl}}/inputoutputs/:id
```

_params_
>id

![](/images/Storagebyid.png)

Mostrar movimento através do seu id.

<hr/>

**PUT** INPUTOUTPUTS BY ID
```bash
{{baseUrl}}/inputoutputs/:id
```

```Json
{
    "date_time": "1978-04-17T20:10:17.973Z",
    "quantity": 1,
    "operation": 1,
    "storage_id": 1,
    "product_id": 1
}

```

_params_
>id
![](/images/Storagebyid.png)

Alterar movimento existente.

<hr/>

**PATCH** INPUTOUTPUTS BY ID
```bash
{{baseUrl}}/inputoutputs/:id
```

```Json
{
    "date_time": "1978-04-17T20:10:17.973Z",
    "quantity": 1,
    "operation": 1,
    "storage_id": 1,
    "product_id": 1
}

```

_params_
>id

![](/images/Storagebyid.png)

Alterar movimento existente.

<hr/>

**DEL** INPUTOUTPUTS
```bash
{{baseUrl}}/inputoutputs/:id
```

_params_
>id

![](/images/Storagebyid.png)

Eliminar movimento existente.

<hr/>