export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <img
                src="/images/hero.jpg"
                alt="NINE77"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 text-white">

                <p className="uppercase tracking-[10px] text-sm md:text-base text-zinc-300 mb-6">
                    Nepal Streetwear Brand
                </p>

                <h1 className="text-8xl md:text-9xl font-black tracking-wider">
                    NINE77
                </h1>

                <p className="mt-8 text-2xl md:text-4xl">
                    Streetwear Without Limits
                </p>

                <p className="mt-6 text-zinc-300 text-lg max-w-3xl mx-auto">
                    Premium quality clothing crafted for comfort, confidence,
                    and modern street fashion.
                </p>

                <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">

                    <a
                        href="/shop"
                        className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition"
                    >
                        Shop Collection
                    </a>

                    <a
                        href="/shop"
                        className="border border-white px-12 py-5 rounded-full text-lg hover:bg-white hover:text-black transition"
                    >
                        Explore Products
                    </a>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">

                    <div>
                        <h3 className="text-5xl font-black">500+</h3>
                        <p className="text-zinc-400 mt-2">
                            Orders Delivered
                        </p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-black">100+</h3>
                        <p className="text-zinc-400 mt-2">
                            Happy Customers
                        </p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-black">Nationwide</h3>
                        <p className="text-zinc-400 mt-2">
                            Shipping
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}