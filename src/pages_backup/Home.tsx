// src/pages/Home.tsx
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import Intro from '../components/sections/Intro';
import Services from '../components/sections/Services';
import SpecializedServices from '../components/sections/SpecializedServices';
import Packages from '../components/sections/Packages';
import Process from '../components/sections/Process';
import Comparison from '../components/sections/Comparison';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home({ tinaData }: { tinaData?: any }) {
  return (
    <>
      <Hero tinaData={tinaData} />
      <TrustBar tinaData={tinaData} />
      <Intro tinaData={tinaData} />
      <Services tinaData={tinaData} />
      <SpecializedServices tinaData={tinaData} />
      <Packages tinaData={tinaData} />
      <Process tinaData={tinaData} />
      <Comparison tinaData={tinaData} />
      <FAQ tinaData={tinaData} />
      <Contact tinaData={tinaData} />
    </>
  );
}