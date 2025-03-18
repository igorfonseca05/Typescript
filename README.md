# Seção 1 - Introdução

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

# Seção 2 - Fundamentos do Typescript

## Aula 20 - O que são tipos?

Como foi mostrado acima, a principal função so typescript é determinar tipos para os dados do nosso projeto, seja para uma variavel, array, objetos e assim por diante.

- Em TypeScript a principal função é **determinar tipos para os dados**; ✅
- Isso vai garantir a **qualidade do código**; 💡
- Além de fazer o TS nos **ajudar na hora do desenvolvimento**; 🛠️
- Ou seja, precisamos **definir corretamente o tipo** das variáveis, dos retornos das funções, das manipulações de dados; 📌
- Consequentemente, teremos um software melhor programado e é este o principal intuito do TS; 🎯

## Aula 21 - Tipos primitivos

Os tipos primitivos no typescript são os mais simples e são os mesmo do javascript

- **string** → Representa textos, ex: `"Hello, TypeScript"`
- **number** → Números inteiros e decimais, ex: `42` ou `3.14`
- **boolean** → Verdadeiro ou falso, ex: `true` ou `false`
- **null** → Representa ausência de valor
- **undefined** → Variável declarada sem valor atribuído
- **bigint** → Números inteiros muito grandes, ex: `9007199254740991n`
- **symbol** → Valores únicos e imutáveis

Todos eles devem ser escritos em letra **minuscula**

## Aula 23 - Conhecendo o _number_

- Garante que o tipo de um dado seja sempre um tipo number

```javascript
const age: number = 29;

console.log(age);
```

Se tentarmos usar algo como "29" o typescript vai lançar um error pq age só pode ser do tipo number.

## Aula 24 - Conhecendo o _string_

- Garante que o tipo de um dado seja sempre um tipo string

```javascript
const name: string = "Igor";

console.log(name);
```

Se tentarmos usar algo como **true** o typescript vai lançar um error pq **name** só pode ser do tipo string.

## Aula 25 - Conhecendo o **boolean**

- Garante que o tipo de um dado seja sempre um tipo string

```javascript
const adulto: boolean = true;

console.log(adulto);
```

Se tentarmos usar algo como **Igor** o typescript vai lançar um error pq _adulto_ só pode ser do tipo boolean.

## Aula 25 - TS e aplicação

- Talvez já tenha ficado claro, mas programar com TS é como um **pair programming** 👍;
- Temos sempre alguém para nos avisar se algo é **feito errado** ⚠️;
- Depois da compilação, **o TS não tem mais efeito**, ele não pode mais nos ajudar ❌;
- Por isso há **uma trava de compilação com erros** 🛑;
- Além de erros, o TS também proporciona **avisos** 🔔;

## Aula 26 - Type inference e Type annotation

São duas formas diferentes que podemos utilizar para podermos inferir tipo nas nossas variaveis. Por exemplo, o **Type annotation** é a forma cque utilizamos até aqui para podermos inferir tipo, nesse caso o `:`

```ts
const name: string = "Igor"; // Para inferir o tipo usamos o Type annotation(:)
```

Agora faremos a tipagem do mesmo exemplo acima usando o Type inference

```ts
const name = "Igor"; // Usando o Type inference
```

aqui o Typescript irá inferir o tipo da variável e manterá esse método durante toda criação do seu projeto.

## Aula 27 - Gerando arquivo de configuração

- O TS pode ser configurado de **muitas maneiras** 🔧;
- Mas para isso precisamos do **arquivo de configuração** 📄;
- Para criar ele utilizamos:
  ```sh
  tsc --init
  ```

## Aula 28 - Compilação automática

Para ativarmos o _watch mode_ do typescript, no terminal fazemos:

    tsc -w

agora toda vez que salvarmos nosso arquivo, ele será compilado automáticamente sem precisar fazer isso manualmente.

## Aula 28 - Conclusão da seção

# Seção 3 - Avançando em tipos
