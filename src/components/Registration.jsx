import React, { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [coupon_code, setCoupon_code] = useState("");
  const [role, setRole] = useState("");
  const [gst, setGst] = useState("");
  const [pan, setPan] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      name,
      email,
      password,
      password_confirmation,
      phone_no,
      coupon_code,
      role,
      gst,
      pan,
    };

    const response = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      alert(result.message);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      alert(result.message);
      // setError("");
      // setName("");
      // setEmail("");
      // setPassword("");
      // setPassword_confirmation("");
      // setPhone_no("");
      // setCoupon_code("");
      // setRole("");
      // setGst("");
      // setPan("");
      // navigate('/')
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "0.1px solid",
        textAlign: "center",
        width: "40%",
        margin: " 30px auto 0 auto",
        padding: "2rem",
        boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      }}
    >
      <h3>Registration form</h3>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="fullname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="floatingInput">Fullname</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="floatingInput">Email address</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
        />
        <label for="floatingPassword">Confirm password</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="tel"
          className="form-control"
          id="floatingInput"
          placeholder="Phone number"
          value={phone_no}
          onChange={(e) => setPhone_no(e.target.value)}
        />
        <label for="floatingInput">Phone number</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Coupon code"
          value={coupon_code}
          onChange={(e) => setCoupon_code(e.target.value)}
        />
        <label for="floatingInput">Coupon code</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <label for="floatingInput">Role</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="GST"
          value={gst}
          onChange={(e) => setGst(e.target.value)}
        />
        <label for="floatingInput">GST</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="PAN"
          value={pan}
          onChange={(e) => setPan(e.target.value)}
        />
        <label for="floatingInput">PAN</label>
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="Submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Registration;
