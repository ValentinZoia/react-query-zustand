import { ReactNode } from "react"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"


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
       
       {children}
       
      
    </QueryClientProvider>
  )
}
