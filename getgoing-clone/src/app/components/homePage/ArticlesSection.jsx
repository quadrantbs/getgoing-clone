"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        const data = await response.json();

        // Shuffle articles and select 3 random ones
        const shuffled = data.sort(() => 0.5 - Math.random());
        const randomArticles = shuffled.slice(0, 3);

        setArticles(randomArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container max-w-[1320px] mx-auto px-4">
      <div className="mb-5 flex flex-row justify-between">
        <div className="justify-start font-bold text-3xl">
          <h2>Baca juga</h2>
        </div>
        <div className="justify-end">
          <a href="/articles" className="outline-1 border-[--red] border-2 rounded-full p-2 text-[--red] uppercase font-bold tracking-widest text-sm px-4 hover:bg-[--blue] hover:border-[--blue] hover:text-[--light] transition duration-300">
            Lihat semua artikel
            <i className="fas fa-angle-double-right ml-2"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-row flex-wrap lg:flex-nowrap space-x-8 justify-center mb-8 items-stretch ">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            date={article.date}
            img={article.img}
          />
        ))}
      </div>
    </div>
  );
}
