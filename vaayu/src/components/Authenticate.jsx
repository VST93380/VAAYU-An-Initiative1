import React from "react";

export default function Authenticate() {
  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body login">
              <div className="container">
                <div className="row full-height justify-content-center">
                  <div className="section text-center">
                    <h6 className="mb-0 pb-3">
                      <span className="loginbtn">Log In </span>
                      <span className="loginbtn">Sign Up</span>
                    </h6>
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="reg-log"
                      name="reg-log"
                    />
                    <label for="reg-log"></label>
                    <div className="card-3d-wrap mx-auto">
                      <div className="card-3d-wrapper">
                        <div className="card-front">
                          <form>
                            <div className="center-wrap">
                              <div className="section text-center">
                                <h4 className="mb-4 pb-3">Log In</h4>
                                <div className="form-group mt-2">
                                  <input
                                    type="tel"
                                    name="logphone"
                                    className="form-style"
                                    placeholder="Your Phone Number"
                                    id="logphone"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    autocomplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-mobile-android-alt"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    name="logpass"
                                    className="form-style"
                                    placeholder="Your Password"
                                    id="logpass"
                                    autocomplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-lock-alt"></i>
                                </div>
                                <button className="loginbtn loginmb mt-4">
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
                          <form>
                            <div className="center-wrap">
                              <div className="section text-center">
                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="logname"
                                    className="form-style"
                                    placeholder="Your Full Name"
                                    id="logname"
                                    autocomplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-user"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="tel"
                                    name="logphone"
                                    className="form-style"
                                    placeholder="Your Phone Number"
                                    id="logphone"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    autocomplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-mobile-android-alt"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="email"
                                    name="logemail"
                                    className="form-style"
                                    placeholder="Your Email"
                                    id="logemail"
                                    autocomplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-at"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    name="logpass"
                                    className="form-style"
                                    placeholder="Your Password"
                                    id="logpass"
                                    autocomplete="off"
                                    required
                                  />
                                  <i className="input-icon uil uil-lock-alt"></i>
                                </div>
                                <button href="#" className="loginbtn loginmb mt-4">
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
          </div>
        </div>
      </div>
      {/* <div className="modal-dialog " id="loginModal" data-bs-backdrop="static">...</div> */}
    </>
  );
}
