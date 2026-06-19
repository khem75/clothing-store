"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";

export default function EditProductPage() {
    const router = useRouter();
    const params = useParams();

    const id = params.id;

    const [loading, setLoading] = useState(true);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            alert(error.message);
            return;
        }

        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setCategory(data.category);
        setStock(data.stock);

        setLoading(false);
    };

    const handleUpdate = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const { error } = await supabase
            .from("products")
            .update({
                name,
                price: Number(price),
                description,
                category,
                stock: Number(stock),
            })
            .eq("id", id);

        if (error) {
            alert(error.message);
            return;
        }

        alert("Product Updated");

        router.push("/admin");
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
        <div className="min-h-screen bg-black text-white p-10">

            <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-3xl">

                <h1 className="text-4xl font-black mb-8">
                    Edit Product
                </h1>

                <form
                    onSubmit={handleUpdate}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl"
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)
                        }
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl"
                    />

                    <input
                        type="number"
                        placeholder="Stock"
                        value={stock}
                        onChange={(e) =>
                            setStock(e.target.value)
                        }
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl"
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl"
                    />

                    <textarea
                        rows={5}
                        placeholder="Description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl"
                    />

                    <button
                        type="submit"
                        className="bg-white text-black px-8 py-4 rounded-full font-bold"
                    >
                        Update Product
                    </button>

                </form>

            </div>

        </div>
    );
}