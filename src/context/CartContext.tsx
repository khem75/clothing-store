"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

const CartContext = createContext<any>(null);

export function CartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cart, setCart] = useState<any[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            const parsed = JSON.parse(savedCart);

            const fixedCart = parsed.map((item: any) => ({
                ...item,
                quantity: item.quantity || 1,
            }));

            setCart(fixedCart);
        }

        setLoaded(true);
    }, []);

    useEffect(() => {
        if (loaded) {
            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );
        }
    }, [cart, loaded]);

    const addToCart = (product: any) => {
        setCart((prev: any[]) => {

            const existing = prev.find(
                (item) =>
                    item.id === product.id &&
                    item.size === product.size
            );

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id &&
                        item.size === product.size
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    const increaseQuantity = (id: number) => {
        setCart((prev: any[]) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setCart((prev: any[]) =>
            prev
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (index: number) => {
        setCart((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                loaded,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}