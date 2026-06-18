"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

const WishlistContext = createContext<any>(null);

export function WishlistProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [wishlist, setWishlist] = useState<any[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const savedWishlist =
            localStorage.getItem("wishlist");

        if (savedWishlist) {
            setWishlist(JSON.parse(savedWishlist));
        }

        setLoaded(true);
    }, []);

    useEffect(() => {
        if (loaded) {
            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );
        }
    }, [wishlist, loaded]);

    const addToWishlist = (product: any) => {
        const exists = wishlist.find(
            (item) => item.id === product.id
        );

        if (!exists) {
            setWishlist((prev) => [...prev, product]);
        }
    };

    const removeFromWishlist = (id: number) => {
        setWishlist((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                loaded,
                addToWishlist,
                removeFromWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}