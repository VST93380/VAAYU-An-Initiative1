import React from "react";
import urlmap from "./../UrlHelper";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authcontext";
export default function Authenticate() {
  const auth = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    urlmap
      .post("/api/register", {
        username: data.get("reguser").split(" ").join("").toLowerCase(),
        email: data.get("regemail"),
        phone: data.get("regphone"),
        password: data.get("regpassword"),
      })
      .then((response) => {
        if (response.data === "userexist") {
          toast.info("Username taken", {
            position: "bottom-right",
          });
        } else if (response.data === "phoneexist") {
          toast.info("Phone number already is in use", {
            position: "bottom-right",
          });
        } else if (response.data === "emailexist") {
          toast.info("Email already taken", {
            position: "bottom-right",
          });
        } else {
          toast.info("Registration Successfull", {
            position: "bottom-right",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server not started, Please wait", {
          position: "bottom-right",
        });
      });
  };

  //login
  const loginAction = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    try {
      const response = await urlmap.post("/api/login", {
        phone: data.get("phone"),
        password: data.get("password"),
      });
      if (response.data === "invalid") {
        console.log(response.data);
        toast.info("Enter correct password", { position: "bottom-right" });
      } else if (response.data === "newuser") {
        console.log(response.data);
        toast.error("Please register to Vaayu", { position: "bottom-right" });
      } else if (response.status === 200) {
        const userData = response.data.user;
        if (
          response.data.user.role === "Customer" ||
          response.data.user.role === "Admin"
        ) {
          auth.login(userData);
          // $('#loginModal').modal('hide');
          toast.success("Login Successful", {
            position: "bottom-right",
            theme: "dark",
          });
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog">
          <div className="modal-content tilt-in-fwd-br">
            <div className="modal-body login">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="section text-center">
                    <h6 className="loginheader">
                      <span className="loginnav">Log In </span>
                      <span className="loginnav">Sign Up</span>
                    </h6>
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="reg-log"
                      id="reg-log"
                    />
                    <label htmlFor="reg-log"></label>
                    <div className="card-3d-wrap mx-auto">
                      <div className="card-3d-wrapper">
                        <div className="card-front">
                          <form onSubmit={loginAction}>
                            <div className="center-wrap">
                              <div className="section text-center">
                                <h4 className="mb-4 pb-3">Log In</h4>
                                <div className="form-group mt-2">
                                  <input
                                    type="tel"
                                    name="phone"
                                    className="form-style"
                                    placeholder="Your Phone Number"
                                    autoComplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-mobile-android-alt"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    name="password"
                                    className="form-style"
                                    placeholder="Your Password"
                                    autoComplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-lock-alt"></i>
                                </div>
                                <button
                                  className="loginbtn loginmb mt-4"
                                  data-bs-toggle="modal"
                                  data-bs-target="#loginModal"
                                >
                                  Log In
                                </button>
                                <p className="mb-0 mt-4 text-center">
                                  <a href="#0" className="link">
                                    Forgot your password?
                                  </a>
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="card-back">
                          <form onSubmit={handleRegister}>
                            <div className="center-wrap">
                              <div className="section text-center">
                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="reguser"
                                    className="form-style"
                                    placeholder="Your Full Name"
                                    autoComplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-user"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="tel"
                                    name="regphone"
                                    className="form-style"
                                    placeholder="Your Phone Number"
                                    autoComplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-mobile-android-alt"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="email"
                                    name="regemail"
                                    className="form-style"
                                    placeholder="Your Email"
                                    autoComplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-at"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    name="regpassword"
                                    className="form-style"
                                    placeholder="Your Password"
                                    autoComplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-lock-alt"></i>
                                </div>
                                <button className="loginbtn loginmb mt-4">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="closemodal"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              <i className="fa-solid fa-circle-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="modal-dialog " id="loginModal" data-bs-backdrop="static">...</div> */}
    </>
  );
}
