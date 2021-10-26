import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Account() {
  let history = useHistory();
  const [switchToggle, setswitchToggle] = useState(false);
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuserdata({ ...userdata, [name]: value });
  };

  const postData = async (e) => {
    try {
      e.preventDefault();
      const { name, password, cpassword, email } = userdata;
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          cpassword,
          email,
        }),
      });

      const data = await res.json();
      if (res.status === 422 || !data) {
        alert("Invalid Registration");
      } else {
        alert("Successful Registration");
        history.push("/account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postLog = async (e) => {
    e.preventDefault();
    const { email, password } = userdata;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      alert("Invalied login");
    } else {
      alert("Successful login");
      history.push("/cart");
    }
  };

  const login = () => {
    switchToggle ? setswitchToggle(false) : setswitchToggle(true);
  };
  const register = () => {
    switchToggle ? setswitchToggle(false) : setswitchToggle(true);
  };
  return (
    <>
      <div className="account-page">
        <div className="container-main">
          <div className="row">
            <div className="col-2">
              <img src="./image/img2.png" alt="" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={login}>Login</span>
                  <span onClick={register}>Register</span>
                  <hr
                    id="indicator"
                    className={switchToggle ? "indi1" : "indi2"}
                  />
                </div>

                <form
                  method="POST"
                  id="logForm"
                  className={switchToggle ? "logForm" : "regForm"}
                >
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    value={userdata.email}
                    onChange={handleInput}
                  />
                  <input
                    type="password"
                    placeholder="enter password"
                    name="password"
                    value={userdata.password}
                    onChange={handleInput}
                  />
                  <input
                    type="submit"
                    name="login"
                    className="btn"
                    onClick={postLog}
                  />
                  <button>Forget password</button>
                </form>
                <form
                  method="POST"
                  id="regForm"
                  className={switchToggle ? "logForm" : "regForm"}
                >
                  <input
                    type="text"
                    placeholder="user name"
                    name="name"
                    value={userdata.name}
                    onChange={handleInput}
                  />
                  <input
                    type="email"
                    placeholder="enter email"
                    name="email"
                    value={userdata.email}
                    onChange={handleInput}
                  />
                  <input
                    type="password"
                    placeholder="enter password"
                    name="password"
                    value={userdata.password}
                    onChange={handleInput}
                  />
                  <input
                    type="Password"
                    placeholder="enter confirm password"
                    name="cpassword"
                    value={userdata.cpassword}
                    onChange={handleInput}
                  />
                  <input
                    type="submit"
                    name="register"
                    className="btn"
                    onClick={postData}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
