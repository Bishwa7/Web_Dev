
interface User {
    firstName : string,
    lastName : string,
    age : number
}

interface Address{
    street : string,
    city : string,
    country : string,
    pincode : number
}


interface Users{
    userInfo : User,
    userAddress : Address
}


function greet (props: Users)
{
    console.log(`Hello ${props.userInfo.firstName}`)
    console.log(`Your pincode = ${props.userAddress.pincode}`)
}


let one: Users = {
  userInfo: {
    firstName: "Bishwanath",
    lastName: "Paul",
    age: 24
  },
  userAddress: {
    street: "Bruh1",
    city: "Bruh2",
    country: "India",
    pincode: 123456
  }
};


try {
  greet(one);
} catch (e) {
  console.error("Error caught:", e);
}

