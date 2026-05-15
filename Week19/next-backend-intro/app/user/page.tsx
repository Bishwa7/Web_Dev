"use client";

import axios from "axios"
import { useEffect, useState } from "react"

interface UserData {
    name: string;
    email: string;
    address: {
        city: string;
        state: string;
        houseNumber: string;
    }
}

export default function User () {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<UserData>()

    useEffect(() => {
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
            .then( response => { 
                setData(response.data) 
                setLoading(false)
            })
    },[])

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <div>Name = {data?.name} </div>
            <div>Email = {data?.email} </div>
        </div>
    )
}

