import { Suspense } from "react";
import ProductList from "@/components/ProductList";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import DynamicPopupWrapper from "@/components/DynamicPopupWrapper";

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=5", {
    next: {
      tags: ["products"],
    },
    // Use force-cache to enable caching
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function Home() {
  const productsData = await fetchProducts();

  async function refreshProducts() {
    "use server";
    console.log("Revalidating products cache...");
    revalidateTag("products");
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-mono font-bold text-center my-8">
        Next.js Optimization and Performance
      </h1>

      <div className="flex justify-center mb-6">
        <Image
          src="https://dummyjson.com/image/150"
          alt="Dummy Image"
          width={150}
          height={150}
          className="rounded-lg shadow-md"
          priority
        />
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Product List</h2>
          <form action={refreshProducts}>
            <button
              type="submit"
              className="btn bg-green-600 hover:bg-green-700"
            >
              Refresh Products
            </button>
          </form>
        </div>

        <Suspense fallback={<div>Loading products...</div>}>
          <ProductList products={productsData.products} />
        </Suspense>
      </div>

      <div className="card mt-8">
        <h2 className="text-xl font-semibold mb-4">Dynamic Popup Demo</h2>
        <DynamicPopupWrapper />
      </div>
    </div>
  );
}
