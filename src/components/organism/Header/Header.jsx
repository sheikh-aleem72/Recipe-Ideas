import { LuLeaf, LuStar } from "react-icons/lu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full max-w-8xl mx-auto px-6 py-5 border-b-2 border-gray-400">
      <nav className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-brand-text font-semibold text-xl"
        >
          <LuLeaf className="text-brand-green" size={25} />
          <span>Recipe Ideas</span>
        </Link>
        <Link
          to="/saved"
          className="flex items-center gap-2 text-brand-text font-semibold text-xl"
        >
          <LuStar className="text-yellow-500" size={22} />
          <span>Saved Recipes</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
