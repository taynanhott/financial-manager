"use client"

import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../services/firebase";
import Image from "next/image";

export default function SingIn() {
    const [user, setUser] = useState<User>({} as User)

    function handleGoogleSingIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
                window.location.href = '/gerenciar/dashboard';
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen max-w-2xl mx-auto ">
            <div className="border p-6 grid grid-cols-2 rounded-lg border-black bg-gradient-to-r from-slate-800 to-slate-600 text-white h-96 lg:h-72 mx-2 shadow-md shadow-gray-600">
                <div className="flex items-center justify- text-center col-span-2 md:col-span-1 lg:col-span-1 px-4">
                    <p className="pointer-events-none font-poppins-bold text-4xl">Gerenciador Financeiro</p>
                </div>
                <div className="flex flex-col justify-center col-span-2 md:col-span-1 lg:col-span-1 p-4 border-l border-t border-l-transparent md:border-l-slate-400 md:border-t-transparent lg:border-l-slate-400 lg:border-t-transparent">
                    <p className="pointer-events-none font-poppins-bold mb-8 text-lg">Acesse o sistema utilizando sua conta Google</p>
                    <button className="cursor-pointer flex justify-center items-center px-6 py-2 bg-gradient-to-r border border-slate-600 from-slate-800 to-slate-500 hover:from-slate-600 hover:to-slate-400 font-poppins-bold rounded-sm" onClick={handleGoogleSingIn}>
                        <Image
                            className="inline-block mr-2"
                            src='/image/logo/google.png'
                            width={25}
                            height={25}
                            alt=""
                        />
                        Entrar com o Google
                    </button>
                </div>
            </div>
        </div>
    )
}