import { useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * System-wide page transition: fades + rises content on every route change.
 * Uses location key to retrigger the animation.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
}
