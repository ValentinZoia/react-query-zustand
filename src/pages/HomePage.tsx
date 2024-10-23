import { Link } from "react-router-dom";
import router from "../routes";

export default function HomePage() {

  const filterRoutes = router.routes.map((r) => r.path).filter((r)=>r !== "/");
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500"];
  
  return (
    <div className="w-full min-h-screen grid grid-cols-2 ">
      

      {filterRoutes.map((r,index) => (

        <Link
          key={r}
          to={r as string}
          className={`${colors[index % colors.length]} flex justify-center items-center  text-3xl text-slate-300 font-bold hover:text-4xl transition-all`}
        >
          {r}
        </Link>
      ))}
    </div>
  );
}
