"use strict";
// 73 - O que são Object Types? 
/** Object type são dados que tem como tipo objeto */
(() => {
    const user = { name: 'igor', age: 30 };
})();
// 74. Interface como parâmetro
/** Aqui aprendemos como podemos simplificar o código usando o interface para tipar
 * dados ao invés de escrever item por item do objeto
 */
(() => {
    function createProduct(product) {
        console.log(`The ${product.name} is avaliable? ${product.isAvaliable}`);
    }
    const item = {
        name: 'Caderno',
        price: 22.30,
        isAvaliable: true
    };
    // createProduct(item)
})();
/**Podemos passar campos opcionais dentro de uma interface também */
// 75. Interface com parâmetro opcional
(() => {
    function showUser(user) {
        var _a;
        console.log(user.role);
        console.log(`The user ${user.name} is admin? ${(_a = user.role) !== null && _a !== void 0 ? _a : true}`);
    }
    const user = {
        name: 'Igor',
        role: 'admn'
    };
    // showUser(user)
})();
// 76. Propriedades readonly
/**A propriedade read-only impede o valor do objeto de ser alterado */
(() => {
    function showCarsInfos(car) {
        console.log(`${car.nome} is a car made by ${car.brand} and has ${car.wheel} wheels`);
    }
    const car = {
        nome: 'Palio',
        brand: 'Fiat',
        wheel: 4
    };
    showCarsInfos(car);
})();
// 77. Index Signature
(() => {
    /** Permite criarmos objetos de maneira livre, podem seguindo a sintaxe de que
     * a chave deve ser uma string e o valor tbm
     */
    const user = {
        name: 'Caio',
        age: '30'
    };
})();
// 78. Herança de interfaces
/** A idéia por trás da herança é que usando o extends não precisaremos reescrever as propriedades de uma
 * interface que queremos usar em outra interface
 */
(() => {
    const sponge = {
        name: 'sponge',
        price: 2.36,
        isAvaliable: true
    };
})();
// 79. Intersection types
/**Aqui usamos o intersection types para unir duas interfaces em um unico type*/
(() => {
    const user = {
        name: 'Igor',
        cpf: 135131351
    };
})();
// 80. Readonly array
/** Usando o método abaixo não podemos alterar os dados do array por meio da chaves
 *  é como se criassemos um bloqueio no array.
 */
(() => {
    const nomes = ['Igor', 'Eduardo', 'Caio', 'Marcelo'];
})();
// 81. Tuplas
/** É um tipo de array onde definimos o tipo de quantidade de elementos e os valores da tupla podem
 * ser alterados com a notação de chaves
  */
(() => {
    const nums = [1, 2, 3, 4];
    const test = ['Igor', 'Fonseca', 30];
})();
// 82. Tuplas com readonly
(() => {
    /** Aqui definimos uma tupla read-only, onde o parametro num, que deve ser um array com
     * dois numeros não pode ser alterado
     */
    function showNumbers(num) {
        console.log(num);
    }
    showNumbers([1, 2]);
})();
// 83. Conclusão da seção
