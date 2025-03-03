"use client";

import { PopupProvider } from "@/context/PopupContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <PopupProvider>{children}</PopupProvider>;
}
