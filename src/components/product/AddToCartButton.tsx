"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function AddToCartButton({
    product,
}: {
    product: any;
}) {
    const { addToCart } = useCart();
    const router = useRouter();

    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        if (!product.size) {
            alert("Please select a size");
            return;
        }

        addToCart(product);

        setAdded(true);

        setTimeout(() => {
            router.push("/cart");
        }, 1000);
    };

    return (
        <button
            onClick={handleAddToCart}
            className={`px-10 py-4 rounded-full font-bold transition ${added
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-zinc-200"
                }`}
        >
            {added ? "✓ View Cart" : "Add To Cart"}
        </button>
    );
}