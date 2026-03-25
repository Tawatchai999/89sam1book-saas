# 89sam1book-saas
  SaaS system for book sales
import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}export default function Dashboard() {
  return <h1>Dashboard (กำลังเชื่อมระบบ)</h1>;
}export default function Login() {
  return <h1>Login Page</h1>;
}