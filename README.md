![ty](https://github.com/user-attachments/assets/b4234b87-a62e-42dd-ae77-10a391ab1833)

# Seção 1 - Introdução

TypeScript é uma linguagem de programação de alto nível, livre e de código aberto, desenvolvida pela Microsoft que adiciona tipagem estática com anotações de tipo opcionais ao JavaScript.

## Inferindo tipos básicos no typescript

```javascript
const nome: string = "igor";
const idade: number = 29;
const adulto: boolean = true;
const simbolo: symbol = Symbol("qualquer symbol");
```

Para os tipos de dados passados por referencia(arrays e objetos) vamos faze:

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

### Aula 2 - Tipo _Any_

O problema de se manter o _any_ como tipo de uma variavel no ts é que com o any nós podemos fazer qualquer tipo de operação com a variável, uma vez que o ts não tipa o _any_, o que claramente pode trazer problemas para dentro do código, ou seja:

:warning: NUNCA DEIXE NENHUMA VARIÁVEL COMO ANY NO SEU CÓDIGO

Uma outra dica dada nessa aula é:

✅: Só tipe a variável se o typeScript reclamar por falta de tipagem

### Aula 3 - Tipo _Void_

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

### Aula 4 - Tipo Object(Objetos em geral)

Nessa aula vamos aprender como podemos tipar objetos dentro do typescript

```javascript

```

# Seção 2 - Fundamentos do Typescript

### 20 - O que são tipos?

Como foi mostrado acima, a principal função so typescript é determinar tipos para os dados do nosso projeto, seja para uma variavel, array, objetos e assim por diante.

- Em TypeScript a principal função é **determinar tipos para os dados**; ✅
- Isso vai garantir a **qualidade do código**; 💡
- Além de fazer o TS nos **ajudar na hora do desenvolvimento**; 🛠️
- Ou seja, precisamos **definir corretamente o tipo** das variáveis, dos retornos das funções, das manipulações de dados; 📌
- Consequentemente, teremos um software melhor programado e é este o principal intuito do TS; 🎯

### 21 - Tipos primitivos

Os tipos primitivos no typescript são os mais simples e são os mesmo do javascript

- **string** → Representa textos, ex: `"Hello, TypeScript"`
- **number** → Números inteiros e decimais, ex: `42` ou `3.14`
- **boolean** → Verdadeiro ou falso, ex: `true` ou `false`
- **null** → Representa ausência de valor
- **undefined** → Variável declarada sem valor atribuído
- **bigint** → Números inteiros muito grandes, ex: `9007199254740991n`
- **symbol** → Valores únicos e imutáveis

Todos eles devem ser escritos em letra **minuscula**

### 23 - Conhecendo o _number_

- Garante que o tipo de um dado seja sempre um tipo number

```javascript
const age: number = 29;

console.log(age);
```

Se tentarmos usar algo como "29" o typescript vai lançar um error pq age só pode ser do tipo number.

### 24 - Conhecendo o _string_

- Garante que o tipo de um dado seja sempre um tipo string

```javascript
const name: string = "Igor";

console.log(name);
```

Se tentarmos usar algo como **true** o typescript vai lançar um error pq **name** só pode ser do tipo string.

### 25 - Conhecendo o **boolean**

- Garante que o tipo de um dado seja sempre um tipo string

```javascript
const adulto: boolean = true;

console.log(adulto);
```

Se tentarmos usar algo como **Igor** o typescript vai lançar um error pq _adulto_ só pode ser do tipo boolean.

### 25 - TS e aplicação

- Talvez já tenha ficado claro, mas programar com TS é como um **pair programming** 👍;
- Temos sempre alguém para nos avisar se algo é **feito errado** ⚠️;
- Depois da compilação, **o TS não tem mais efeito**, ele não pode mais nos ajudar ❌;
- Por isso há **uma trava de compilação com erros** 🛑;
- Além de erros, o TS também proporciona **avisos** 🔔;

### 26 - Type inference e Type annotation

São duas formas diferentes que podemos utilizar para podermos inferir tipo nas nossas variaveis. Por exemplo, o **Type annotation** é a forma cque utilizamos até aqui para podermos inferir tipo, nesse caso o `:`

```ts
const name: string = "Igor"; // Para inferir o tipo usamos o Type annotation(:)
```

Agora faremos a tipagem do mesmo exemplo acima usando o Type inference

```ts
const name = "Igor"; // Usando o Type inference
```

aqui o Typescript irá inferir o tipo da variável e manterá esse método durante toda criação do seu projeto.

### 27 - Gerando arquivo de configuração

- O TS pode ser configurado de **muitas maneiras** 🔧;
- Mas para isso precisamos do **arquivo de configuração** 📄;
- Para criar ele utilizamos:
  ```sh
  tsc --init
  ```

### 28 - Compilação automática

Para ativarmos o _watch mode_ do typescript, no terminal fazemos:

    tsc -w

agora toda vez que salvarmos nosso arquivo, ele será compilado automáticamente sem precisar fazer isso manualmente.

### 28 - Conclusão da seção

# Seção 3 - Avançando em tipos

### 31 - Arrays

Essa é a sintax mais utilizada para definir arrays no ts

```javascript
const numbers: number[] = [1, 2, 3, 4];

console.log(numbers);

const nomes: string[] = ["igor", "fonseca"];

console.log(nomes);
```

### 32 - Outra sintax para array

A sintax abaixo é menos utilizada, porém é importante ser conhecida

```javascript
const num: Array<number> = [1, 2, 3, 4];

console.log(num);
```

### 33 - O tipo any

Esse é tipo que satisfaz qualquer tipo no ts, devemos evitar ao máximo usar essa tipagem porque foge completamente do que buscamos fazer com o typescript.

```javascript
const arr1: any = [1, "igor", true, ["igor", 4]];
```

### 34 - Tipo de Parâmetro

O tipo de parâmetro define qual tipo de dado uma função pode receber como argumento. Isso ajuda a evitar erros, garantindo que apenas valores esperados sejam passados para a função.

### Exemplo:

```ts
function showMessage(message: string) {
  console.log(message);
}

showMessage("Olá, TypeScript!"); // Correto
showMessage(123); // Erro: número não é string
```

## 35 - Tipo de retorno

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

## 36 - Funções anônimas

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

## 37 - Tipos de Objetos

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

## 38 - Propriedades Opcionais

Em TypeScript, podemos definir propriedades opcionais em um objeto usando `?`. Isso significa que a propriedade **pode ou não estar presente**, sem causar erros.

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

bigint é usado para representar números inteiros muito grandes, que excedem o limite de number (que é 2^53 - 1).

```ts
const big1: bigint = 9007199254740991n;
const big2: bigint = BigInt("9007199254740992");

const result = big1 + big2;
console.log(result); // 18014398509481983n
```

⚠️ Observações:

- Você pode usar o sufixo n ou o construtor BigInt().

- bigint não pode ser misturado com number diretamente.

```ts
const normalNumber = 10;
// const wrong = big1 + normalNumber // ❌ Erro
```

## 48- Symbol

Symbol é um tipo primitivo único e imutável, usado como identificadores exclusivos, mesmo que tenham a mesma descrição.

```ts
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false — são únicos
```

Usando como chave de objeto:

```ts
const id = Symbol("userId");

const user = {
  name: "Igor",
  [id]: 12345,
};

console.log(user[id]); // 12345
```

Vantagens:

- Evita colisões de nomes em objetos.

- Muito usado em bibliotecas/ferramentas internas (ex: no React, com $$typeof internamente).

# Seção 4. Narrowing

### 53. O que é narrowing?

Narrowing no TypeScript é o processo de reduzir um tipo mais amplo para um tipo mais específico dentro de um bloco de código. Isso é útil para que o TypeScript possa entender melhor quais operações são seguras de executar em uma variável.

### 54. typeof Type Guard

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

### 56. Operador instanceof

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

### 57. Operador in

Verifica se uma propriedade existe em um objeto

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

# Seção 5 - Funções com Typescript

Este documento é um resumo comentado sobre funções em TypeScript, com foco em boas práticas e recursos do idioma como generics, parâmetros opcionais, callbacks e mais.

### 61. Funções sem retorno (`void`)

Em TypeScript, quando uma função não retorna nenhum valor, usamos o tipo `void`.

```ts
function showName(nome: string): void {
  console.log(nome);
}

showName("Igor");
```

---

### 62. Callback functions

Uma função **callback** é uma função passada como argumento para outra função, para ser executada depois de algum processo.

### ✅ Exemplo com callback que soma dois números:

```ts
function showName(
  callback: (num1: number, num2: number) => void,
  num: number,
  num2: number
) {
  callback(num, num2);
}

showName(
  (num1, num2) => {
    console.log(num1 + num2);
  },
  2,
  3
);
```

---

### 63. Funções genéricas (Generics)

Funções genéricas permitem que você escreva funções reutilizáveis que funcionam com diferentes tipos de dados.

```ts
function nome<T>(dados: T): T {
  return {
    ...dados,
  };
}

const myData = nome("oi");
console.log(myData);
```

---

### 63. Constraints em Generics

Podemos restringir os tipos aceitos por um generic usando `extends`. Isso é útil para garantir que os valores tenham certas propriedades ou tipos.

```ts
function sum<T extends number | string>(num: T, num2: T): T {
  // Exemplo omitido: implementação dependeria do tipo
}
```

---

### 64. Especificar tipos de argumentos com Generics

Você pode especificar explicitamente o tipo ao chamar a função:

```ts
function mergeArray<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

console.log(mergeArray([1, 2, 3], [4, 5, 6]));
console.log(mergeArray<number | string>([1, 2, 3], ["ana"]));
```

---

### 64. Parâmetros opcionais

Você pode definir parâmetros como opcionais usando `?`.

```ts
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${name} ${greet}, tudo bem?`;
  }
  return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("Igor"));
```

---

### 64. Parâmetros com valor default

É possível definir valores padrão para parâmetros.

```ts
function somaDefault(num1: number, num = 10) {
  console.log(num1 + num);
}

somaDefault(1); // Output: 11
```

---

### 65. Tipo `unknown`

O tipo `unknown` é mais seguro do que `any`, pois exige validação antes do uso.

```ts
function doSomething(x: unknown) {
  console.log(x);
}
```

---

### 69. Rest Operator

O operador `...` permite passar múltiplos argumentos como um array.

```ts
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => number + sum);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
```

---

📌 **Resumo**: Estes exemplos cobrem funcionalidades essenciais de TypeScript relacionadas a funções, como generics, callbacks, parâmetros opcionais, rest operator e tipos avançados. Eles são amplamente usados em aplicações reais para tornar o código mais robusto, reutilizável e seguro.

# Seção 6 - Entendendo os Objects Types

Este documento reúne conceitos e exemplos comentados sobre **Generics** e **Tipos Avançados** no TypeScript. Ele mostra como utilizar de forma eficaz os recursos de tipagem da linguagem para escrever código mais robusto, seguro e reutilizável.

### 73. O que são Object Types?

**Object types** representam dados que possuem a estrutura de um objeto:

```ts
const user = { name: "igor", age: 30 };
```

### 74. Interface como parâmetro

Interfaces permitem **tipar objetos** de forma reutilizável:

```ts
interface ProductsProps {
  name: string;
  price: number;
  isAvaliable: boolean;
}

function createProduct(product: ProductsProps): void {
  console.log(`The ${product.name} is avaliable? ${product.isAvaliable}`);
}

const item: ProductsProps = {
  name: "Caderno",
  price: 22.3,
  isAvaliable: true,
};
```

### 75. Interface com parâmetro opcional

Com `?`, você define uma propriedade como **opcional**:

```ts
interface UserProps {
  name: string;
  role?: string;
}

function showUser(user: UserProps): void {
  console.log(`The user ${user.name} is admin? ${user.role ?? true}`);
}
```

### 76. Propriedades readonly

`readonly` impede que a propriedade seja alterada:

```ts
interface CarProps {
  nome: string;
  brand: string;
  readonly wheel: number;
}
```

### 77. Index Signature

Permite declarar um objeto com chaves dinâmicas:

```ts
interface UserProps {
  [index: string]: string;
}

const user: UserProps = {
  name: "Caio",
  age: "30",
};
```

### 78. Herança de interfaces

Usamos `extends` para herdar propriedades:

```ts
interface Products {
  name: string;
  price: number;
}

interface CleaningProducts extends Products {
  isAvaliable: boolean;
}
```

### 79. Intersection types

Unimos interfaces com `&`:

```ts
interface PersonalInfos {
  name: string;
}

interface PrivateInfos {
  cpf: number;
}

type UserInfo = PersonalInfos & PrivateInfos;
```

### 80. Readonly array

`ReadonlyArray` impede modificação direta do array:

```ts
const nomes: ReadonlyArray<string> = ["Igor", "Eduardo", "Caio", "Marcelo"];
```

### 81. Tuplas

Definem a quantidade e tipos de elementos em um array:

```ts
type fourNumbers = [number, number, number, number];
const nums: fourNumbers = [1, 2, 3, 4];

type dataMix = [string, string, number];
const test: dataMix = ["Igor", "Fonseca", 30];
```

### 82. Tuplas com readonly

Tuplas que não podem ser alteradas:

```ts
function showNumbers(num: readonly [number, number]) {
  console.log(num);
}

showNumbers([1, 2]);
```

### 83. Conclusão da seção

Essa seção reforça conceitos fundamentais do TypeScript relacionados a objetos e estruturas de dados, incluindo:

- Tipos de objetos
- Interfaces
- Herança e interseção de interfaces
- Arrays readonly
- Tuplas

Esses conceitos são essenciais para a construção de aplicações TypeScript bem tipadas e seguras.

# Seção 7 - Criação de tipos

### 86. Revisão: O que são Generics?

**Generics** são usados para criar funções, interfaces ou classes que funcionam com qualquer tipo de dado, mantendo a tipagem forte.

```ts
function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}
```

### ✅ Vantagens:

- Reutilização de código com segurança de tipos.
- Evita o uso de `any`, que é menos seguro.

---

### 87. Constraints em Generics

Você pode limitar os tipos que podem ser usados com generics usando **constraints**.

```ts
function getNome<T extends { name: string }>(obj: T) {
  return `O campo recebe o nome de ${obj.name}`;
}

const name = { name: "Igor" };
const prod = { label: "Caderno" };

getNome(name); // Funciona
// getNome(prod)   // Erro, pois não possui a propriedade 'name'
```

---

### 88. Generics com Interface

Interfaces também podem receber generics para permitir flexibilidade na definição de tipos.

```ts
interface Car<T, U> {
  name: string;
  wheel: T;
  engine: U;
}

type MyCar = Car<string, string>;
type MySecondCar = Car<number, boolean>;
```

Aqui, `Car` pode ser instanciada com diferentes tipos para as rodas (`wheel`) e motor (`engine`), dependendo do contexto.

---

### 89. Type Parameters (em construção)

Este tópico normalmente cobre o uso de parâmetros de tipo mais complexos e o uso de múltiplos generics juntos. Ainda não há exemplo implementado.

---

### 90. Keyof Type Operator (em breve)

O operador `keyof` permite obter as chaves (propriedades) de um tipo como um novo tipo.

---

### 91. Typeof Type Operator (em breve)

Usado para criar tipos baseados em valores existentes com o operador `typeof`.

---

### 92. Indexed Access Types (em breve)

Permite acessar o tipo de uma propriedade específica de um objeto tipo, como `Tipo['propriedade']`.

---

### 93. Conditional Types (em breve)

Tipos condicionais permitem criar tipos que mudam de acordo com uma condição.

---

### 94. Template Literal Types (em breve)

Permite criar tipos com base em strings usando templates, como em string interpolation.

---

### 95. Conclusão da seção

Estes conceitos avançados são essenciais para criar bibliotecas, APIs tipadas, e sistemas escaláveis. Estudar Generics e operadores de tipo ajuda a tirar o máximo proveito da segurança de tipos do TypeScript.

# Seção 8 - Classes com Typescript

### 97. Campos em classes

Campos são variáveis declaradas diretamente dentro da classe e representam os dados que os objetos daquela classe armazenam.

```ts
// Criando classe sem valor de campo inicial
class User {
  name!: string;
  lastName!: string;
}

const user = new User();

user.name = "Igor";

console.log(user);
```

### 98. Constructor

Método especial executado automaticamente quando uma instância da classe é criada. É usado para inicializar os membros da classe.

```ts
class UserData {
  name;
  email;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user2 = new UserData("Igor", "igor@gmail.com");
```

### 99. Propriedades readonly

Propriedades marcadas como readonly só podem ser atribuídas uma vez. Isso ajuda a garantir imutabilidade.

```ts
class Car {
  name;
  readonly wheel = 4;

  constructor(name: string) {
    this.name = name;
  }
}
const fusca = new Car("Fusca");
console.log(fusca);
```

### 100. Herança e super

Permite que uma classe herde outra. A palavra-chave super é usada para acessar membros da classe base, como seu construtor.

```ts
class Prod {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class ProdSize extends Prod {
  size;

  constructor(name: string, size: number) {
    super(name);
    this.size = size;
  }
}

const prod = new ProdSize("Cadeira", 134);

console.log(prod);
```

### 101. Métodos

Funções que definem comportamentos das instâncias da classe.

```ts
class Products {
  prodId;
  name;
  price;

  constructor(prodId: number, name: string, price: number) {
    (this.prodId = prodId), (this.name = name), (this.price = price);
  }
}

class Orders extends Products {
  idOrder;
  quantity;
  constructor(
    idOrder: number,
    quantity: number,
    prodId: number,
    name: string,
    price: number
  ) {
    super(prodId, name, price);
    this.idOrder = idOrder;
    this.quantity = quantity;
  }

  total() {
    console.log(this.quantity * this.price);
  }
}

const order = new Orders(1, 2, 23, "Caderno", 15.63);
```

### 02. O this em classes

A palavra-chave this se refere à instância atual da classe e permite acessar seus membros (propriedades e métodos).

```ts

```

### 103. Getters

Getters são usados para retornar dados para o usuário, porém, podemos editar esse dado antes dele ser enviado

```ts
class Person {
  name;
  lastName;
  yearOfBithday;

  constructor(name: string, lastName: string, yearOfBithday: number) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBithday = yearOfBithday;
  }

  get age() {
    return new Date().getFullYear() - this.yearOfBithday;
  }
}

const carol = new Person("Carol", "Fonseca", 1995);

console.log(carol.age);
```

### 104. Setters

Setters são parecidos com o Getter teóricamente, porem são usados para manipular dados antes de adiciona-los
dentro da instância da classe

```ts
class Person {
  name;
  lastName;
  yearOfBithday;

  constructor(name: string, lastName: string, yearOfBithday: number) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBithday = yearOfBithday;
  }

  get age() {
    return new Date().getFullYear() - this.yearOfBithday;
  }

  // Aqui recebemos, verificamos e modificamos os dados antes de salvar
  set addUserName(value: string) {
    if (value === "") {
      return;
    }
    this.name = value.toUpperCase();
  }
}

const carol = new Person("Carol", "Fonseca", 1995);

// Para invocar um setter fazemos
carol.addUserName = "carol";
// Não usamos ()
```

### 105. Herdando interfaces

Aqui podemos cria uma interface de modo que obriguemos a class a seguir o que está definido na interface usando o `implements`

```ts
interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  get getTotal(): number;
}

class Produto implements Product {
  id;
  name;
  quantity;
  price;

  constructor(id: number, name: string, quantity: number, price: number) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  get getTotal() {
    return this.quantity * this.price;
  }
}

const prod = new Produto(1, "Cadeira", 2, 56);

console.log(prod.getTotal);
```

### 106. Override de métodos

Um override é usado para substituir o método de uma classe copiando ele dentro de uma subclasse mas alterando sua lógica interna

```ts
class ClassMae {
  // Metodo da class mãe
  falaAlgo(): void {
    console.log("oi");
  }
}

class ClassFilha extends ClassMae {
  // Mesmo método subtituido na classe filha
  falaAlgo(): void {
    console.log("algo");
  }
}

const test = new ClassFilha();

test.falaAlgo();
```

### 107. Sobre a visibilidade de propriedades e métodos

Explica os diferentes níveis de acesso (public, private, protected) e como eles controlam a visibilidade dos membros da classe.

### 108. Visibilidade public

Membros public são acessíveis de qualquer lugar do código onde a instância estiver disponível, incluindo em subclasses.

```ts
class GetId {
  public id = "as133asdf135d";
}

const id = new GetId();

console.log(id.id);
```

### 109. Visibilidade protected

Membros protected são acessíveis dentro da própria classe e também nos métodos das subclasses que a estendem.

```ts
// Class mae
class Test {
  protected userName = "Lucas Matheus Pereira";
}
// subClass
class OutroTest extends Test {
  showUserName() {
    console.log(this.userName);
  }
}
const inst = new OutroTest();

inst.showUserName();
```

### 110. Visibilidade private

Membros private só são acessíveis dentro da própria classe. Não podem ser acessados nem mesmo por subclasses.

```ts
 class Private {
        private name = 'Igor'

        showName() {
            console.log(this.name)
        }

        private getFirstletter() {
            console.log(this.name[0])
        }

        showPrivateMethod() {
            this.getFirstletter()
        }
    }

    const privateInst = new Private()
    privateInst.showName()

    privateInst.showPrivateMethod()

```

### 111. Static members

Propriedades e métodos estáticos pertencem à classe em si, e não às suas instâncias. São acessados diretamente pela classe.

### 112. Generic class

Classes genéricas usam parâmetros de tipo (como <T>) para funcionar com diferentes tipos de dados de forma segura e reutilizável.

### 113. Parameter properties

Sintaxe que permite declarar e inicializar propriedades diretamente nos parâmetros do construtor com modificadores como public.

### 114. Class expressions

Declarações de classe atribuídas a variáveis. São úteis em contextos onde é necessário definir classes de forma dinâmica.

### 115. Classe abstrata

Classes abstratas não podem ser instanciadas diretamente. Servem como modelo para outras classes e podem conter métodos abstratos.

### 116. Relação entre classes

Apresenta os diferentes tipos de relação entre classes, como composição, agregação e associação.

### 117. Exercício

Atividade prática para aplicar e consolidar os conceitos aprendidos sobre classes, herança, visibilidade, entre outros.
