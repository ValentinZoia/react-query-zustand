import Card from "../components/Card";
import { useFetchRepositories } from "../hooks/useRepos";
import useFavoriteRepos from "../store/favoriteRepos";

export default function ReposPage() {

    //obtenemos los repositorios - server state
    const {data, isLoading, error} = useFetchRepositories();

    //obtenemos los repositorios favoritos - client state
    const { favoriteReposIds} = useFavoriteRepos()
  
    if (isLoading) {
      return <div>Loading...</div>
    }
  
    if (error) {
      return <div>{error.message}</div>
    }
  
    
  
    return (
      

      <div className="p-2 grid grid-cols-3 gap-4">
        {data?.map(repo =>(
          <Card key={repo.id} repository={repo} isFavorite={favoriteReposIds.includes(repo.id)} />
         ))}
        
      </div>
    );
}
