import Header from "./Header";
import React, { useState } from "react";

function SearchProduct() {
  const [data, setData] = useState([]);

  async function Search(key) {
    console.warn(key);
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    console.warn(result)
    setData(result);
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <br />
        <h1>Search Product</h1>
        <br />
        <input
          type="test"
          onChange={(e) => Search(e.target.value)}
          className="form-control"
          placeholder="Search Here!"
        /><br /><br />
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              
              
            </tr>
            {data.map((item) => (
              <tr>
                <th scope="col">{item.id}</th>
                <th scope="col">{item.name}</th>
                <th scope="col">{item.price}</th>
                <th scope="col">{item.description}</th>
                <th scope="col">
                  <img
                    style={{ width: 100 }}
                    src={"http://localhost:8000/" + item.file_path}
                  />
                </th>
                
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default SearchProduct;
