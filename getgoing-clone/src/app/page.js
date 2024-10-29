import CarouselSection from "./components/homePage/CarouselSection";
import PopularGuidesSection from "./components/homePage/PopularGuidesSection";
import PrivateTripSection from "./components/homePage/PrivateTripSection";
import QuoteSection from "./components/homePage/QuoteSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <CarouselSection />
      <PopularGuidesSection />
      <QuoteSection />
      <PrivateTripSection />
    </div>
  );
}
