"use client";

import { useState } from "react";

export default function OrderStatus({
    currentStatus,
}: {
    currentStatus: string;
}) {
    const [status, setStatus] =
        useState(currentStatus);

    return (
        <select
            value={status}
            onChange={(e) =>
                setStatus(e.target.value)
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