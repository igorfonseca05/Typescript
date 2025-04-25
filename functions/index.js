"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    function showName(nome) {
        console.log(nome);
    }
    // showName('igor')
    // Aula 2 Callback sem argumento
    // function preGreeting(f: (name: string) => string, userName: string) {
    //     const greet = f(userName)
    //     console.log(greet)
    // }
    // preGreeting((name) => {
    //     return name
    // }, 'Igor')
    function Prom(callback, userName) {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => {
                callback(userName);
            }, 2000);
        });
    }
    Prom((name) => {
        console.log(name);
    }, 'Igor');
    // 3- Generic function
    // T representa um tipo genérico/ alaguma coisa que não se sabe
    function firstElement(arr) {
        return arr[0];
    }
    function mergeObject(obj1, Obj2) {
        return Object.assign(Object.assign({}, obj1), Obj2);
    }
})();
