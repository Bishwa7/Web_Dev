abstract class Person{
    // abstract class can have default methods (interface cannot)
    name: string;

    constructor(name:string)
    {
        this.name = name;
    }

    abstract greet(): string;

    // abstract class can have default functions (interface cannot)
    // concrete function, inherited by subclass
    hello(): void{
        console.log("Hi There")
    }
}


class Manager extends Person{

    constructor(name:string){
        super(name)
    }
    
    greet(){
        return `Hi ${this.name}`
    }
}


let user = new Manager ("John")
console.log(user.greet())

user.hello()