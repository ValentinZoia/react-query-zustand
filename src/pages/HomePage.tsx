import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen grid grid-cols-2 ">
      <Link
        to="/repos"
        className="flex justify-center items-center bg-red-500 text-3xl text-slate-300 font-bold hover:text-4xl transition-all "
      >
        Repos
      </Link>

      <Link
        to="/repos"
        className="flex justify-center items-center bg-blue-500 text-3xl text-slate-300 font-bold  hover:text-4xl transition-all "
      >
        Repos
      </Link>
    </div>
  );
}
