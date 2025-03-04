"use client";

// import { useState } from "react";
import { usePopup } from "@/context/PopupContext";
import dynamic from "next/dynamic";
import ClientButton from "./ClientButton";

// Dynamic import in a Client Component is allowed
const ProductPopup = dynamic(() => import("@/components/ProductPopup"), {
  loading: () => <div className="text-center py-4">Loading popup...</div>,
  ssr: false,
});

export default function DynamicPopupWrapper() {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, closePopup } = usePopup();

  return (
    <div>
      {/* <button onClick={() => setIsOpen(true)} className="btn">
        Open Popup
      </button> */}
      <ClientButton />
      {isOpen && <ProductPopup onClose={closePopup} />}
    </div>
  );
}
