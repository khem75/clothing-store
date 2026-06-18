"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { cart } = useCart();
    const { wishlist } = useWishlist();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">

                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    <Link href="/">
                        <h1 className="text-2xl font-black tracking-[6px] text-white">
                            NINE77
                        </h1>
                    </Link>

                    <div className="hidden md:flex gap-10 text-sm uppercase tracking-[2px] text-white">

                        <Link href="/" className="hover:text-zinc-400 transition">
                            Home
                        </Link>

                        <Link href="/shop" className="hover:text-zinc-400 transition">
                            Shop
                        </Link>

                        <Link href="/about" className="hover:text-zinc-400 transition">
                            About
                        </Link>

                        <Link href="/contact" className="hover:text-zinc-400 transition">
                            Contact
                        </Link>

                    </div>

                    <div className="hidden md:flex gap-6 text-white text-sm uppercase">

                        <Link
                            href="/wishlist"
                            className="hover:text-zinc-400 transition"
                        >
                            ❤️ Wishlist ({wishlist.length})
                        </Link>

                        <Link
                            href="/cart"
                            className="hover:text-zinc-400 transition"
                        >
                            🛒 Cart ({cart.length})
                        </Link>

                    </div>

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-white text-3xl"
                    >
                        ☰
                    </button>

                </div>

            </nav>

            <div
                className={`fixed top-0 right-0 h-screen w-full bg-black z-[999] transform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >

                <div className="flex justify-end p-8">

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-5xl"
                    >
                        ×
                    </button>

                </div>

                <div className="flex flex-col items-center justify-center gap-10 text-white uppercase text-3xl font-bold">

                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>

                    <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Shop
                    </Link>

                    <Link href="/about" onClick={() => setMenuOpen(false)}>
                        About
                    </Link>

                    <Link href="/contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>

                    <Link href="/wishlist" onClick={() => setMenuOpen(false)}>
                        ❤️ Wishlist ({wishlist.length})
                    </Link>

                    <Link href="/cart" onClick={() => setMenuOpen(false)}>
                        🛒 Cart ({cart.length})
                    </Link>

                </div>

            </div>
        </>
    );
}