"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
    const {
        wishlist,
        removeFromWishlist,
        loaded,
    } = useWishlist();

    const { addToCart } = useCart();

    if (!loaded) {
        return null;
    }

    return (
        <div className="min-h-screen bg-black text-white">

            <section className="pt-36 pb-16 text-center">

                <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
                    NINE77 STORE
                </p>

                <h1 className="text-6xl md:text-8xl font-black mt-4">
                    Wishlist
                </h1>

                <p className="text-zinc-400 mt-6">
                    Save your favorite products for later.
                </p>

            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24">

                {wishlist.length === 0 ? (

                    <div className="text-center">

                        <p className="text-zinc-400 text-xl mb-8">
                            Your wishlist is empty.
                        </p>

                        <Link
                            href="/shop"
                            className="bg-white text-black px-8 py-4 rounded-full font-bold"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-3 gap-8">

                        {wishlist.map((product: any) => (
                            <div
                                key={product.id}
                                className="bg-zinc-900 rounded-3xl overflow-hidden group"
                            >

                                <div className="overflow-hidden">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700"
                                    />

                                </div>

                                <div className="p-6">

                                    <h2 className="text-2xl font-bold">
                                        {product.name}
                                    </h2>

                                    {product.size && (
                                        <p className="text-zinc-400 mt-2">
                                            Size:{" "}
                                            <span className="font-semibold text-white">
                                                {product.size}
                                            </span>
                                        </p>
                                    )}

                                    <p className="text-zinc-400 mt-2">
                                        Rs. {product.price}
                                    </p>

                                    <div className="flex gap-3 mt-6">

                                        <button
                                            onClick={() => addToCart(product)}
                                            className="flex-1 bg-white text-black py-3 rounded-full font-semibold hover:bg-zinc-200 transition"
                                        >
                                            Add To Cart
                                        </button>

                                        <button
                                            onClick={() => removeFromWishlist(product.id)}
                                            className="px-5 py-3 border border-red-500 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                    <Link
                                        href={`/product/${product.id}`}
                                        className="block text-center mt-4 text-zinc-400 hover:text-white"
                                    >
                                        View Product
                                    </Link>

                                </div>

                            </div>
                        ))}

                    </div>

                )}

            </section>

        </div>
    );
}