import { useState } from "react";
import "./App.scss";
import MOCKDATA from "./MOCK_DATA.json";
import SearchUsers from "./components/SearchUsers";

function App() {
  const [data, setData] = useState(MOCKDATA);
  const [searchTerm, setSearchTerm] = useState("");

  const searchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <div className="searchbar">
        <input type="text" placeholder="Search..." onChange={searchInput} />
        <SearchUsers data={data} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
