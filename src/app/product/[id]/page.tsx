import { products } from "@/data/products";
import Link from "next/link";
import ProductActions from "@/components/product/ProductActions";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = products.find(
        (p) => p.id === Number(id)
    );

    if (!product) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Product Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Product Image */}
                    <div>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[700px] object-cover rounded-3xl"
                        />
                    </div>

                    {/* Product Details */}
                    <div>

                        <span className="uppercase tracking-[4px] text-zinc-500">
                            {product.category}
                        </span>

                        <h1 className="text-6xl font-black mt-4">
                            {product.name}
                        </h1>

                        <p className="text-3xl font-bold mt-6">
                            Rs. {product.price}
                        </p>

                        <p className="text-zinc-400 mt-8 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Size + Cart + Wishlist */}
                        <ProductActions product={product} />

                        <Link
                            href="/shop"
                            className="block mt-8 text-zinc-400 hover:text-white"
                        >
                            ← Back To Shop
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}