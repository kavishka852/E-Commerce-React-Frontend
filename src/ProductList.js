import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      let result = await fetch("http://localhost:8000/api/list");
      result = await result.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteOperation(id) {
    // let result = await fetch("http://localhost:8000/api/delete/" + id, {
    //   method: "DELETE",
    // });
    // result = result.json();
    // console.warn(result);
    // fetchData();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      let result = await fetch("http://localhost:8000/api/delete/" + id, {
        method: "DELETE",
      });

      result = result.json();
      console.warn(result);
      fetchData(); // Call your data fetching function after successful deletion.
    }
  }

  return (
    <div>
      <Header />
      <h1>Product List</h1>
      <div className="col-sm-6 offset-sm-3">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
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
                <th scope="col">
                  <span
                    onClick={() => deleteOperation(item.id)}
                    className="delete"
                  >
                    Delete
                  </span>
                </th>
                <th scope="col">
                  <Link to={"update/"+item.id}>
                    <span className="update">Update</span>
                  </Link>
                </th>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
