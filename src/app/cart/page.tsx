"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        loaded,
    } = useCart();

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

                <h1 className="text-6xl font-black text-center mb-12">
                    Shopping Cart
                </h1>

                {cart.length === 0 ? (
                    <div className="text-center">

                        <p className="text-zinc-400 text-xl mb-8">
                            Your cart is empty.
                        </p>

                        <Link
                            href="/shop"
                            className="bg-white text-black px-8 py-4 rounded-full font-bold"
                        >
                            Continue Shopping
                        </Link>

                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2 space-y-6">

                            {cart.map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className="bg-zinc-900 rounded-3xl p-6 flex flex-col md:flex-row gap-6"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full md:w-44 h-44 object-cover rounded-2xl"
                                    />

                                    <div className="flex-1">

                                        <p className="text-zinc-500 text-sm uppercase">
                                            {item.category}
                                        </p>

                                        <h2 className="text-2xl font-bold mt-1">
                                            {item.name}
                                        </h2>

                                        {item.size && (
                                            <p className="text-zinc-400 mt-2">
                                                Size:{" "}
                                                <span className="font-semibold text-white">
                                                    {item.size}
                                                </span>
                                            </p>
                                        )}

                                        <p className="text-zinc-400 mt-3">
                                            {item.description}
                                        </p>

                                        <p className="text-xl font-bold mt-4">
                                            Rs. {item.price}
                                        </p>

                                        <div className="flex items-center gap-4 mt-5">

                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700"
                                            >
                                                -
                                            </button>

                                            <span className="font-bold text-lg">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700"
                                            >
                                                +
                                            </button>

                                        </div>

                                        <p className="text-green-400 mt-4 font-semibold">
                                            Item Total: Rs. {item.price * item.quantity}
                                        </p>

                                    </div>

                                    <button
                                        onClick={() => removeFromCart(index)}
                                        className="text-red-400 hover:text-red-300"
                                    >
                                        Remove
                                    </button>

                                </div>
                            ))}

                        </div>

                        <div>

                            <div className="bg-zinc-900 rounded-3xl p-8">

                                <h2 className="text-3xl font-bold mb-6">
                                    Order Summary
                                </h2>

                                <div className="flex justify-between mb-4">
                                    <span>Subtotal</span>
                                    <span>Rs. {subtotal}</span>
                                </div>

                                <div className="flex justify-between mb-6">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>

                                <div className="border-t border-zinc-700 pt-6 flex justify-between font-bold text-xl">
                                    <span>Total</span>
                                    <span>Rs. {subtotal}</span>
                                </div>

                                <Link
                                    href="/checkout"
                                    className="block text-center w-full mt-8 bg-white text-black py-4 rounded-full font-bold hover:bg-zinc-200 transition"
                                >
                                    Proceed To Checkout
                                </Link>

                            </div>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}