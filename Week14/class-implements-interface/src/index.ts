interface Person {
    name : string,
    age : number,
    isLegal() : boolean;
}


class Manager implements Person{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    isLegal(): boolean {
        return this.age>18
    }
}



let user = new Manager("John", 30)

console.log(user.name)
console.log(user.isLegal())