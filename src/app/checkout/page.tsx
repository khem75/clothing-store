"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
    const { cart, loaded } = useCart();

    if (!loaded) {
        return null;
    }

    const subtotal = cart.reduce(
        (total: number, item: any) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-black text-white">

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
                        NINE77 STORE
                    </p>

                    <h1 className="text-6xl md:text-8xl font-black mt-4">
                        Checkout
                    </h1>

                    <p className="text-zinc-400 mt-6">
                        Complete your order securely.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Customer Information */}
                    <div className="bg-zinc-900 p-8 rounded-3xl">

                        <h2 className="text-3xl font-bold mb-8">
                            Customer Information
                        </h2>

                        <div className="space-y-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4 focus:border-white outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4 focus:border-white outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4 focus:border-white outline-none"
                            />

                            <input
                                type="text"
                                placeholder="City"
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4 focus:border-white outline-none"
                            />

                            <textarea
                                placeholder="Delivery Address"
                                rows={4}
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4 focus:border-white outline-none"
                            />

                        </div>

                    </div>

                    {/* Order Summary */}
                    <div className="bg-zinc-900 p-8 rounded-3xl">

                        <h2 className="text-3xl font-bold mb-8">
                            Order Summary
                        </h2>

                        <div className="space-y-5">

                            {cart.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between"
                                >
                                    <span>
                                        {item.name} × {item.quantity}
                                    </span>

                                    <span>
                                        Rs. {item.price * item.quantity}
                                    </span>
                                </div>
                            ))}

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>Rs. 0</span>
                            </div>

                        </div>

                        <div className="border-t border-zinc-700 my-8"></div>

                        <div className="flex justify-between text-2xl font-bold">
                            <span>Total</span>
                            <span>Rs. {subtotal}</span>
                        </div>

                        <Link
                            href="/order-success"
                            className="block text-center w-full mt-8 bg-white text-black py-4 rounded-full font-bold hover:bg-zinc-200 transition"
                        >
                            Place Order
                        </Link>

                        <Link
                            href="/cart"
                            className="block text-center mt-4 text-zinc-400 hover:text-white"
                        >
                            ← Back To Cart
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}