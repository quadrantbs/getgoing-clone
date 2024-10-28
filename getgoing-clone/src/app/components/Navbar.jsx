import Link from "next/link";
import SearchBar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="navbar p-4 bg-transparent mx-auto justify-between max-w-[1280px]">
      <div className="navbar-start lg:w-auto lg:pl-[15px]">
        {/* Logo */}
        <Link href="/" className="py-1">
          <img
            src="https://getgoing.co.id/_next/static/images/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png"
            alt="GetGoing Logo"
            className="w-[100px] sm:w-[200px] max-w-none"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <SearchBar />

      <div className="navbar-end w-1/4 lg:w-full pl-[5px] pr-[10px] text-[red]">
        {/* Toggle Navigation Button with Dropdown for smaller screens */}
        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            className="text-[red] hover:bg-transparent"
            aria-label="Toggle navigation"
            type="button"
          >
            <i className="fa fa-bars text-xl" />
          </button>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 rounded-box w-52"
          >
            <li>
              <Link href="/" className="m-2 font-bold">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/" className="m-2 ">
                Servis Kami
              </Link>
            </li>
            <li>
              <Link href="/" className="m-2 ">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="bg-transparent">
                <button className="ml-4 text-[#212529] font-bold tracking-[0.25rem] leading-[20px] text-[13px] rounded-3xl focus:outline-none focus:ring-[3px] focus:ring-[rgba(230,57,70,0.25)] focus:ring-offset-2 px-3 py-2">
                  LOGIN
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden lg:flex leading-[23px] text-[14px]">
          <Link href="/" className="m-2 font-bold">
            Beranda
          </Link>
          <Link href="/" className="m-2 ">
            Servis Kami
          </Link>
          <Link href="/" className="m-2 ">
            Blog
          </Link>
          <Link href="/" className="bg-transparent">
            <button className="ml-4 text-[#212529] font-bold tracking-[0.25rem] leading-[20px] text-[13px] rounded-3xl focus:outline-none focus:ring-[3px] focus:ring-[rgba(230,57,70,0.25)] focus:ring-offset-2 px-3 py-2">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
