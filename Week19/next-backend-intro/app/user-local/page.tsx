import axios from "axios"

interface UserData {
    name: string;
    email: string;
}


export default async function LocalUser() {

    const response = await axios.get("http://localhost:3000/api/v1/user/details")

    const data : UserData = response.data

    return (
        <div>
            <h1>User Details from Local API</h1>
            <div>Name = {data.name}</div>
            <div>Email = {data.email} </div>
        </div>
    ) 
}