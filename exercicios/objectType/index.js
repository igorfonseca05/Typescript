"use strict";
// 1. Interface como parâmetro
// Crie uma interface Produto com as propriedades nome, preco e categoria.
// Em seguida, crie uma função mostrarProduto que recebe um objeto do tipo Produto e imprime suas informações.
function mostrarProduto(prod) {
    console.log(prod.name, prod.price);
}
const produto = {
    name: 'Cadeira',
    price: 256
};
function getUserData(user) {
    if (user.telefone) {
        console.log(`O usuário ${user.name} tem o telefone ${user.telefone}`);
    }
    else {
        console.log(`O usuário ${user.name} tem o email ${user.email}`);
    }
}
const user = {
    name: 'Igor',
    email: 'Igor@gmail.com',
    // telefone: 12966566
};
const book = {
    author: 'Carlos',
    title: 'A casa do sonhos',
    year: 2025
};
const prod = {
    price: 23,
    altura: 12.6,
    largura: 12.9
};
const func = {
    name: 'Caio',
    idade: 30,
    cargo: 'gerente ',
    salario: 2500
};
// 7. Readonly array
// Crie um array chamado nomes do tipo readonly string[] com alguns nomes.
// Tente adicionar, remover ou alterar algum
const nomes = ['igor', 'Fonseca'];
const nums = [1, 2, 3];
function login(name, password) {
    if (name && password) {
        const res = [true, 'login realizado com sucesso'];
        return res;
    }
}
console.log(login('igor', '123456'));
const res = ['igor', 30];
function getCoodinates(posicao) {
    console.log(posicao);
}
const coods = { posicao: [22.36521, -46.1254] };
// getCoodinates(coods)
