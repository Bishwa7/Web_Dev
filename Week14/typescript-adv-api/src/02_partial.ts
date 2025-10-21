
interface User1 {
    name : string,
    email : string,
    image : string
}

// First, pick two properties (name and email) from the User1 interface
type updatedProps = Pick<User1 , 'name' | 'email' | 'image'>

// Next, make all the properties of the picked type (name, email) optional
// This line would make all properties in the User1 interface optional

type updatedPropsOptional = Partial<updatedProps>



// Example usage of the UpdatePropsOptional type
// All the properties are not provided in some users, but it's valid because all properties are optional
const users : updatedPropsOptional[] = [
    {
        name : "Bishwanath",
        email : "Bishwa244",
        image : "imagelink"
    },
    {
        name : "Bishwa",
        email : "Bishwabro"
    },
    {
        email : "Brogetalife"
    }
]


console.log(users[0])
console.log(users[1])
console.log(users[2])




// function updateUser(updatedProps : updatedPropsOptional){

// }

// users.forEach((user) => updateUser(user))
