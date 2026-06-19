"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">

            <div className="text-center max-w-2xl px-6">

                <div className="text-8xl mb-6">
                    🎉
                </div>

                <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
                    ORDER CONFIRMED
                </p>

                <h1 className="text-6xl md:text-7xl font-black mt-6">
                    Thank You
                </h1>

                <p className="text-zinc-400 text-lg mt-6">
                    Your order has been placed successfully.
                    We appreciate your support for NINE77.
                </p>

                <div className="bg-zinc-900 rounded-3xl p-6 mt-10">

                    <p className="text-zinc-500">
                        Order Status
                    </p>

                    <h2 className="text-3xl font-bold mt-2 text-green-400">
                        Order Received
                    </h2>

                </div>

                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

                    <Link
                        href="/"
                        className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition"
                    >
                        Continue Shopping
                    </Link>

                    <Link
                        href="/"
                        className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Back To Home
                    </Link>

                </div>

            </div>

        </div>
    );
}