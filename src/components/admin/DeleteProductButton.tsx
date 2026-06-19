"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DeleteProductButton({
    id,
}: {
    id: number;
}) {
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Delete this product?"
        );

        if (!confirmed) return;

        const { error } = await supabase
            .from("products")
            .delete()
            .eq("id", id);

        if (error) {
            alert(error.message);
            return;
        }

        alert("Product Deleted");

        router.refresh();
        window.location.reload();
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
            Delete
        </button>
    );
}