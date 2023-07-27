import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";



const Homepage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const getData = async () => {
    const response = await fetch("http://localhost:8080/api/users");

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
 
  return (
      <div style={{padding: "20px" }} >
       <CSVLink data={data} onClick={() => {}} style={{marginLeft: "1000px"}}>Export Data</CSVLink>
      <table
        class="table table-striped"
        style={{ width: "90%", margin: " 30px auto 0 auto" }}
      >
        <thead>
          <tr>
          <th>Sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
            <th scope="col">Gst</th>
            <th scope="col">Pan</th>
            <th scope="col">Action</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data, index) => (
            <tr key={index}>
            <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone_no}</td>
              <td>{data.role}</td>
              <td>{data.gst}</td>
              <td>{data.pan}</td>
              <td>
                <Link
                  type="button"
                  class="btn btn-success"
                  style={{ marginRight: "5px" }}
                  to={`/${data._id}`}
                >
                  Accept
                </Link>

                <button type="button" class="btn btn-danger">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

  );
};
export default Homepage;

