export default function SearchBar() {
  return (
    <div
      className="navbar-center flex w-[250px] sm:w-[450px] max-h-[40px] bg-white/50 backdrop-blur-md rounded-full"
      style={{ boxShadow: "0 0 2rem rgba(204, 0, 0, 0.7)" }}
    >
      <form className="flex items-center w-full overflow-auto">
        <input
          type="text"
          className="input cursor-default flex-grow bg-transparent outline-none focus:outline-none border-none text-base placeholder:text-[hsl(0,0%,50%)] rounded-full px-4 leading-[26px]"
          placeholder="Cari negara, kota atau guide"
        />
        <button
          type="submit"
          className="rounded-full bg-[--red] text-white hover:bg-[--red] w-[32px] h-[32px] mr-1"
        >
          <i className="fas fa-arrow-right text-sm" />
        </button>
      </form>
    </div>
  );
}
