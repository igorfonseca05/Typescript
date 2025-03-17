# Seção 1 - Tipagem

TypeScript é uma linguagem de programação de alto nível, livre e de código aberto, desenvolvida pela Microsoft que adiciona tipagem estática com anotações de tipo opcionais ao JavaScript.

## Inferindo tipos básicos no typescript

```javascript
const nome: string = "igor";
const idade: number = 29;
const adulto: boolean = true;
const simbolo: symbol = Symbol("qualquer symbol");
```

Para os tipos de dados passados por referencia(arrays e objetos) vamos fazer:

**1. Arrays**

```javascript
// As tipagens abaixo são identicas, só muda a forma como são feitas.
let ages: Array<number> = [2, 3, 4];
let ages2: number[] = [2, 3, 4];
```

**2. Objects**

```javascript
// As tipagens abaixo são identicas, só muda a forma como são feitas.

const user: {
  name: string,
  email: string,
  password: string,
} = {
  name: "igor",
  email: "igorfondev@gmail.com",
  password: "123456",
};
```

**3. Funções**

```javascript
function sum(x: number, y: number): number {
  return x + y;
}

const soma: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

interface Soma {
  (x: number, y: number): number;
}

const soma2: Soma = (x, y) => {
  return x + y;
};
```

## Aula 2 - Tipo _Any_

O problema de se manter o _any_ como tipo de uma variavel no ts é que com o any nós podemos fazer qualquer tipo de operação com a variável, uma vez que o ts não tipa o _any_, o que claramente pode trazer problemas para dentro do código, ou seja:

:warning: NUNCA DEIXE NENHUMA VARIÁVEL COMO ANY NO SEU CÓDIGO

Uma outra dica dada nessa aula é:

✅: Só tipe a variável se o typeScript reclamar por falta de tipagem

## Aula 3 - Tipo _Void_

É a tipagem que fazemos quando queremos que um método e função no ts não retorne nada.

#### Função

```javascript
function sum(...arg: strings[]): void {
  console.log(args.join(" "));
}
```

#### Métodos

```javascript
const pessoa = {
  nome: "igor",
  sobrenome: "Fonseca",

  getFullName: function (): void {
    console.log(this.nome + "" + this.sobrenome);
  },
};
```

Nos exemplos acima não há retorno nenhum e com o uso do void o typescript não lança um erro devido a tipagem.

## Aula 4 - Tipo Object(Objetos em geral)

Nessa aula vamos aprender como podemos tipar objetos dentro do typescript

```javascript

```
