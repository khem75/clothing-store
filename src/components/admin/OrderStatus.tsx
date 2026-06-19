"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function OrderStatus({
    orderId,
    currentStatus,
}: {
    orderId: number;
    currentStatus: string;
}) {
    const [status, setStatus] =
        useState(currentStatus);

    const handleChange = async (
        newStatus: string
    ) => {
        setStatus(newStatus);

        const { error } = await supabase
            .from("orders")
            .update({
                status: newStatus,
            })
            .eq("id", orderId);

        if (error) {
            alert(error.message);
        }
    };

    return (
        <select
            value={status}
            onChange={(e) =>
                handleChange(e.target.value)
            }
            className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white"
        >
            <option value="Pending">
                Pending
            </option>

            <option value="Processing">
                Processing
            </option>

            <option value="Shipped">
                Shipped
            </option>

            <option value="Delivered">
                Delivered
            </option>

            <option value="Cancelled">
                Cancelled
            </option>
        </select>
    );
}