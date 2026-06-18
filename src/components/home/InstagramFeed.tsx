export default function InstagramFeed() {
    const images = [
        "/images/product1.jpg",
        "/images/product1.jpg",
        "/images/product1.jpg",
        "/images/product1.jpg",
    ];

    return (
        <section className="bg-black text-white py-32">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">

                    <div>
                        <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
                            SOCIAL FEED
                        </p>

                        <h2 className="text-5xl md:text-7xl font-black mt-4">
                            Follow @nine.77___
                        </h2>
                    </div>

                    <a
                        href="https://www.instagram.com/nine.77___/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Visit Instagram
                    </a>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-3xl group"
                        >
                            <img
                                src={image}
                                alt="Instagram Post"
                                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
                            />
                        </div>
                    ))}

                </div>

                <div className="text-center mt-16">

                    <p className="text-zinc-400 mb-6">
                        Follow us for the latest drops and streetwear updates.
                    </p>

                    <a
                        href="https://www.instagram.com/nine.77___/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-zinc-200 transition"
                    >
                        @nine.77___
                    </a>

                </div>

            </div>
        </section>
    );
}