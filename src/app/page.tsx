import {HeroParallax} from "@/components/ui/hero-parallax";
import {products} from "@/components/example/hero-parallax-demo";
import GoogleGeminiEffectDemo from "@/components/example/google-gemini-effect-demo";
import {FloatingNav} from "@/components/ui/floating-navbar";
import StickyScrollRevealDemo from "@/components/example/sticky-scroll-reveal-demo";
import InfiniteMovingCardsDemo from "@/components/example/infinite-moving-cards-demo";

export default function Home() {


    return (
        <>
            <FloatingNav className="bg-black" navItems={[
                {name: "Home", link: "/home"},
                {name: "About", link: "/about"},
                {name: "Contact Us", link: "/contact"},
                {name: "Services", link: "/services"},
                {name: "Products", link: "/products"},
                {name: "Blog", link: "/blog"},
            ]}/>
            <HeroParallax products={products}/>
            <GoogleGeminiEffectDemo/>
            <StickyScrollRevealDemo/>
            <InfiniteMovingCardsDemo/>
        </>
    );
}
