import { createContext, useState } from "react";
import Base from "./components/Base";
import Top from "./components/Top";
import Searching from "./components/Searching";
import useAxios from "./hooks/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  
  const { response, load, error, fetchInfo } = useAxios(
    `search/photos?query=argentina&per_page=28&client_id=${import.meta.env.VITE_API_KEY}`
  );
  const value = {
    response,
    load,
    error,
    fetchInfo,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Top>
        <Searching />
      </Top>
      <Base />
    </ImageContext.Provider>
  );
}

export default App;
