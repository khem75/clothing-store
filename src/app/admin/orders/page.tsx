import Link from "next/link";
import { getOrders } from "@/lib/orders";

export default async function OrdersPage() {
    const orders = await getOrders();

    return (
        <div className="min-h-screen bg-black text-white p-10">

            <div className="flex justify-between items-center mb-10">

                <h1 className="text-5xl font-black">
                    Orders Management
                </h1>

                <Link
                    href="/admin"
                    className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition"
                >
                    Back To Admin
                </Link>

            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 overflow-x-auto">

                {orders.length === 0 ? (

                    <div className="text-center py-10">

                        <p className="text-zinc-400 text-xl">
                            No Orders Yet
                        </p>

                    </div>

                ) : (

                    <table className="w-full">

                        <thead>

                            <tr className="border-b border-zinc-700">

                                <th className="text-left py-4">Order ID</th>
                                <th className="text-left py-4">Customer</th>
                                <th className="text-left py-4">Email</th>
                                <th className="text-left py-4">Phone</th>
                                <th className="text-left py-4">City</th>
                                <th className="text-left py-4">Address</th>
                                <th className="text-left py-4">Total</th>
                                <th className="text-left py-4">Status</th>
                                <th className="text-left py-4">Date</th>

                            </tr>

                        </thead>

                        <tbody>

                            {orders.map((order: any) => (

                                <tr
                                    key={order.id}
                                    className="border-b border-zinc-800"
                                >

                                    <td className="py-4">
                                        <Link
                                            href={`/admin/orders/${order.id}`}
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            #{order.id}
                                        </Link>
                                    </td>

                                    <td className="py-4">
                                        {order.customer_name}
                                    </td>

                                    <td className="py-4">
                                        {order.email}
                                    </td>

                                    <td className="py-4">
                                        {order.phone}
                                    </td>

                                    <td className="py-4">
                                        {order.city}
                                    </td>

                                    <td className="py-4">
                                        {order.address}
                                    </td>

                                    <td className="py-4 font-bold">
                                        Rs. {order.total}
                                    </td>

                                    <td className="py-4">
                                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                                            {order.status || "Pending"}
                                        </span>
                                    </td>

                                    <td className="py-4">
                                        {new Date(
                                            order.created_at
                                        ).toLocaleDateString()}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </div>

        </div>
    );
}