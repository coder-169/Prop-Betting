import FooterCard from "@/components/Shared/FooterCard";
import HeaderMain from "@/components/Shared/HeaderMain";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderMain />
      {children}
      <FooterCard />
      {/* <Footer */}
    </>
  );
};

export default Layout;
