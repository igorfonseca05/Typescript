"use strict";
(() => {
    // function saveDB<T>(obj: T) {
    //     console.log(obj)
    // }
    function saveDB(obj) {
        console.log(obj);
    }
    const product = {
        name: 'chair',
        price: 23
    };
    const product2 = {
        name: 'chair',
        price: 23,
        width: 125
    };
    const product3 = 'Refrigerated display case';
    // saveDB(product)
    function getUserData(userData) {
        const userName = userData === null || userData === void 0 ? void 0 : userData.name;
        console.log(userName);
    }
    const userData = {
        name: 'Josh',
        lastname: 'silva',
        age: 30
    };
    const Car = { brand: 'Ford', wheel: 'new', engine: 32 };
    const house = { brand: 'Ford', wheel: 23, engine: true };
    function getUsersAge(obj, key) {
        const yearOfBirthday = new Date().getFullYear() - Number(obj[key]);
        return yearOfBirthday;
    }
    const user = {
        name: 'Thiago',
        age: 30,
        height: 185
    };
    function getPrice(obj, key) {
        console.log(obj[key]);
    }
    const produto = {
        name: 'Caderno',
        price: 23,
        isAvaliable: false
    };
    // getPrice(produto, 'price')
    // Compartilhar tipos entre variavies
    const name = 'Igor';
    const sobrenome = 'Fonseca';
    function getName(variable) {
        console.log(variable);
    }
    (() => {
        const name = 'Igor';
        const age = 23;
        console.log(name, age);
    })();
})();
