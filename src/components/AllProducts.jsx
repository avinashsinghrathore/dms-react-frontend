import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    const response = await fetch("http://localhost:8080/api/product/get-all-products");

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  };

  // delete data
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/api/users/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("Data Deleted");

      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <h3>All Products</h3>
      <table
        class="table table-striped"
        style={{ width: "90%", margin: " 30px auto 0 auto" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#000000", color: "#fff" }}>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Brand</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => (
            <tr>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>{data.brand}</td>
              <td>
                <Link
                  type="button"
                  class="btn btn-success"
                  style={{ marginRight: "5px" }}
                  to={`/${data._id}`}
                >
                  Edit
                </Link>

                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => handleDelete(data._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllProducts;
