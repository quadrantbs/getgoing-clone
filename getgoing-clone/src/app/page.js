import CarouselSection from "./components/homePage/CarouselSection";
import PopularCitiesSection from "./components/homePage/PopularCitiesSection";
import PopularGuidesSection from "./components/homePage/PopularGuidesSection";
import PrivateTripSection from "./components/homePage/PrivateTripSection";
import QuoteSection from "./components/homePage/QuoteSection";
import TestimonialsSection from "./components/homePage/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <CarouselSection />
      <PopularGuidesSection />
      <QuoteSection />
      <PrivateTripSection />
      <PopularCitiesSection />
      <TestimonialsSection />
    </div>
  );
}
