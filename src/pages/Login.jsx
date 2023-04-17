import { useState } from "react";

// router
import { Link } from "react-router-dom";

// react-icons
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

// components
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  // states
  const [rightPanel, setRightPanel] = useState(false);

  // change form tabs
  const changeForm = (e) => {
    e.preventDefault();
    setRightPanel(!rightPanel);
  };

  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <h2>Welcome to MyShop</h2>
          <div className={rightPanel ? "myForm active" : "myForm"} id="myForm">
            <div className="form-container sign-up-container">
              <form action="#">
                <h3>Create Account</h3>
                <div className="social-container">
                  <Link to="#" className="social">
                    <FaFacebookF />
                  </Link>
                  <Link to="#" className="social">
                    <FaGooglePlusG />
                  </Link>
                  <Link to="#" className="social">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <span>or use your email for registration</span>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button>Register</Button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h3 className="myFormTitle">Log in</h3>
                <div className="social-container">
                  <Link to="#" className="social">
                    <FaFacebookF />
                  </Link>
                  <Link to="#" className="social">
                    <FaGooglePlusG />
                  </Link>
                  <Link to="#" className="social">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <span>or use your account</span>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Link to="#">Forgot your password?</Link>
                <Button>Log In</Button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h3 className="myFormTitle">Welcome Back!</h3>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <Button className="ghost" id="signIn" onClick={changeForm}>
                    Log In
                  </Button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h3>Hello, Friend!</h3>
                  <p>Enter your personal details and start journey with us</p>
                  <Button className="ghost" id="signUp" onClick={changeForm}>
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
