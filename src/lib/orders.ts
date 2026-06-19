import { supabase } from "./supabase";

export async function getOrders() {
    const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.error(error);
        return [];
    }

    return data || [];
}