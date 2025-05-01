
//1-Função sem retorno
//Crie uma função chamada mostrarAlerta que exibe uma mensagem no console, sem retornar nada.

(() => {

    function showAlert(message: string): void {
        alert(`${message}`)
    }

    // showAlert('Bom dia pessoal')


})();

//2-Callback sem argumento
//Crie uma função que receba um callback sem parâmetros e apenas o execute.


(() => {

    function getCallback(callback: () => void) {
        callback()
    }

    // getCallback(() => {
    //     console.log('Criei uma função que recebe um callback sem parametro')
    // })

    function showName(): void {
        console.log('Meu nome é Igor')
    }

    function getName(callback: () => void) {
        callback()
    }

    // getName(showName)


})();


//3-Função genérica
//Crie uma função retornarElemento que receba um parâmetro de tipo genérico e o retorne.

(() => {

    function retornarElemento<T>(param: T): T {
        return param
    }

    // const generic = retornarElemento('Crie uma função com retorno genérico')
    const generic = retornarElemento({ name: 'igor' })

    // console.log(generic)

})();

//4-Genérico com constraint
//Crie uma função que aceite apenas argumentos que possuam a propriedade .length e retorne esse valor.

(() => {

    function ownLength<T extends string | number[] | string[]>(param: T): number {
        return param.length
    }

    // const res = ownLength([1, 2, 3])
    // const res = ownLength(["igor", 'andre'])
    // const res = ownLength('string')
    // console.log(res)

})();

//5-Dois genéricos
//Crie uma função que receba dois arrays de tipos diferentes e retorne um array com o primeiro item de cada um.

(() => {

    function getArray<T>(arr1: T[], arr2: T[]) {
        return [arr1[0], arr2[0]]
    }

    const res = getArray<number | string>([1, 2, 3], ["oi", 'igor'])

    // console.log(res)

})();

//6-Argumentos opcionais
//Crie uma função que aceite um título e uma descrição opcional, e retorne uma string formatada com as informações.

(() => {

    function getBooksInfo(title: string, description?: string) {
        // if (description) {
        //     return `Titulo: ${title}\nDescrição: ${description}`
        // } else {
        //     return `Titulo: ${title}\nDescrição: Sem descrição`
        // }

        return `Titulo: ${title}\nDescrição ${description ?? 'Sem descrição'}`
    }

    const res = getBooksInfo('A menina que roubava livros')
    // console.log(res)

})();


//7-Parâmetro default
//Crie uma função que aceite um nome e uma saudação com valor padrão "Olá", e retorne a saudação completa.

(() => {

    function greting(message: string, initial = 'Olá') {
        return `${initial} ${message}`
    }

    // console.log(greting('tudo bem com voce?'))

})();

//8-Tipo unknown
//Crie uma função que aceite um valor do tipo unknown e realize uma verificação de tipo antes de usá-lo.

(() => {

    function getType(data: unknown) {
        if (typeof data === 'number') {
            console.log('Você enviou um number')
        } else if (typeof data === 'string') {
            console.log('Você enviou uma string')
        }
    }

    // getType('igor')

})();

//9-Tipo never
//Crie uma função que lança um erro com uma mensagem recebida. Essa função nunca deve retornar.

(() => {

    function getError(error: string): never {
        throw new Error(`${error}`)
    }

    // getError('Erro no servidor')

})();

//10-Rest + Destructuring
//Crie uma função que receba um objeto com as propriedades nome, idade e outras quaisquer, e retorne apenas as propriedades extras.

(() => {
    function getInfos({ name, age, ...rest }: { name: string, age: number, [key: string]: any }): { [key: string]: any } {
        return rest
    }

    const info = getInfos({
        name: 'igor',
        age: 30,
        cidade: 'Bananal'
    })

    console.log(info)
})();



// Desafio

(() => {


    const user = { name: 'igor', age: 30, cidade: 'Bananal' }

    function validateUser(x: unknown): x is { name: string, age: number } {
        if (typeof x === 'object' && x !== null && 'name' in x && 'age' in x) {
            return true
        }

        throw new Error('Não foi possivel criar usuário')
    }

    function createUser<T extends { name?: string, age: number }>(
        user: T,
        callback: () => void,
    ): { [key: string]: any } {

        const { name = 'Anonimo', age, ...rest } = user

        if (validateUser({ name, age })) {
            callback()
            return rest
        }

        throw new Error('Erro ao cadastrar usuário')

    }

    createUser(user, () => {
        console.log('Usuário criado com sucesso')
    })

})()


