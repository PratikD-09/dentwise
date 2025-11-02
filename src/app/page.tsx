import Image from "next/image";
// import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs"; 
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatToAsk from "@/components/landing/WhatToAsk";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";
export default function Home() {
  return (
   <div className="min-h-screen bg-background">
    <Header/>
    <Hero/>
    <HowItWorks/>
    <WhatToAsk/>
    <PricingSection/>
    <Footer/>

   </div>
  );
}
