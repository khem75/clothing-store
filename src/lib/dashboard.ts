import { supabase } from "./supabase";

export async function getDashboardStats() {
    const { count: totalOrders } = await supabase
        .from("orders")
        .select("*", { count: "exact", head: true });

    const { data: orders } = await supabase
        .from("orders")
        .select("total");

    const totalRevenue =
        orders?.reduce(
            (sum, order) => sum + Number(order.total),
            0
        ) || 0;

    const { count: totalProducts } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true });

    return {
        totalOrders: totalOrders || 0,
        totalRevenue,
        totalProducts: totalProducts || 0,
    };
}