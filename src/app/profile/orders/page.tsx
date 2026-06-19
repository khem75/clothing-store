export default function OrdersPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-5xl font-black mb-10">
                    My Orders
                </h1>

                <div className="bg-zinc-900 rounded-3xl p-8">
                    <p className="text-zinc-400">
                        No orders yet.
                    </p>
                </div>

            </div>
        </div>
    );
}