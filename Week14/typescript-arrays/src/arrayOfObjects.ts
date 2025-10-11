
interface User{
    firstName : string,
    lastName : string,
    age : number
}


function filterUsers(users : User[]) : User[]
{
    // let ans = []; 

    // for (let i = 0; i < user.length; i++) {
    //     if (user[i].age >= 18) { 
    //         ans.push(user[i]); 
    //     }
    // }
    // return ans; 
    return users.filter(x => x.age >= 18)
}

const usersArray: User[] = [
    {
        firstName : "Bishwanath",
        lastName : "Paul",
        age : 24,
        // number : 324     // This will give error because type assertion const usersArray: User[]
    },
    {
        firstName : "Random",
        lastName : "Bro",
        age : 17,
        // number : 324     // This will give error because type assertion const usersArray: User[]
    },
    {
        firstName : "Random2",
        lastName : "Brother",
        age : 20,
        // number : 324     // This will give error because type assertion const usersArray: User[]
    },
    {
        firstName : "Random3",
        lastName : "Bruh",
        age : 30,
        // number : 324     // This will give error because type assertion const usersArray: User[]
    },
    {
        firstName : "Random4",
        lastName : "Bruv",
        age : 16,
        // number : 324     // This will give error because type assertion const usersArray: User[]
    }
]


const filteredUsers = filterUsers(usersArray)
console.log(filteredUsers)