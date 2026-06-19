import Link from "next/link";
import { getProducts } from "@/lib/products";
import DeleteProductButton from "@/components/admin/DeleteProductButton";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-black text-white p-10">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">

                <h1 className="text-5xl font-black">
                    NINE77 Admin Panel
                </h1>

                <LogoutButton />

            </div>

            {/* Products Section */}
            <div className="bg-zinc-900 rounded-3xl p-8">

                <div className="flex justify-between items-center mb-8">

                    <h2 className="text-3xl font-bold">
                        Products
                    </h2>

                    <div className="flex gap-3">

                        <Link
                            href="/admin/orders"
                            className="bg-zinc-700 text-white px-6 py-3 rounded-full font-bold hover:bg-zinc-600 transition"
                        >
                            Orders
                        </Link>

                        <Link
                            href="/admin/add-product"
                            className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition"
                        >
                            Add Product
                        </Link>

                    </div>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b border-zinc-700">

                                <th className="text-left py-4">ID</th>
                                <th className="text-left py-4">Name</th>
                                <th className="text-left py-4">Price</th>
                                <th className="text-left py-4">Stock</th>
                                <th className="text-left py-4">Category</th>
                                <th className="text-left py-4">Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {products.map((product: any) => (
                                <tr
                                    key={product.id}
                                    className="border-b border-zinc-800"
                                >

                                    <td className="py-4">
                                        {product.id}
                                    </td>

                                    <td className="py-4">
                                        {product.name}
                                    </td>

                                    <td className="py-4">
                                        Rs. {product.price}
                                    </td>

                                    <td className="py-4">
                                        {product.stock}
                                    </td>

                                    <td className="py-4">
                                        {product.category}
                                    </td>

                                    <td className="py-4">

                                        <div className="flex gap-2">

                                            <Link
                                                href={`/admin/edit-product/${product.id}`}
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                                            >
                                                Edit
                                            </Link>

                                            <DeleteProductButton
                                                id={product.id}
                                            />

                                        </div>

                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}