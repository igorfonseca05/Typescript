"use strict";
//1-Função sem retorno
//Crie uma função chamada mostrarAlerta que exibe uma mensagem no console, sem retornar nada.
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    function showAlert(message) {
        alert(`${message}`);
    }
    // showAlert('Bom dia pessoal')
})();
//2-Callback sem argumento
//Crie uma função que receba um callback sem parâmetros e apenas o execute.
(() => {
    function getCallback(callback) {
        callback();
    }
    // getCallback(() => {
    //     console.log('Criei uma função que recebe um callback sem parametro')
    // })
    function showName() {
        console.log('Meu nome é Igor');
    }
    function getName(callback) {
        callback();
    }
    // getName(showName)
})();
//3-Função genérica
//Crie uma função retornarElemento que receba um parâmetro de tipo genérico e o retorne.
(() => {
    function retornarElemento(param) {
        return param;
    }
    // const generic = retornarElemento('Crie uma função com retorno genérico')
    const generic = retornarElemento({ name: 'igor' });
    // console.log(generic)
})();
//4-Genérico com constraint
//Crie uma função que aceite apenas argumentos que possuam a propriedade .length e retorne esse valor.
(() => {
    function ownLength(param) {
        return param.length;
    }
    // const res = ownLength([1, 2, 3])
    // const res = ownLength(["igor", 'andre'])
    // const res = ownLength('string')
    // console.log(res)
})();
//5-Dois genéricos
//Crie uma função que receba dois arrays de tipos diferentes e retorne um array com o primeiro item de cada um.
(() => {
    function getArray(arr1, arr2) {
        return [arr1[0], arr2[0]];
    }
    const res = getArray([1, 2, 3], ["oi", 'igor']);
    // console.log(res)
})();
//6-Argumentos opcionais
//Crie uma função que aceite um título e uma descrição opcional, e retorne uma string formatada com as informações.
(() => {
    function getBooksInfo(title, description) {
        // if (description) {
        //     return `Titulo: ${title}\nDescrição: ${description}`
        // } else {
        //     return `Titulo: ${title}\nDescrição: Sem descrição`
        // }
        return `Titulo: ${title}\nDescrição ${description !== null && description !== void 0 ? description : 'Sem descrição'}`;
    }
    const res = getBooksInfo('A menina que roubava livros');
    // console.log(res)
})();
//7-Parâmetro default
//Crie uma função que aceite um nome e uma saudação com valor padrão "Olá", e retorne a saudação completa.
(() => {
    function greting(message, initial = 'Olá') {
        return `${initial} ${message}`;
    }
    // console.log(greting('tudo bem com voce?'))
})();
//8-Tipo unknown
//Crie uma função que aceite um valor do tipo unknown e realize uma verificação de tipo antes de usá-lo.
(() => {
    function getType(data) {
        if (typeof data === 'number') {
            console.log('Você enviou um number');
        }
        else if (typeof data === 'string') {
            console.log('Você enviou uma string');
        }
    }
    // getType('igor')
})();
//9-Tipo never
//Crie uma função que lança um erro com uma mensagem recebida. Essa função nunca deve retornar.
(() => {
    function getError(error) {
        throw new Error(`${error}`);
    }
    // getError('Erro no servidor')
})();
//10-Rest + Destructuring
//Crie uma função que receba um objeto com as propriedades nome, idade e outras quaisquer, e retorne apenas as propriedades extras.
(() => {
    function getInfos(_a) {
        var { name, age } = _a, rest = __rest(_a, ["name", "age"]);
        return rest;
    }
    const info = getInfos({
        name: 'igor',
        age: 30,
        cidade: 'Bananal'
    });
    console.log(info);
})();
// Desafio
// (() => {
//     const user = { name: 'igor', age: 30, cidade: 'Bananal' }
//     function validateUser(x: unknown) {
//         // if (Object.keys(x).includes('name') && Object.keys(x).includes('age')) {
//         //     return true
//         // }
//         throw new Error('Não foi possivel criar usuário')
//     }
//     function createUser<T>({ name, age, ...rest }: { name: string, age: number, [key: string]: any }, callback: () => void, dados?: T): { [key: string]: any } {
//         if (dados) return {}
//         const res = validateUser({ name, age, ...rest })
//         if (res) {
//             callback()
//             return rest
//         }
//         console.log('Error ao cadastrar usuário')
//     }
//     createUser(user, () => {
//         console.log('Usuário criado com sucesso')
//     })
// })()
