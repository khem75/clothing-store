"use client";

import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";

export default function ProductActions({
    product,
}: {
    product: any;
}) {
    const [size, setSize] = useState("");

    const sizes = ["S", "M", "L", "XL"];

    return (
        <>
            <div className="mt-10">

                <h3 className="font-semibold mb-4">
                    Select Size
                </h3>

                <div className="flex gap-4">

                    {sizes.map((s) => (
                        <button
                            key={s}
                            onClick={() => setSize(s)}
                            className={`px-5 py-3 rounded-xl border transition ${size === s
                                ? "bg-white text-black border-white"
                                : "border-zinc-700 hover:border-white"
                                }`}
                        >
                            {s}
                        </button>
                    ))}

                </div>

                {size && (
                    <p className="text-zinc-400 mt-4">
                        Selected Size: {size}
                    </p>
                )}

            </div>

            <div className="flex gap-4 mt-12">

                <AddToCartButton
                    product={{
                        ...product,
                        size,
                    }}
                />

                <AddToWishlistButton
                    product={{
                        ...product,
                        size,
                    }}
                />

            </div>

        </>
    );
}