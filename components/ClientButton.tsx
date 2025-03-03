"use client";

import { usePopup } from "@/context/PopupContext";

export default function ClientButton() {
  const { openPopup } = usePopup();

  return (
    <button onClick={openPopup} className="btn">
      Open Popup
    </button>
  );
}
