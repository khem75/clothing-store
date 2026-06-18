import Link from "next/link";

export default function FeaturedCollection() {
    const products = [
        {
            id: 1,
            name: "Oversized Brown Shirt",
            price: "Rs. 2499",
            image: "/images/product1.jpg",
            tag: "BEST SELLER",
        },
        {
            id: 2,
            name: "Premium Linen Pant",
            price: "Rs. 1999",
            image: "/images/product2.jpg",
            tag: "NEW ARRIVAL",
        },
        {
            id: 3,
            name: "Classic Street Trouser",
            price: "Rs. 2199",
            image: "/images/product3.jpg",
            tag: "LIMITED",
        },
    ];

    return (
        <section
            id="featured"
            className="bg-black text-white py-32"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
                        NINE77 COLLECTION
                    </p>

                    <h2 className="text-6xl md:text-7xl font-black mt-4">
                        Featured Drops
                    </h2>

                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
                        Discover our latest premium streetwear collection.
                    </p>
                </div>

                {/* Products */}
                <div className="grid md:grid-cols-3 gap-8">

                    {products.map((product) => (
                        <Link
                            href={`/product/${product.id}`}
                            key={product.id}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-3xl">

                                {/* Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[550px] object-cover group-hover:scale-110 transition duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                {/* Tag */}
                                <div className="absolute top-5 left-5 bg-white text-black px-4 py-2 rounded-full text-xs font-bold">
                                    {product.tag}
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">

                                    <h3 className="text-3xl font-bold">
                                        {product.name}
                                    </h3>

                                    <div className="flex justify-between items-center mt-4">

                                        <span className="text-xl text-zinc-300">
                                            {product.price}
                                        </span>

                                        <span className="bg-white text-black px-5 py-2 rounded-full font-semibold">
                                            View
                                        </span>

                                    </div>

                                </div>

                            </div>
                        </Link>
                    ))}

                </div>

                {/* Button */}
                <div className="text-center mt-16">

                    <Link
                        href="/shop"
                        className="inline-block border border-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition"
                    >
                        View Full Collection
                    </Link>

                </div>

            </div>
        </section>
    );
}