(() => {

    // function saveDB<T>(obj: T) {
    //     console.log(obj)

    // }

    function saveDB<T extends { name: string }>(obj: T) {
        console.log(obj)

    }

    const product = {
        name: 'chair',
        price: 23
    }

    const product2 = {
        name: 'chair',
        price: 23,
        width: 125
    }

    const product3 = 'Refrigerated display case'

    // saveDB(product)


    function getUserData<T extends { name: string }>(userData: T): void {
        const userName = userData?.name

        console.log(userName)
    }


    const userData = {
        name: 'Josh',
        lastname: 'silva',
        age: 30
    }

    // getUserData(userData)



    /** This interface uses generic types to assign value to the properties
     * wheel and engine, it means that, initialy, the values of both are undetermined
     * and we will be able to type them when use the interface
     */

    interface Car<T, U> {
        brand: string
        wheel: T
        engine: U
    }

    const Car: Car<string, number> = { brand: 'Ford', wheel: 'new', engine: 32 }
    const house: Car<number, boolean> = { brand: 'Ford', wheel: 23, engine: true }




    function getUsersAge<T, K extends keyof T>(obj: T, key: K): number {
        const yearOfBirthday = new Date().getFullYear() - Number(obj[key])
        return yearOfBirthday
    }


    const user = {
        name: 'Thiago',
        age: 30,
        height: 185
    }

    // console.log(getUsersAge(user, "age"))

    // keyof type operator

    type product = { name: string, price: number, isAvaliable: boolean }

    type productkey = keyof product


    function getPrice(obj: product, key: productkey) {
        console.log(obj[key])
    }

    const produto: product = {
        name: 'Caderno',
        price: 23,
        isAvaliable: false
    }

    // getPrice(produto, 'price')


    // Compartilhar tipos entre variavies
    const name: string = 'Igor'
    const sobrenome: typeof name = 'Fonseca'


    // Index access type
    type User = { name: string, age: number }

    type UserName = User['name']

    function getName(variable: UserName) {
        console.log(variable)
    }



    (() => {
        const name = 'Igor'
        const age = 23

        console.log(name, age)
    })()


























})()