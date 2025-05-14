"use strict";
// 86. Revisão generics
/** Usamos generics quando a função pode aceitar qualquer tipo de parametro
 * é uma prática mais interessante que o any, que teria um efeito semelhante
 */
function showData(arg) {
    return `O dado é ${arg}`;
}
// 87. Constraints em gererics
/** Constraints ajudam a reduzir os tipos de dados aceitos por um genéric */
(() => {
    // function getNome<T extends { name: string }>(obj: T) {
    //     return `o Campo recebe o nome de ${obj.name}`
    // }
    // const name = { name: 'Igor' }
    // const prod = { label: 'Caderno' }
    // getNome(name)
    // // getNome(prod)
    function getUserData(obj) {
        console.log('O usuário se chama ' + obj.name);
    }
    // getUserData({ name: 'Igor', age: 30, altura: 1.85 })
})();
// 88. Generics com Interface
/** Aqui criamos dois genéricos dentro da interface, e para definir os tipos dos dados
 * usamos o type para criar o molde das nossas instancias
 */
(() => {
})();
// 89. Type parameters
/** Usamos esse recurso para criar funções que só aceitam chaves do objeto
 * como parametros da função, ou seja, os dados que devemos usar para dentro
 * lógica da função é são os dados armazenados nos campos do objeto
 */
(() => {
    function getSomeKey(obj, key) {
        return obj[key];
    }
    // console.log(getSomeKey({ name: 'igor', age: 30 }, 'name'))
})();
function getKeyObj(obj, key) {
    return obj[key];
}
// console.log(getKeyObj({ name: 'igor', age: 30 }, 'age'))
// 91. Typeof type operator
/** O operador typeof no TypeScript é usado para capturar o tipo de uma variável existente e reutilizá-lo na tipagem de outras variáveis, funções ou objetos*/
(() => {
    const userName = 'Igor'; // capturando tipo
    const userName2 = 'João'; // Reutilizando tipo
})(),
    // 92. Indexed access types
    (() => {
        function getUserName(name) {
            console.log(name);
        }
        const user = {
            name: 'Igor',
            email: 'Igorfonseca27@hotmail.com'
        };
        getUserName("altura");
    })();
// 93. Conditional types
// 94. Template literals type
// 95. Conclusão da seção
