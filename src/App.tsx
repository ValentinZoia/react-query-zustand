
import { Route, Routes } from 'react-router-dom';
import ReposPage from "./pages/ReposPage";
import HomePage from "./pages/HomePage";


export default function App() {

 

  

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/repos' element={<ReposPage />} />
    </Routes>
  );
}
