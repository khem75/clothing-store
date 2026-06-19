"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const { error } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        if (error) {
            alert(error.message);
            return;
        }

        router.push("/");
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <form
                onSubmit={handleLogin}
                className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md"
            >
                <h1 className="text-4xl font-black mb-8 text-center">
                    Customer Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="w-full p-4 bg-black border border-zinc-700 rounded-xl mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="w-full p-4 bg-black border border-zinc-700 rounded-xl mb-6"
                />

                <button
                    type="submit"
                    className="w-full bg-white text-black py-4 rounded-xl font-bold"
                >
                    Login
                </button>
            </form>
        </div>
    );
}