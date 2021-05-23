# Métodos implementados no projeto

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

![](/images/Storagebyid.png)

Mostrar as storages para um id específico.

<hr/>


## PRODUCTS

## PRODUCTSTORAGES

## INPUTOUTPUTS


Inserir produto
```bash
URL
```
Text example

