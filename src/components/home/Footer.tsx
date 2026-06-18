import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <h2 className="text-4xl font-black tracking-widest">
                            NINE77
                        </h2>

                        <p className="text-zinc-400 mt-4 leading-relaxed">
                            Streetwear Without Limits.
                            Premium clothing designed for comfort,
                            confidence and modern fashion.
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            Shop
                        </h3>

                        <ul className="space-y-3 text-zinc-400">
                            <li>
                                <Link href="/shop">New Arrivals</Link>
                            </li>

                            <li>
                                <Link href="/shop">Best Sellers</Link>
                            </li>

                            <li>
                                <Link href="/shop">Collections</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            Company
                        </h3>

                        <ul className="space-y-3 text-zinc-400">
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>

                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>

                            <li>
                                <Link href="/">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-zinc-400">
                            <li>Nepal</li>

                            <li>+977 9810605409</li>

                            <li>
                                <a
                                    href="https://www.instagram.com/nine.77___/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @nine.77___
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://wa.me/9779810605409"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-zinc-500">
                        © 2026 NINE77 Clothing. All Rights Reserved.
                    </p>

                    <p className="text-zinc-600 mt-4 md:mt-0">
                        Designed with ❤️ for NINE77
                    </p>

                </div>

            </div>
        </footer>
    );
}