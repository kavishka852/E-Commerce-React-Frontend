// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Header from "./Header";

// function UpdateProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState({});
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     // Fetch product data when the component mounts
//     fetch(`http://localhost:8000/api/product/${id}`)
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result);
//         setName(result.name);
//         setPrice(result.price);
//         setDescription(result.description);
//       });
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("description", description);
//     if (file) {
//       formData.append("file", file);
//     }

//     fetch(`http://localhost:8000/api/product/${id}`, {
//       method: "PUT",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         // Handle the result as needed, e.g., show a success message and redirect
//         console.log("Product updated:", result);
//         navigate.push("/products"); // Redirect to the product list page
//       })
//       .catch((error) => {
//         // Handle errors, e.g., display an error message
//         console.error("Error updating product:", error);
//       });
//   };

//   return (
//     <>
//       <Header />
//       <div>Update Product Page</div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br /><br />
//         <input
//           type="text"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <br /><br />
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <br /><br />
//         <input type="file" onChange={(e) => setFile(e.target.files[0])} /><br /><br />
//         <img
//           style={{ width: 100 }}
//           src={"http://localhost:8000/" + data.file_path}
//         /><br /><br />
//         <div>{data.file_path}</div><br />

//         <br />
//         <button type="submit">Update Product</button>
//       </form>
//     </>
//   );
// }

// export default UpdateProduct;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/product/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    if (file) {
      formData.append("file", file);
    }

    fetch(`http://localhost:8000/api/product/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Product updated:", result);
        navigate("/products"); // Redirect to the product list page
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <>
      <Header />
      <div>Update Product Page</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /><br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /><br />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <br /><br />
        <img
          style={{ width: 100 }}
          src={"http://localhost:8000/" + data.file_path}
        />
        <br /><br />
        <div>{data.file_path}</div>
        <br /><br />
        <button type="submit">Update Product</button>
      </form>
    </>
  );
}

export default UpdateProduct;
