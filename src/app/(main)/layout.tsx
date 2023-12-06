"use client";

import Footer from "@/modules/inc/footer";
import NavBar from "@/modules/inc/header";

export default function PageLayout ({ children }: { children: React.ReactNode })  {
  return (
    <div>
      <NavBar />
      <div className="p-4">{children}</div>
      <Footer />
    </div>
  );
};
