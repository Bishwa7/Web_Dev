
interface User {
    id : string,
    name : string,
    age : number,
    email : string,
    password : string
}

type userProp = Pick<User, 'name' | 'email' | 'age'>

const displayUserProfile = (user : userProp) => {
    console.log(`Name = ${user.name}, Email = ${user.email}`)
}



const users: User[] = [
    {
        id : "sdscsdcsdc",
        name : "Bishwa",
        age : 24,
        email : "bishwa244",
        password : "Brocomeon"
    },
    {
        id : "sdsSddcsdc",
        name : "Bishwanath",
        age : 24,
        email : "bishwabro",
        password : "reallybro"
    }
]

users.forEach((user) => displayUserProfile(user))