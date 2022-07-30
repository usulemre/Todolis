import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Product from "./Product";
import useFetch from "./useFetch";

import { ArrowRight } from "react-bootstrap-icons";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [follow, setfollow] = useState([]);

  const exitHandelChange = (id) => {
    setfollow(
      follow.filter((current) => {
        return current.id !== id;
      })
    );
  };

  console.log(search);
  useEffect(() => {
    if (loading) return;
    setfollow(data[page]);
  }, [loading, page]);

  const handleChange = (index) => {
    setPage(index);
  };

  if (loading) {
    return <Loading />;
  }

  let dataSearch = follow.filter((item) => {
    return item.login
      .toString()
      .toLowerCase()
      .includes(search.toString().toLowerCase());
  });

  return (
    <div className="App">
      <div className="inputContainer">
        <input
          placeholder="search"
          className="searchTerm"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="iconContainer">
          <ArrowRight />
        </div>
      </div>
      <div className="container">
        {dataSearch.length > 0 ? (
          dataSearch.map((product) => {
            return (
              <Product
                key={product.id}
                {...product}
                exitHandelChange={exitHandelChange}
              />
            );
          })
        ) : (
          <div className="erorrModel">bulunamıyor....</div>
        )}
      </div>
      {!loading && (
        <div className="pagination">
          {data.map((item, index) => {
            return (
              <a
                className={`${index === page ? "active" : null}`}
                key={index}
                onClick={() => handleChange(index)}
              >
                {index + 1}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
