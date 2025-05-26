"use strict";
// ==== EXERCÍCIOS DE GENERICS E TIPAGEM AVANÇADA ====
// 1. Crie uma função chamada `wrapInArray` que recebe um valor genérico `T` e retorna esse valor dentro de um array (`T[]`).
// 2. Crie uma função chamada `getFirstLetter` que aceita apenas objetos que possuem a chave `title: string`, e retorna a primeira letra desse título.
// 3. Crie uma interface `Product<T, U>` que possua as propriedades `name: string`, `price: T` e `available: U`.
// Em seguida, crie dois tipos baseados nela: um com `number, boolean` e outro com `string, string`.
// 4. Crie uma função `logKeyValue` que recebe um objeto `T` e uma chave `K` que pertence a `T`, e imprime o valor dessa chave.
// Use `K extends keyof T` para garantir segurança de tipo.
// 5. Crie um tipo `Book` com `title`, `author`, `pages`, e um tipo `BookKeys` usando `keyof`.
// Depois, use esse tipo como parâmetro de uma função que imprime qual chave está sendo usada.
// 6. Crie uma variável `email: string = 'user@example.com'`. Depois crie uma nova variável `emailBackup` que reutiliza o tipo de `email` usando `typeof`.
// 7. Dado o tipo `User = { name: string, age: number, isAdmin: boolean }`, crie um novo tipo `UserStatus`
// que representa apenas o tipo do campo `isAdmin`. Use esse tipo para tipar uma função `checkStatus`.
// 8. Crie um tipo condicional chamado `IsString<T>` que verifica se `T` é do tipo `string`.
// Se sim, retorna `"É uma string"`, senão `"Não é uma string"`.
// 9. Crie um tipo `EventName` que aceita apenas strings que comecem com `"on"` seguidas por qualquer string
// (ex: `"onClick"`, `"onHover"`, `"onSubmit"`).
// 10. Crie uma função `copyValue<T, K extends keyof T>(from: T, key: K): T[K]` que recebe um objeto e uma chave,
// e retorna uma cópia do valor dessa chave. A tipagem deve garantir que `key` exista em `T`.
