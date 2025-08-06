import HomePage from "@/components/HomePage";
import { MobileMenuProvider } from "@/components/context/MobileMenuContext";

export default function Home() {
  return (
    <MobileMenuProvider>
      <main>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <HomePage />
      </main>
    </MobileMenuProvider>
  );
}
