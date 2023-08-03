"use client";
import React, { createContext, useEffect, useState } from "react";
import PageTransition from "./pageTransition";
import MobileNav from "./mobileNav";
import { usePathname } from "next/navigation";

export const AppContext = createContext();

function Provider({ children }) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(false);
  const [routeFlow, setRouteFlow] = useState([]);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showTransition,
        setShowTransition,
        setRouteFlow,
        setShowMobileNav,
      }}
    >
      {showTransition && (
        <PageTransition routeFlow={routeFlow} setRouteFlow={setRouteFlow} />
      )}
      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}

      {children}
    </AppContext.Provider>
  );
}

export default Provider;
