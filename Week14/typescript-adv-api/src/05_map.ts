
interface User {
    name : string,
    age : number,
    email : string
}


const usersMap = new Map<string, User>();

usersMap.set("abc@1", {name: "Bishwanath", age: 24, email: "abc@1"})
usersMap.set("def@2", {name: "Brother", age: 20, email: "def@2"})

const user1 = usersMap.get("abc@1")
console.log(user1)