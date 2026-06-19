import { supabase } from "./supabase";

export async function getOrder(id: string) {
    const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("id", Number(id))
        .single();

    if (error) {
        console.log("ORDER ERROR:", error);
        return null;
    }

    return data;
}

export async function getOrderItems(orderId: string) {
    const { data, error } = await supabase
        .from("order_items")
        .select("*")
        .eq("order_id", Number(orderId));

    if (error) {
        console.log("ITEM ERROR:", error);
        return [];
    }

    return data || [];
}