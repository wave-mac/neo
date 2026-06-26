'use client';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Problem from '@/components/Problem/Problem';
import Features from '@/components/Features/Features';
import BottomSignup from '@/components/BottomSignup/BottomSignup';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <BottomSignup />
      </main>
      <Footer />
    </>
  );
}
