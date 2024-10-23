import { ReposType } from "../models/Repos";
import useFavoriteRepos from "../store/favoriteRepos";

type CardProps = {
  repository: ReposType;
  isFavorite: boolean;
};

export default function Card({ repository, isFavorite }: CardProps) {
  const addFavoriteRepo = useFavoriteRepos(state => state.addFavoriteRepo)
  const removeFavoriteRepo = useFavoriteRepos(state => state.removeFavoriteRepo);
  

  const handleClickButton = ()=>{
    if(!isFavorite){
        addFavoriteRepo(repository.id)
        return
    }

    removeFavoriteRepo(repository.id)
  }
  
    return (
    <div className="flex flex-col bg-slate-700 p-4 rounded-lg gap-2">
      <h1 className="text-2xl text-slate-200">{repository.name}</h1>

      <p className="text-slate-200">{repository.description}</p>
      <p className="text-blue-400">{repository.language}</p>
      <p className="text-slate-200">
        {new Date(repository.created_at).toLocaleDateString()}
      </p>
      <p className={repository.private ? "text-red-500" : "text-green-500"}>
        {repository.private ? "Privado" : "Publico"}
      </p>

      <button onClick={handleClickButton} className="bg-blue-500 p-2 rounded-lg w-1/2">{isFavorite ? "Dislike" : "Like"}</button>
    </div>
  );
}
