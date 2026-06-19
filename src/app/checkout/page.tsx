"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabase";

export default function CheckoutPage() {
    const router = useRouter();

    const { cart, loaded, clearCart } = useCart();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [placingOrder, setPlacingOrder] = useState(false);

    if (!loaded) {
        return null;
    }

    const subtotal = cart.reduce(
        (total: number, item: any) =>
            total + item.price * item.quantity,
        0
    );

    const handlePlaceOrder = async () => {
        if (!name || !email || !phone || !city || !address) {
            alert("Please fill all fields");
            return;
        }

        if (cart.length === 0) {
            alert("Cart is empty");
            return;
        }

        setPlacingOrder(true);

        const { data: order, error } = await supabase
            .from("orders")
            .insert([
                {
                    customer_name: name,
                    email: email,
                    phone: phone,
                    city: city,
                    address: address,
                    total: subtotal,
                },
            ])
            .select()
            .single();

        if (error) {
            alert(error.message);
            setPlacingOrder(false);
            return;
        }

        const orderItems = cart.map((item: any) => ({
            order_id: order.id,
            product_name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.size || "",
        }));

        const { error: itemError } = await supabase
            .from("order_items")
            .insert(orderItems);

        if (itemError) {
            alert(itemError.message);
            setPlacingOrder(false);
            return;
        }

        clearCart();

        router.push("/order-success");
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

                <div className="text-center mb-16">
                    <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
                        NINE77 STORE
                    </p>

                    <h1 className="text-6xl md:text-8xl font-black mt-4">
                        Checkout
                    </h1>

                    <p className="text-zinc-400 mt-6">
                        Complete your order securely.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    <div className="bg-zinc-900 p-8 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-8">
                            Customer Information
                        </h2>

                        <div className="space-y-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
                            />

                            <input
                                type="text"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
                            />

                            <textarea
                                rows={4}
                                placeholder="Delivery Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
                            />

                        </div>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-3xl">

                        <h2 className="text-3xl font-bold mb-8">
                            Order Summary
                        </h2>

                        <div className="space-y-5">

                            {cart.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between"
                                >
                                    <span>
                                        {item.name} × {item.quantity}
                                    </span>

                                    <span>
                                        Rs. {item.price * item.quantity}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <div className="border-t border-zinc-700 my-8"></div>

                        <div className="flex justify-between text-2xl font-bold">
                            <span>Total</span>
                            <span>Rs. {subtotal}</span>
                        </div>

                        <button
                            onClick={handlePlaceOrder}
                            disabled={placingOrder}
                            className="w-full mt-8 bg-white text-black py-4 rounded-full font-bold hover:bg-zinc-200 transition"
                        >
                            {placingOrder
                                ? "Placing Order..."
                                : "Place Order"}
                        </button>

                        <Link
                            href="/cart"
                            className="block text-center mt-4 text-zinc-400 hover:text-white"
                        >
                            ← Back To Cart
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    );
}