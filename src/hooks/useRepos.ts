import api from "../api/github";
import { useQuery } from "@tanstack/react-query";
import { ReposType } from "../models/Repos";

async function getRepos() {
  try {
    const { data } = await api.get<ReposType[]>("users/ValentinZoia/repos");
    return data;
  } catch (error) {
    throw new Error("Error fetching repos");
  }
}

//Server State Solution
export function useFetchRepositories(){
    return useQuery<ReposType[]>({
        queryKey: ["repos"],
        queryFn: getRepos
    });

    
}