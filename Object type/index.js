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
// 77. Index Signature
// 78. Herança de interfaces
// 79. Intersection types
// 80. Readonly array
// 81. Tuplas
// 82. Tuplas com readonly
// 83. Conclusão da seção
