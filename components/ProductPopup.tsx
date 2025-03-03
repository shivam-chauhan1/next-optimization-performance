"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ProductPopupProps {
  onClose: () => void;
}

export default function ProductPopup({ onClose }: ProductPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Featured Product</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="relative h-48 w-full mb-4">
          <Image
            src="https://dummyjson.com/image/150"
            alt="Featured Product"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Premium Product</h4>
          <p className="text-gray-600">
            This is a dynamically loaded popup component showing a featured
            product. The component is loaded only when needed, reducing the
            initial bundle size.
          </p>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="btn bg-blue-600 hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
