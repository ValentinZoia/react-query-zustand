import { ReactNode } from "react"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"

//Inicializo el QueryClient
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

export default function Providers({children}: {children: ReactNode}) {
  return (
   
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
       {children}
       </BrowserRouter>
      
    </QueryClientProvider>
  )
}
