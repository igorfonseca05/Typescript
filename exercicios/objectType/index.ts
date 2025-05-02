// 1. Interface como parâmetro
// Crie uma interface Produto com as propriedades nome, preco e categoria.
// Em seguida, crie uma função mostrarProduto que recebe um objeto do tipo Produto e imprime suas informações.

interface Produtos {
    name: string,
    price: number
}

function mostrarProduto(prod: Produtos) {
    console.log(prod.name, prod.price)
}

const produto: Produtos = {
    name: 'Cadeira',
    price: 256
}

// mostrarProduto(produto)


// 2. Interface com parâmetro opcional
// Crie uma interface Usuario com nome, email e uma propriedade opcional telefone.
// Crie uma função que recebe esse objeto e imprime as informações. Trate a ausência do telefone com uma mensagem personalizada.


interface User {
    name: string
    email: string
    telefone?: number
}

function getUserData(user: User) {
    if (user.telefone) {
        console.log(`O usuário ${user.name} tem o telefone ${user.telefone}`)
    } else {
        console.log(`O usuário ${user.name} tem o email ${user.email}`)
    }
}

const user: User = {
    name: 'Igor',
    email: 'Igor@gmail.com',
    // telefone: 12966566
}

// getUserData(user)


// 3. Propriedades readonly
// Crie uma interface Livro com as propriedades titulo (readonly), autor e ano.
// Após criar um objeto Livro, tente alterar o valor de titulo e observe o erro do TypeScript.

interface Book {
    author: string,
    readonly title: string
    year: number
}

const book: Book = {
    author: 'Carlos',
    title: 'A casa do sonhos',
    year: 2025
}

// book.title = 'Outro titulo'


// 4. Index Signature
// Crie uma interface Estoque que permite chaves dinâmicas do tipo string e valores do tipo number.
// Em seguida, crie um objeto Estoque com alguns produtos e quantidades e imprima o conteúdo.

interface Prods {
    [index: string]: number
}

const prod: Prods = {
    price: 23,
    altura: 12.6,
    largura: 12.9
}


// 5. Herança de interfaces
// Crie uma interface Pessoa com nome e idade.
// Crie outra interface Funcionario que herda de Pessoa e adiciona cargo e salario.
// Crie um objeto do tipo Funcionario e use-o em uma função que imprime seus dados.

interface Pessoa {
    name: string,
    idade: number
}

interface Funcionario extends Pessoa {
    cargo: string,
    salario: number
}

const func: Funcionario = {
    name: 'Caio',
    idade: 30,
    cargo: 'gerente ',
    salario: 2500
}


// 6. Intersection types
// Crie dois tipos: Endereco com rua e numero, e Cliente com nome e idade.
// Use a interseção (&) para criar um tipo ClienteCompleto e crie um objeto baseado nele.

type Endereco = {
    rua: string,
    numero: number
}

type Cliente = {
    nome: string,
    idade: number

}

type ClientCompleto = Endereco & Cliente


// 7. Readonly array
// Crie um array chamado nomes do tipo readonly string[] com alguns nomes.
// Tente adicionar, remover ou alterar algum

const nomes: readonly string[] = ['igor', 'Fonseca']
const nums: ReadonlyArray<number> = [1, 2, 3]


// 8. Tuplas
// Crie uma tupla chamada resultado contendo um boolean e uma string.
// Crie uma função que simula um login e retorna essa tupla como resposta.

type resultado = [boolean, string]

function login(name: string, password: string) {
    if (name && password) {
        const res: resultado = [true, 'login realizado com sucesso']
        return res
    }
}

console.log(login('igor', '123456'))

// 9. Tupla com readonly
// Crie uma tupla chamada parChaveValor com dois elementos: string e number, marcados como readonly.
// Tente modificar qualquer um dos elementos da tupla e veja o erro retornado.

type parChaveValor = readonly [string, number]

const res: parChaveValor = ['igor', 30]

// res[0] = 'oi'


// 10. Interface com tupla
// Crie uma interface Coordenada que possua uma propriedade posicao do tipo [number, number].
// Crie uma função que recebe um objeto do tipo Coordenada e imprime sua posição formatada.

interface Coordenada {
    posicao: [number, number]
}

function getCoodinates(posicao: Coordenada) {
    console.log(posicao)
}

const coods: Coordenada = { posicao: [22.36521, -46.1254] }

// getCoodinates(coods)
