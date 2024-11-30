import React from "react";
import Banner from "../components/Banner";
import TopSellers from "../components/TopSellers";
import { RecomendedSection } from "../components/RecomendedSection";
import NewsSection from "../components/NewsSection";

function Home() {
  return (
    <div>
      <Banner />
      <TopSellers />
      <RecomendedSection />
      <NewsSection />
    </div>
  );
}

export default Home;
