import HomeTop from "@/components/homeTop";
import Products from "@/components/products";
import Services from "@/components/services";
import Posts from "@/components/posts";
import Testimonials from "@/components/testimonials";
import Problems from "@/components/problems";
export default function Home() {
  return (
    <>
      <main className="w-full px-5 lg:py-10 lg:px-[250px] relative">
        <HomeTop />
        <Products />
        <Services />
        <Posts />
        <Testimonials />
        
      </main>
      <Problems />
    </>
    
  );
}
