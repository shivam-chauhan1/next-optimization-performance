import { Product } from "@/types";
// import Image from "next/image";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-sm"
        >
          {/* <div className="relative h-48 w-full">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div> */}
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium">{product.title}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                ${product.price}
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              {product.description.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">{product.category}</span>
              <div className="flex items-center">
                <span className="text-sm">⭐ {product.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
