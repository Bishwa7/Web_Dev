"use client";

import axios from "axios";
import { useState } from "react";




export default function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignup() {
        try {

            const response = await axios.post("/api/v1/user/details", {
                username,
                password
            });

            console.log(response.data.message);

        } catch (err) {

            console.error(err || "Signup failed");

        }
    }



    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="block min-w-sm max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold text-rose-300 flex justify-center">
                            Sign Up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username" placeholder="Bishwanath" onChange={(e) => setUsername(e.target.value)} />
                        <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleSignup} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer active:scale-95">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}