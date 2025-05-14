
// 86. Revisão generics

/** Usamos generics quando a função pode aceitar qualquer tipo de parametro
 * é uma prática mais interessante que o any, que teria um efeito semelhante
 */

function showData<T>(arg: T): string {
    return `O dado é ${arg}`
}

// 87. Constraints em gererics

/** Constraints ajudam a limitar os tipos de dados aceitos */

(() => {

    function getNome<T extends { name: string }>(obj: T) {
        return `o Campo recebe o nome de ${obj.name}`
    }

    const name = { name: 'Igor' }
    const prod = { label: 'Caderno' }

    getNome(name)
    // getNome(prod)


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

(() => {


})();

// 90. Keyof type operator

// 91. Typeof type operator

// 92. Indexed access types

// 93. Conditional types

// 94. Template literals type

// 95. Conclusão da seção



