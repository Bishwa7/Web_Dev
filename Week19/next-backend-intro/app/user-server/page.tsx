import axios from "axios";


interface UserData {
    name: string;
    email: string;
    address: {
        city: string;
        state: string;
        houseNumber: string;
    }
}



export default async function UserServer () {

    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")

    const data : UserData = response.data

    return (
        <div>
            <div>Server Component Data</div>

            <div>Name = {data.name}</div>
            <div>Email = {data.email} </div>
        </div>
    )
}