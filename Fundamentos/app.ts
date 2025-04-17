
// let nome: string = "igor"

let idade: number = 29

const isAdmin: boolean = false



const produtos: { name: string, price: number, avalible: boolean } = {
    name: 'Cadeira',
    price: 34,
    avalible: false
}


const loja: { name: string, price: number, available: boolean }[] = [
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

]


function getSum(loja: { name: string, price: number, available: boolean }[]): number {
    return loja[0].price + loja[1].price
}

// console.log(getSum(loja))



const names: (string | number)[] = ['igor', 'Alan', 'Marcelo', 3]

// console.log(names)


const own: Own = { name: 'Alice' }

type Own = {
    name: string
}

type Produtos = {
    name: string,
    price: number,
    own: Own

}


function store(prod: Produtos) {
    return console.log(`Essa loja tem o produto ${prod.name} e pertence a ${prod.own.name}`)
}

// store({name: 'Caderno', price: 23, own })

const dados = ['igor', 2, true]

dados[3] = 56

console.log(dados)


type Produto = {
    name: string,
    price: number,
    available: boolean
}

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

const stores: Produto[] = [{
    name: 'Cadeira',
    price: 34,
    available: false
},
{
    name: 'Material',
    price: 25,
    available: true
},]






// produtos.name = 'Martelo'
// produtos.price = 35



