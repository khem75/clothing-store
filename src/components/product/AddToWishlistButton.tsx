"use client";

import { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "next/navigation";

export default function AddToWishlistButton({
    product,
}: {
    product: any;
}) {
    const { addToWishlist } = useWishlist();
    const router = useRouter();

    const [added, setAdded] = useState(false);

    const handleWishlist = () => {
        if (!product.size) {
            alert("Please select a size");
            return;
        }

        addToWishlist(product);

        setAdded(true);

        setTimeout(() => {
            router.push("/wishlist");
        }, 1000);
    };

    return (
        <button
            onClick={handleWishlist}
            className={`px-10 py-4 rounded-full font-bold transition ${added
                ? "bg-pink-500 text-white"
                : "border border-white hover:bg-white hover:text-black"
                }`}
        >
            {added ? "❤️ View Wishlist" : "Wishlist"}
        </button>
    );
}