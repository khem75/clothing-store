"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AccountPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo:
                    typeof window !== "undefined"
                        ? `${window.location.origin}/profile`
                        : undefined,
            },
        });

        if (error) {
            alert(error.message);
        }
    };

    const handleContinue = async () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        setLoading(true);

        const { error: loginError } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        if (!loginError) {
            router.push("/profile");
            router.refresh();
            return;
        }

        const { error: signupError } =
            await supabase.auth.signUp({
                email,
                password,
            });

        setLoading(false);

        if (signupError) {
            alert(signupError.message);
            return;
        }

        router.push("/profile");
        router.refresh();
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

            <div className="w-full max-w-md">

                <h1 className="text-5xl font-black text-center mb-4">
                    NINE77
                </h1>

                <p className="text-center text-zinc-400 mb-10">
                    Sign in or create an account
                </p>

                <button
                    onClick={signInWithGoogle}
                    className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition mb-6"
                >
                    Continue with Google
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px bg-zinc-700 flex-1"></div>
                    <span className="text-zinc-500 text-sm">OR</span>
                    <div className="h-px bg-zinc-700 flex-1"></div>
                </div>

                <div className="space-y-4">

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                    />

                    <button
                        onClick={handleContinue}
                        disabled={loading}
                        className="w-full bg-zinc-900 border border-zinc-700 py-4 rounded-xl font-bold hover:bg-zinc-800 transition"
                    >
                        {loading
                            ? "Please Wait..."
                            : "Continue"}
                    </button>

                </div>

            </div>

        </div>
    );
}