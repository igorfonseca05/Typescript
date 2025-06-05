"use strict";
// ==== EXERCÍCIOS DE GENERICS E TIPAGEM AVANÇADA ====
// 1. Crie uma função chamada `wrapInArray` que recebe um valor genérico `T` e retorna esse valor dentro de um array (`T[]`).
function wrapInArray(value) {
    return [value];
}
// 2. Crie uma função chamada `getFirstLetter` que aceita apenas objetos que possuem a chave `title: string`, e retorna a primeira letra desse título.
function getFirstLetter(obj) {
    return obj.title.charAt(0);
}
// 4. Crie uma função `logKeyValue` que recebe um objeto `T` e uma chave `K` que pertence a `T`, e imprime o valor dessa chave.
// Use `K extends keyof T` para garantir segurança de tipo.,
function logKeyValue(obj, key) {
    return obj[key];
}
// console.log(logKeyValue({ name: 'igor', lastName: 'Fonseca' }, 'name'))
// 5. Crie um tipo `Book` com `title`, `author`, `pages`, e um tipo `BookKeys` usando `keyof`.
// Depois, use esse tipo como parâmetro de uma função que imprime qual chave está sendo usada.
(() => {
    function getBookTitle(book, key) {
        return book[`${key}`];
    }
    // console.log(getBookTitle({ title: 'oi', author: 'Machado', pages: 456 }, 'title'))
})();
// 6. Crie uma variável `email: string = 'user@example.com'`. Depois crie uma nova variável `emailBackup` que reutiliza o tipo de `email` usando `typeof`.
const email = 'Igorfonseca27@hotmai.com';
const myName = 'Igor';
function checkStatus(status) {
    console.log(status);
}
// checkStatus(true)
// 8. Crie um tipo condicional chamado `IsString<T>` que verifica se `T` é do tipo `string`.
// Se sim, retorna `"É uma string"`, senão `"Não é uma string"`.
// 9. Crie um tipo `EventName` que aceita apenas strings que comecem com `"on"` seguidas por qualquer string
// (ex: `"onClick"`, `"onHover"`, `"onSubmit"`).
// 10. Crie uma função `copyValue<T, K extends keyof T>(from: T, key: K): T[K]` que recebe um objeto e uma chave,
// e retorna uma cópia do valor dessa chave. A tipagem deve garantir que `key` exista em `T`.
