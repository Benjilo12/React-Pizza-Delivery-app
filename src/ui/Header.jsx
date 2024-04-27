import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="tracking-widest">
          Fast React Pizza Co.
        </Link>
        <SearchOrder />

        <p className="text-xl font-semibold hidden md:block">Benji</p>
      </header>
    </div>
  );
}

export default Header;
