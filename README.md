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

## Aula 31 - Arrays

Essa é a sintax mais utilizada para definir arrays no ts

```javascript
const numbers: number[] = [1, 2, 3, 4];

console.log(numbers);

const nomes: string[] = ["igor", "fonseca"];

console.log(nomes);
```

## Aula 32 -Outra sintax para array

A sintax abaixo é menos utilizada, porém é importante ser conhecida

```javascript
const num: Array<number> = [1, 2, 3, 4];

console.log(num);
```

## 33- O tipo any

Esse é tipo que satisfaz qualquer tipo no ts, devemos evitar ao máximo usar essa tipagem porque foge completamente do que buscamos fazer com o typescript.

```javascript

```

## 34. Tipo de Parâmetro

O tipo de parâmetro define qual tipo de dado uma função pode receber como argumento. Isso ajuda a evitar erros, garantindo que apenas valores esperados sejam passados para a função.

### Exemplo:

```ts
function showMessage(message: string) {
  console.log(message);
}

showMessage("Olá, TypeScript!"); // Correto
showMessage(123); // Erro: número não é string
```

## 35- Tipo de retorno

O tipo de retorno define qual tipo de valor a função deve devolver. Se o retorno não corresponder ao tipo esperado, o TypeScript exibirá um erro.

### Exemplo:

```ts
function sum(a: number, b: number): number {
  return a + b;
}

const resultado = sum(5, 10); // Correto, retorna um número
```

Se uma função não retornar nada, o TypeScript usa o tipo void:

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

## 36- Funções anônimas

Funções anônimas são aquelas sem um nome explícito, geralmente usadas como expressões de função ou em callbacks.

```ts
const multiply = function (a: number, b: number): number {
  return a * b;
};

console.log(multiply(4, 5)); // Retorna 20
```

Exemplo de função anônima com arrow function:

```ts
const divide = (a: number, b: number): number => a / b;

console.log(divide(10, 2)); // Retorna 5
```

## 37. Tipos de Objetos

Em TypeScript, podemos definir o tipo de um objeto especificando suas propriedades e seus respectivos tipos. Isso garante que o objeto sempre siga a estrutura esperada.

### 📌 Definição básica de um objeto

```ts
const user: { name: string; age: number } = {
  name: "Igor",
  age: 29,
};

console.log(user.name); // Igor
console.log(user.age); // 29
```

Um outro exemplo seria o de usar objetos como parametros de funções

```ts
function passCoordinates(coord: {x: number, y: number}) {
  console.log(x,y)
}

passCoordinate({1,2})  ✅
passCoordinate('oi')  ❌
```

## 38. Propriedades Opcionais

Em TypeScript, podemos definir propriedades opcionais em um objeto usando `?`. Isso significa que a propriedade **pode ou não estar presente**, sem causar erros.

---

### 📌 Definição de uma propriedade opcional

```ts
type User = {
  name: string;
  age: number;
  email?: string; // O '?' torna essa propriedade opcional
};

const user1: User = {
  name: "Ana",
  age: 25,
}; // ✅ Válido, pois 'email' é opcional

const user2: User = {
  name: "Carlos",
  age: 30,
  email: "carlos@email.com",
}; // ✅ Também válido
```

## 39- Validação de parâmetro opcional

Precisamos validar esses campos porque quando usamos o argumento opcional o typescrit não se responsabiliza mais pelo que ocorre dentro do nosso código.

```js
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    // aqui não verifacamos o tipo e sim se ele foi enviado
    return console.log(`Olá ${firstName} ${lastName}, tudo bem?`);
  }

  return `Olá, ${firstName}, tudo bem?`;
}
```

## 40- Union type

O Union type é uma alternativa melhor do que o any, onde podemos determinar dois tipos para um dado

a sintax é:

    number | string

abaixo mostramos um exemplo

```ts
function balance(balance: string | number) {
  console.log(`Seu extrato é: ${balance}`);
}

const arrDiverso number | string = ['igor', 29]
```

## 41- Avançando em Union types

Podemos utilizar condicionais para validação do tipo de union types e usar o `typeof` para poder analisar o tipo de dado.

```ts
function showUserRole(role: boolean | string) {
  if (typeof role === "Boolean") {
    return "Usuário não aprovado";
  }

  return `A função do usuário é: ${admin}`;
}
```

Na função acima existe a verificação se o usuário é admin ou não, não existe true, somente false e "admin".

## 42- Type alias

É uma forma de renomear uma sentença do typescript

```ts
type UserId = string | ObjectId;

function getUserId(id: UserId) {
  console.log(`Bem vindo, seu id é ${id}`);
}
```

## 43- Introdução às Interfaces

Interface no typescript é uma outra forma de nomear tipo de objetos no ts. Além de nomear podemos também escolher quais propriedades e seus tipos

```ts
interface Point {
  x: number;
  y: number;
  z: number;
}

function coord(coordinates: Point) {
  console.log(
    `As coordenadas do ponto são X: ${coordinates.x}, Y: ${coordinates.y}, Z:${coordinates.y}`
  );
}

coord(x: 25, y: 45: z: 69)
```

## 44- Type alias x Interface

Não existe diferenças significativas entre ambas, a única diferença de fato é que a interface pode ser alterada durante o código enquanto o type alias não pode.

### Interface

```ts
interface Person {
  name: string;
}

// Pode ser modificada ✅
interface Person {
  age: number;
}

const person: Person = { name: "Matheus", age: 30 };

console.log(person);
```

### Type Alias

```ts
type Person = {
  name: string
}

❌ // aqui o ts lançaria um erro, pois não é possível reescrever o type
 type Person = {
  age: number
}

const person : Person = {name: 'Matheus', age: 30}

console.log(person)
```

## 45- Literal Types

Literal Types no TypeScript são tipos que representam valores específicos e imutáveis. Em vez de um tipo genérico (como string ou number), um literal type restringe o valor a um conjunto específico.

```ts
let status: "success" | "error"; // Só pode ser "success" ou "error"
status = "success"; // válido
status = "failure"; // erro, "failure" não é um valor permitido

let level: 1 | 2 | 3; // Só pode ser 1, 2 ou 3
level = 2; // válido
level = 4; // erro, 4 não é um valor permitido

let isActive: true; // Só pode ser true
isActive = false; // erro, não é permitido
```

Uso com funções

```ts
function logStatus(status: "active" | "inactive"): void {
  console.log(status);
}

logStatus("active"); // válido
logStatus("inactive"); // válido
logStatus("pending"); // erro, "pending" não é permitido
```

## 46- Non null assertion operator

O Non-null Assertion Operator (!) no TypeScript é usado para indicar que uma variável ou expressão não pode ser null ou undefined, mesmo que o compilador do TypeScript não consiga garantir isso. Ou seja, ele força o TypeScript a tratar o valor como não nulo, ignorando a verificação de nulidade.

**Exemplo comum:** Quando você está acessando elementos do DOM ou lidando com valores que você sabe que sempre estarão presentes após um certo ponto do código.

### Sintaxe

```ts
valor!; // A expressão valor não será null ou undefined
```

### Exemplo

```ts
let nome: string | null = "João";

// Usando o operador de asserção
console.log(nome!.toUpperCase()); // Aqui, garantimos que 'nome' não é null, então podemos chamar toUpperCase sem erro
```

## 47- BigInt

## 48- Symbol

# Seção 4. Narrowing

## 53. O que é narrowing?

Narrowing no TypeScript é o processo de reduzir um tipo mais amplo para um tipo mais específico dentro de um bloco de código. Isso é útil para que o TypeScript possa entender melhor quais operações são seguras de executar em uma variável.

## 54. typeof Type Guard

Usamos o typeof para aplicar a tecnica que chamamos de Type Guard, que ajuda o TypeScript a saber se valor é `string` ou `number`, permitindo métodos específicos de cada tipo. Veja o exemplo abaixo:

```ts
function getData(data: string | number): void {
  if (typeof data === "string") {
    console.log("Seu nome é " + " " + data);
  } else {
    console.log(`Sua idade é ${data}`);
  }
}

getData("Igor");
getData(29);
```

## 56. Operador instanceof

Verifica se um objeto é de uma determinada classe:

```ts
class User {
  name;
  age;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

class FullUser extends User {
  email;
  constructor(name: string, age: number, email: string) {
    super(name, age);
    this.email = email;
  }
}

function getUser(user: object) {
  // Aqui temos um outro tipo de nawworing
  if (user instanceof User) {
    console.log("É instancia", user);
  } else if (user instanceof FullUser) {
    console.log(`Bem vindo ${user.name}`);
  }
}

const firstUser = new User("igor", 29);
const superUser = new FullUser("igor", 29, "igorfondev@gmail.com");

// getUser(firstUser)
getUser(superUser);
```

## 57. Operador in

Verifica se uma propriedade existe em um objeto:

```ts
type Carro = { rodas: number; acelerar: () => void };
type Barco = { velas: number; navegar: () => void };

function mover(veiculo: Carro | Barco) {
  if ("rodas" in veiculo) {
    veiculo.acelerar();
  } else {
    veiculo.navegar();
  }
}
```
