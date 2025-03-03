"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import in a Client Component is allowed
const ProductPopup = dynamic(() => import("@/components/ProductPopup"), {
  loading: () => <div className="text-center py-4">Loading popup...</div>,
  ssr: false,
});

export default function DynamicPopupWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="btn">
        Open Popup
      </button>
      {isOpen && <ProductPopup onClose={() => setIsOpen(false)} />}
    </div>
  );
}
