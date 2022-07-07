import { useContext, useState } from "react";
import { ImageContext } from "../App";

const Searching = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchInfo, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchInfo(
      `search/photos?&query=${searchValue}&per_page=28&client_id=${
        import.meta.env.VITE_API_KEY
      }`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchInfo(
        `search/photos?page=1&query=${searchValue}&per_page=28&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-[16px] w-full indent-2 p-1.5 outline-none focus:border-gray-200 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search images..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-gray-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-gray-300 disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default Searching;
