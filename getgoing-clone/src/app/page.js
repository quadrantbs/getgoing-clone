import ArticlesSection from "./components/homePage/ArticlesSection";
import CarouselSection from "./components/homePage/CarouselSection";
import PopularCitiesSection from "./components/homePage/PopularCitiesSection";
import PopularGuidesSection from "./components/homePage/PopularGuidesSection";
import PrivateTripSection from "./components/homePage/PrivateTripSection";
import QuoteSection from "./components/homePage/QuoteSection";
import TestimonialsSection from "./components/homePage/TestimonialsSection";

async function fetchData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    return { articles: [], cities: [], guides: [], testimonials: [] };
  }

  try {
    const [articlesRes, citiesRes, guidesRes, testimonialsRes] =
      await Promise.all([
        fetch(`${baseUrl}/api/articles`),
        fetch(`${baseUrl}/api/cities`),
        fetch(`${baseUrl}/api/guides`),
        fetch(`${baseUrl}/api/testimonials`),
      ]);

    const [articles, cities, guides, testimonials] = await Promise.all([
      articlesRes.json(),
      citiesRes.json(),
      guidesRes.json(),
      testimonialsRes.json(),
    ]);
    return {
      articles,
      cities,
      guides,
      testimonials,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { articles: [], cities: [], guides: [], testimonials: [] };
  }
}

export default async function HomePage() {
  const { articles, cities, guides, testimonials } = await fetchData();
  return (
    <div className="flex flex-col">
      <CarouselSection />
      <PopularGuidesSection guides={guides} />
      <QuoteSection />
      <PrivateTripSection />
      <PopularCitiesSection cities={cities} />
      <TestimonialsSection testimonials={testimonials} />
      <ArticlesSection articles={articles} />
    </div>
  );
}
