import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [error, setError] = useState('')

  const navigate = useNavigate()
  console.log(title, price, brand);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productDetails = { title, price, brand };
    const response = await fetch("http://localhost:8080/api/product/add-product", {
      method: "POST",
      body: JSON.stringify(productDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error); 
      setError(result.error)
    }
    if (response.ok) {
      console.log(result);
      setError('')
      setTitle('')
      setPrice('')
      setBrand('')
      navigate('/allProducts')
    }
  };

  return (
    <div> {error && <div class="alert alert-danger" role="alert">
    This is a danger alert—check it out!
  </div>}
    <form 
      onSubmit={handleSubmit}
      style={{
        width: "50%",
        margin: "auto",
        padding: "10px",
        textAlign: "left",
      }}
    >
   
      <div>
        <h4>Add Product Details</h4>
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

      <button type="submit" style={{marginTop: '10px'}} class="btn btn-dark">
        Add Product
      </button>
    </form>
    </div>
  );
};

export default AddProducts;
