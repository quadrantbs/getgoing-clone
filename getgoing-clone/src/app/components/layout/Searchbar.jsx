"use client";

import { useState, useEffect, useRef } from "react";

export default function SearchBar() {
  const [guides, setGuides] = useState([]);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchBarRef = useRef(null);

  async function fetchGuides() {
    try {
      const response = await fetch("/api/guides");
      const data = await response.json();
      setGuides(data);
      setFilteredGuides(data);
    } catch (error) {
      console.error("Error fetching guides:", error);
    }
  }

  useEffect(() => {
    fetchGuides();
  }, []);

  useEffect(() => {
    const filtered = guides.filter(
      (guide) =>
        guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGuides(filtered);
    setShowDropdown(searchQuery.length > 0);
  }, [searchQuery, guides]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      ref={searchBarRef}
      className="relative navbar-center flex w-[250px] sm:w-[450px] max-h-[40px] bg-white/50 backdrop-blur-md rounded-full"
      style={{ boxShadow: "0 0 2rem rgba(204, 0, 0, 0.7)" }}
    >
      <form
        className="flex items-center w-full overflow-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="input cursor-default flex-grow bg-transparent outline-none focus:outline-none border-none text-base placeholder:text-[hsl(0,0%,50%)] rounded-full px-4 leading-[26px]"
          placeholder="Cari negara, kota atau guide"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowDropdown(true)}
        />
        <button
          type="submit"
          className="rounded-full bg-[--red] text-white hover:bg-[--red] w-[32px] h-[32px] mr-1"
        >
          <i className="fas fa-arrow-right text-sm" />
        </button>
      </form>

      {showDropdown && filteredGuides.length > 0 && (
        <div className="absolute top-full z-[9999] left-0 right-0 bg-white shadow-lg mt-2 rounded-lg max-h-60 overflow-y-auto">
          {filteredGuides.map((guide) => (
            <div key={guide.id} className="p-2 hover:bg-gray-200">
              <h3 className="text-sm font-bold">{guide.name}</h3>
              <p className="text-xs text-[--gray]">{guide.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
