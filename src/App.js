import { useState } from "react";
import "./App.scss";
import MOCKDATA from "./MOCK_DATA.json";

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
        {data
          .filter((val) => {
            if (searchTerm === val) {
              return val;
            } else if (
              val.first_name
                .toLocaleLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((value, key) => {
            return (
              <div className="user" key={key}>
                <p>{value.first_name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
