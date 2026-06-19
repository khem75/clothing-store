import Link from "next/link";
import { getOrder, getOrderItems } from "@/lib/order";
import OrderStatus from "@/components/admin/OrderStatus";

export default async function OrderDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const order = await getOrder(id);
    const items = await getOrderItems(id);

    if (!order) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
                Order Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-10">

            <div className="flex justify-between items-center mb-10">

                <h1 className="text-5xl font-black">
                    Order #{order.id}
                </h1>

                <Link
                    href="/admin/orders"
                    className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition"
                >
                    Back To Orders
                </Link>

            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 mb-8">

                <h2 className="text-2xl font-bold mb-6">
                    Customer Details
                </h2>

                <div className="space-y-3">

                    <p>
                        <strong>Name:</strong>{" "}
                        {order.customer_name}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {order.email}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {order.phone}
                    </p>

                    <p>
                        <strong>City:</strong>{" "}
                        {order.city}
                    </p>

                    <p>
                        <strong>Address:</strong>{" "}
                        {order.address}
                    </p>

                    <p>
                        <strong>Total:</strong>{" "}
                        Rs. {order.total}
                    </p>

                    <div className="flex items-center gap-4">

                        <strong>Status:</strong>

                        <OrderStatus
                            currentStatus={
                                order.status || "Pending"
                            }
                        />

                    </div>

                </div>

            </div>

            <div className="bg-zinc-900 rounded-3xl p-8">

                <h2 className="text-2xl font-bold mb-6">
                    Ordered Products
                </h2>

                <table className="w-full">

                    <thead>

                        <tr className="border-b border-zinc-700">

                            <th className="text-left py-4">
                                Product
                            </th>

                            <th className="text-left py-4">
                                Size
                            </th>

                            <th className="text-left py-4">
                                Quantity
                            </th>

                            <th className="text-left py-4">
                                Price
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {items.map((item: any) => (

                            <tr
                                key={item.id}
                                className="border-b border-zinc-800"
                            >

                                <td className="py-4">
                                    {item.product_name}
                                </td>

                                <td className="py-4">
                                    {item.size || "-"}
                                </td>

                                <td className="py-4">
                                    {item.quantity}
                                </td>

                                <td className="py-4">
                                    Rs. {item.price}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}