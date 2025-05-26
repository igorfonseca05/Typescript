
// 86. Revisão generics

/** Usamos generics quando a função pode aceitar qualquer tipo de parametro
 * é uma prática mais interessante que o any, que teria um efeito semelhante
 */

function showData<T>(arg: T): string {
    return `O dado é ${arg}`
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

    function getUserData<T extends { name: string }>(obj: T) {
        console.log('O usuário se chama ' + obj.name)
    }

    // getUserData({ name: 'Igor', age: 30, altura: 1.85 })


})();

// 88. Generics com Interface

/** Aqui criamos dois genéricos dentro da interface, e para definir os tipos dos dados
 * usamos o type para criar o molde das nossas instancias
 */


(() => {

    interface Car<T, U> {
        name: string
        wheel: T
        engine: U
    }

    type MyCar = Car<string, string>
    type MySecondCar = Car<number, boolean>

})();


// 89. Type parameters

/** Usamos esse recurso para criar funções que só aceitam chaves do objeto
 * como parametros da função, ou seja, os dados que devemos usar para dentro
 * lógica da função é são os dados armazenados nos campos do objeto
 */

/**
 * We use this resource to create functions which take object's key as paramets
 * of the function, in other words, the data that we can use inside the function is
 * the data what's limited in the object. 
 */

(() => {

    function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
        return obj[key]
    }

    // console.log(getSomeKey({ name: 'igor', age: 30 }, 'name'))
})();

// 90. Keyof type operator

type Userkey = { name: string, age: number }

type Username = keyof Userkey

function getKeyObj(obj: Userkey, key: Username) {
    return obj[key]
}

// console.log(getKeyObj({ name: 'igor', age: 30 }, 'age'))

// 91. Typeof type operator

/** O operador typeof no TypeScript é usado para capturar o tipo de uma variável existente e reutilizá-lo na tipagem de outras variáveis, funções ou objetos*/
(() => {

    const userName: string = 'Igor' // capturando tipo
    const userName2: typeof userName = 'João' // Reutilizando tipo
})(),

    // 92. Indexed access types

    (() => {

        type User = { name: string, email: string }

        type Name = User['name']

        function getUserName(name: Name) {
            console.log(name)
        }

        const user: User = {
            name: 'Igor',
            email: 'Igorfonseca27@hotmail.com'
        }

        getUserName("altura")


    })()

// 93. Conditional types

/** Permite criar novos tipos baseados em condições */

interface A { }

interface B { }
interface Z { }

type newType = B extends Z ? string : number

// const userAge: newType = 39 // Vai dar erro
// const userName: newType = 'Cadeira'

// 94. Template literals type

// 95. Conclusão da seção













