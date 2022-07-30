import React from "react";

function Product({ avatar_url, html_url, login, exitHandelChange, id }) {
  return (
    <div className="productItem">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className="button">
        <span>view </span>
      </a>
      <button className="exit" onClick={() => exitHandelChange(id)}>
        x
      </button>
    </div>
  );
}

export default Product;
