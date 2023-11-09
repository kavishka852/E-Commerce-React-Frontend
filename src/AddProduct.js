import Header from "./Header";
import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null); // Initialize file state with null
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addProduct() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);

    try {
      let result = await fetch("http://localhost:8000/api/addproduct", {
        method: 'POST',
        body: formData, // Pass the formData object as the body
      });

      if (result.ok) {
        alert("Data has been saved");
      } else {
        // Handle error response here
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <br />
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;