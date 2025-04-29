
// 73 - O que são Object Types? 
/** Object type são dados que tem como tipo objeto */

(() => {

    const user = { name: 'igor', age: 30 }

})();

// 74. Interface como parâmetro

/** Aqui aprendemos como podemos simplificar o código usando o interface para tipar
 * dados ao invés de escrever item por item do objeto
 */


(() => {

    interface ProductsProps {
        name: string,
        price: number,
        isAvaliable: boolean
    }

    function createProduct(product: ProductsProps): void {
        console.log(`The ${product.name} is avaliable? ${product.isAvaliable}`)
    }

    const item: ProductsProps = {
        name: 'Caderno',
        price: 22.30,
        isAvaliable: true
    }

    // createProduct(item)

})();



/**Podemos passar campos opcionais dentro de uma interface também */

// 75. Interface com parâmetro opcional

(() => {

    interface UserProps {
        name: string,
        role?: string
    }

    function showUser(user: UserProps): void {
        console.log(user.role)
        console.log(`The user ${user.name} is admin? ${user.role ?? true}`)
    }

    const user: UserProps = {
        name: 'Igor',
        role: 'admn'
    }

    // showUser(user)

})();



// 76. Propriedades readonly
// 77. Index Signature
// 78. Herança de interfaces
// 79. Intersection types
// 80. Readonly array
// 81. Tuplas
// 82. Tuplas com readonly
// 83. Conclusão da seção