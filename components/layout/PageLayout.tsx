import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import AlertBanner from './AlertBanner'

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <AlertBanner /> */}
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
