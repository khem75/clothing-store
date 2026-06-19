"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "@/lib/products";

export default function ShopPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();
            setProducts(data);
        }

        loadProducts();
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-black text-white">

            <section className="pt-32 pb-16 text-center">

                <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
                    NINE77 STORE
                </p>

                <h1 className="text-6xl md:text-8xl font-black mt-4">
                    Shop
                </h1>

                <p className="text-zinc-400 mt-6">
                    Discover the latest collection.
                </p>

            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="mb-10 flex flex-col md:flex-row gap-4">

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-xl flex-1 outline-none"
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-xl outline-none"
                    >
                        <option>All</option>
                        <option>Shirts</option>
                        <option>Pants</option>
                        <option>Hoodies</option>
                        <option>T-Shirts</option>
                        <option>Jackets</option>
                    </select>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-zinc-900 rounded-3xl overflow-hidden group"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
                                />

                            </div>

                            <div className="p-6">

                                <p className="text-zinc-500 text-sm uppercase">
                                    {product.category}
                                </p>

                                <h2 className="text-2xl font-bold mt-2">
                                    {product.name}
                                </h2>

                                <p className="text-zinc-400 mt-2">
                                    Rs. {product.price}
                                </p>

                                <Link
                                    href={`/product/${product.id}`}
                                    className="block text-center mt-6 bg-white text-black py-3 rounded-full font-semibold hover:bg-zinc-200 transition"
                                >
                                    View Product
                                </Link>

                            </div>

                        </div>
                    ))}

                </div>

            </section>

        </div>
    );
}