"use strict";
(() => {
    // 97. Campos em classes
    class User {
    }
    const user = new User();
    user.name = 'Igor';
    // 98. Constructor
    class UserData {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }
    const user2 = new UserData('Igor', 'igor@gmail.com');
    // 99. Propriedades readonly
    class Car {
        constructor(name) {
            this.wheel = 4;
            this.name = name;
        }
    }
    const fusca = new Car('Fusca');
    // console.log(fusca)
    // 100. Herança e super
    // class Orders {
    //     readonly id
    //     name
    //     quantity
    //     constructor(id: number, name: string, quantity: number) {
    //         this.id = id
    //         this.name = name,
    //             this.quantity = quantity
    //     }
    // }
    class Products {
        constructor(prodId, name, price) {
            this.prodId = prodId,
                this.name = name,
                this.price = price;
        }
    }
    // class Orders extends Products {
    //     idOrder
    //     quantity
    //     constructor(idOrder: number, quantity: number, prodId: number, name: string, price: number,) {
    //         super(prodId, name, price)
    //         this.idOrder = idOrder
    //         this.quantity = quantity
    //     }
    // }
    // const order = new Orders(12, 2, 45, 'Caderno', 12)
    // console.log(order)
    // 101. Métodos - They are like intenal classes functions
    class Orders extends Products {
        constructor(idOrder, quantity, prodId, name, price) {
            super(prodId, name, price);
            this.idOrder = idOrder;
            this.quantity = quantity;
        }
        total() {
            console.log(this.quantity * this.price);
        }
    }
    // const order = new Orders(1, 2, 23, 'Caderno', 15.63)
    // console.log(order)
    // order.total()
    // 102. O this em classes
    // 103. Getters
    /** Getters é usado para retornar dados para o usuário
     * porém, podemos editar esse dado antes dele ser enviado
     * essa é sacada do getter
     */
    // class Person {
    //     name
    //     lastName
    //     yearOfBithday
    //     constructor(name: string, lastName: string, yearOfBithday: number) {
    //         this.name = name
    //         this.lastName = lastName
    //         this.yearOfBithday = yearOfBithday
    //     }
    //     get age() {
    //         return new Date().getFullYear() - this.yearOfBithday
    //     }
    // }
    // const carol = new Person('Carol', 'Fonseca', 1995)
    // console.log(carol.age)
    // 104. Setters
    class Person {
        constructor(name, lastName, yearOfBithday) {
            this.name = name;
            this.lastName = lastName;
            this.yearOfBithday = yearOfBithday;
        }
        get age() {
            return new Date().getFullYear() - this.yearOfBithday;
        }
        set addUserName(value) {
            if (value === '') {
                return;
            }
            this.name = value.toUpperCase();
        }
    }
    const carol = new Person("Carol", "Fonseca", 1995);
    class Produto {
        constructor(id, name, quantity, price) {
            this.id = id;
            this.name = name;
            this.quantity = quantity;
            this.price = price;
        }
        get getTotal() {
            return this.quantity * this.price;
        }
    }
    const prod = new Produto(1, 'Cadeira', 2, 56);
    // console.log(prod.getTotal)
    // 106. Override de métodos
    // Um override é usado para substituir o metodo de uma classe copiando ele dentro de uma subclasse
    // mas alterando sua lógica interna
    class ClassMae {
        falaAlgo() {
            console.log('oi');
        }
    }
    class ClassFilha extends ClassMae {
        falaAlgo() {
            console.log('algo');
        }
    }
    const test = new ClassFilha();
    // test.falaAlgo()
    // 107. Sobre a visibilidade de propriedades e métodos
    // 108. Visibilidade public
    class GetId {
        constructor() {
            this.id = 'as133asdf135d';
        }
    }
    const id = new GetId();
    console.log(id.id);
    // 109. Visibilidade protected
    class Test {
        constructor() {
            this.userName = 'Lucas Matheus Pereira';
        }
    }
    class OutroTest extends Test {
        showUserName() {
            console.log(this.userName);
        }
    }
    const inst = new OutroTest();
    inst.showUserName();
    // 110. Visibilidade private
    class Private {
        constructor() {
            this.name = 'Igor';
        }
        showName() {
            console.log(this.name);
        }
        getFirstletter() {
            console.log(this.name[0]);
        }
        showPrivateMethod() {
            this.getFirstletter();
        }
    }
    const privateInst = new Private();
    privateInst.showName();
    privateInst.showPrivateMethod();
    // console.log(privateInst.name)
    // 111. Static members
    // 112. Generic class
    // 113. Parameter properties
    // 114. Class expressions
    // 115. Classe abstrata
    // 116. Relação entre classes
    // 117. Exercício
})();
