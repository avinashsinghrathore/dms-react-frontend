import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  // get single product data
  const getSingleProduct = async () => {
    const response = await fetch(`http://localhost:8080/api/product/${id}`);

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("");
      console.log("updated products", result);
      setTitle(result.title);
      setPrice(result.price);
      setBrand(result.brand);
    }
  };

  //send updated data to backend
  const handleUpdated = async (e) => {
    e.preventDefault();
    const productDetails = { title, price, brand };
    console.log(productDetails);
    const response = await fetch(`http://localhost:8080/api/product/${id}`, {
      method: "PATCH",
      body: JSON.stringify(productDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      navigate("/allProducts");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      <form
        onSubmit={handleUpdated}
        style={{
          width: "50%",
          margin: "auto",
          padding: "10px",
          textAlign: "left",
        }}
      >
        <div>
          <h4>Edit Product's Detail</h4>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputAge">Brand</label>
          <input
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>

        <button
          type="submit"
          style={{ marginTop: "10px" }}
          class="btn btn-dark"
        >
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProducts;
