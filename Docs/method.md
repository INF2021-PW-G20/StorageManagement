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
```JSON
{
    "corridor": 29599195.792699322,
    "shelf": -55710077.04655448,
    "box": 39953130.833701074,
    "name": "Excepteur sunt id nulla"
}

```
Mostra os locais de armazenamento existentes de uma caixa específica.


<hr/>

## PRODUCTS

## PRODUCTSTORAGES

## INPUTOUTPUTS


Inserir produto
```bash
URL
```
Text example

