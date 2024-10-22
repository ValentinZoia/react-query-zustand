
import { useFetchRepositories } from "./hooks/useRepos";


export default function App() {

  const {data, isLoading, error} = useFetchRepositories()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  

  return (
    <div className="p-2 grid grid-cols-3 gap-4">
      {data?.map(repo =>(
        <div key={repo.id} className="flex flex-col bg-slate-700 p-4 rounded-lg">
          <h1 className="text-2xl text-slate-200">{repo.name}</h1>
          
          <p className="text-slate-200">{repo.description}</p>
          <p className="text-blue-400">{repo.language}</p>
          <p className="text-slate-200">{new Date(repo.created_at).toLocaleDateString()}</p>
          <p className={repo.private ? "text-red-500" : "text-green-500"}>{repo.private ? 'Privado' : 'Publico'}</p>
        </div> 
       ))}
      
    </div>
  );
}
