(() => {

    function showName(nome: string): void {
        console.log(nome)
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


    async function Prom(callback: (name: string) => void, userName: string): Promise<void> {
        setTimeout(() => {
            callback(userName)
        }, 2000)
    }


    Prom((name) => {
        console.log(name)
    }, 'Igor')



    // 3- Generic function
    // T representa um tipo genérico/ alaguma coisa que não se sabe

    function firstElement<T>(arr: T[]) {
        return arr[0]
    }


    function mergeObject<U, T>(obj1: U, Obj2: T) {
        return {
            ...obj1,
            ...Obj2
        }
    }

























})()
