import { supabase } from "@/lib/supabase";

export default async function TestPage() {
    const { data, error } = await supabase
        .from("products")
        .select("*");

    if (error) {
        return (
            <div className="p-10">
                Error: {error.message}
            </div>
        );
    }

    return (
        <div className="p-10">
            <h1>Products</h1>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}