import { create } from "zustand";
import { persist } from "zustand/middleware";

/*
Zustand is only good at managing client state. It's not good at managing server state.
State that belong on the client on the browser.
reposStore.ts and favoriteReposStore.ts must be a good name for this store.

persist is a zustand middleware that allows us to manage client state.
saves state in local storage.

*/


type favoriteReposState = {
    favoriteReposIds: number[],
    addFavoriteRepo: (id: number) => void,
    removeFavoriteRepo: (id: number) => void
}


const useFavoriteRepos = create(persist<favoriteReposState>((set) => ({
    favoriteReposIds: [],
    addFavoriteRepo: (id:number) => set((state) => ({ favoriteReposIds: [...state.favoriteReposIds, id] })),
    removeFavoriteRepo: (id:number) => set((state) => ({ favoriteReposIds: state.favoriteReposIds.filter((repoId) => repoId !== id) })),
}),{
    name: "favoriteRepos",
})
   
);

export default useFavoriteRepos