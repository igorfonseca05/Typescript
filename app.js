"use strict";
let nome = "igor";
let idade = 29;
const isAdmin = false;
const produtos = {
    name: 'Cadeira',
    price: 34,
    avalible: false
};
const loja = [
    {
        name: 'Cadeira',
        price: 34,
        available: false
    },
    {
        name: 'Material',
        price: 25,
        available: true
    },
];
function getSum(loja) {
    return loja[0].price + loja[1].price;
}
// console.log(getSum(loja))
const names = ['igor', 'Alan', 'Marcelo', 3];
// console.log(names)
const own = { name: 'Alice' };
function store(prod) {
    return console.log(`Essa loja tem o produto ${prod.name} e pertence a ${prod.own.name}`);
}
// store({name: 'Caderno', price: 23, own })
const dados = ['igor', 2, true];
dados[3] = 56;
console.log(dados);
// const stores: Array<Produto> = [ {
//     name: 'Cadeira',
//     price: 34,
//     available: false
// },
// {
//     name: 'Material',
//     price: 25,
//     available: true
// },]
const stores = [{
        name: 'Cadeira',
        price: 34,
        available: false
    },
    {
        name: 'Material',
        price: 25,
        available: true
    },];
// produtos.name = 'Martelo'
// produtos.price = 35
