import Link from "next/link";
import { getProducts } from "@/lib/products";

export default async function AdminPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-5xl font-black mb-10">
                NINE77 Admin Panel
            </h1>

            <div className="bg-zinc-900 rounded-3xl p-8">

                <div className="flex justify-between items-center mb-8">

                    <h2 className="text-3xl font-bold">
                        Products
                    </h2>

                    <Link
                        href="/admin/add-product"
                        className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition"
                    >
                        Add Product
                    </Link>

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

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}