"use strict";
(() => {
    // function showName(nome: string): void {
    //     console.log(nome)
    // }
    // showName('igor')
    // Aula 2 Callback sem argumentoin
    // function preGreeting(f: (name: string) => string, userName: strg) {
    //     const greet = f(userName)
    //     console.log(greet)
    // }
    // preGreeting((name) => {
    //     return name
    // }, 'Igor')
    function showName(callback, num, num2) {
        callback(num, num2);
    }
    showName((num1, num2) => {
        console.log(num1 + num2);
    }, 2, 3);
    // 3- Generic function
    // T representa um tipo genérico/ alaguma coisa que não se sabe
    function nome(dados) {
        return Object.assign({}, dados);
    }
    const myData = nome('oi');
    console.log(myData);
    // function firstElement<T>(arr: T[]) {
    //     return arr[0]
    // }
    // function mergeObject<U, T>(obj1: U, Obj2: T) {
    //     return {
    //         ...obj1,
    //         ...Obj2
    //     }
    // }
    // 63. Constraints em generic function
    // function sum<T extends number | string>(num: T, num2: T): T {
    // }
    // 64. Especificar tipos de argumentos
    function mergeArray(arr1, arr2) {
        return arr1.concat(arr2);
    }
    console.log(mergeArray([1, 2, 3], [4, 5, 6]));
    console.log(mergeArray([1, 2, 3], ['ana']));
    // 64. Parâmetros opcionais 
    function modernGreeting(name, greet) {
        if (greet) {
            return `Olá ${name} ${greet}, tudo bem?`;
        }
        return `Olá ${name},tudo bem?`;
    }
    console.log(modernGreeting('Igor'));
    // 64. Parâmetros default
    function somaDefault(num1, num = 10) {
        console.log(num1 + num);
    }
    somaDefault(1);
    // 65. tipo unknown
    function doSomething(x) {
        console.log(x);
    }
    /*/*/
    // 69. Rest operator
    function sumAll(...n) {
        return n.reduce((number, sum) => number + sum);
    }
})();
