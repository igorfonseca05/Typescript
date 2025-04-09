const firstName = 'igor'
const age = 29
const adult = true


function fullName(data: string) {
    console.log(firstName + ' ' + data)
}


fullName('Fonseca')

// Aula Numbers

let weight: number // aqui adicionamos o tipo

weight = 85

console.log(weight)

const width: number = 36

// const letterWidth = width.toString()

// console.log('O comprimento do objeto é' + " " + letterWidth)


const sum = (num1: number, num2: number) => {
    return num1 + num2
}

sum(1, 3)
