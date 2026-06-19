"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
    const router = useRouter();

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) {
                router.push("/account");
                return;
            }

            setUser(user);
            setLoading(false);
        };

        getUser();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
        router.refresh();
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-32 px-6">

            <div className="max-w-3xl mx-auto bg-zinc-900 rounded-3xl p-10">

                <h1 className="text-5xl font-black mb-10">
                    My Profile
                </h1>

                <div className="space-y-6">

                    <div>
                        <p className="text-zinc-500">
                            Email
                        </p>

                        <p className="text-xl">
                            {user.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-zinc-500">
                            User ID
                        </p>

                        <p className="text-sm break-all">
                            {user.id}
                        </p>
                    </div>

                </div>

                <div className="flex gap-4 mt-10">

                    <Link
                        href="/profile/orders"
                        className="bg-white text-black px-6 py-3 rounded-full font-bold"
                    >
                        My Orders
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 px-6 py-3 rounded-full font-bold"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
}