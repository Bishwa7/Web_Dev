
interface User {
    id : string,
    name : string
}

// type Usersss = {[key: string] : User}


type Users = Record<string, User>


const users : Users = {
    "abc@1" : {id: "abc@1", name: "Bishwanath"},
    "def@2" : {id: "def@2", name: "Brother"}
}


console.log(users["abc@1"])