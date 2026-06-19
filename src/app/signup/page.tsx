"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function SignupPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        setLoading(true);

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            alert(error.message);
            return;
        }

        alert("Account created successfully");

        router.push("/login");
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">

            <form
                onSubmit={handleSignup}
                className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md"
            >
                <h1 className="text-4xl font-black mb-8 text-center">
                    Sign Up
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="w-full bg-black border border-zinc-700 p-4 rounded-xl mb-4"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="w-full bg-black border border-zinc-700 p-4 rounded-xl mb-6"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-black py-4 rounded-xl font-bold"
                >
                    {loading
                        ? "Creating Account..."
                        : "Sign Up"}
                </button>

                <Link
                    href="/login"
                    className="block text-center mt-4 text-zinc-400"
                >
                    Already have an account?
                </Link>

            </form>

        </div>
    );
}