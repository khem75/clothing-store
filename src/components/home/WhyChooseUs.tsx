export default function WhyChooseUs() {
    const features = [
        {
            title: "Premium Quality",
            description:
                "Carefully selected fabrics designed for comfort, durability and everyday wear.",
            icon: "✨",
        },
        {
            title: "Nationwide Shipping",
            description:
                "Fast and reliable delivery across Nepal with secure packaging.",
            icon: "🚚",
        },
        {
            title: "Modern Streetwear",
            description:
                "Minimal, timeless designs inspired by modern street fashion.",
            icon: "🔥",
        },
    ];

    return (
        <section className="bg-zinc-950 text-white py-32">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <span className="uppercase tracking-[8px] text-zinc-500 text-sm">
                        Why Nine77
                    </span>

                    <h2 className="text-6xl font-black mt-6">
                        More Than Clothing
                    </h2>

                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
                        We focus on quality, comfort and confidence so you can
                        wear every piece with pride.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-black border border-zinc-800 rounded-3xl p-10 hover:border-white transition duration-300"
                        >
                            <div className="text-5xl mb-6">
                                {feature.icon}
                            </div>

                            <h3 className="text-3xl font-bold mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}