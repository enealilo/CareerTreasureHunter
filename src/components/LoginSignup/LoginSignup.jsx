import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

function LoginSignup() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text"  placeholder="NAME"/>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="EMAIL ID"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="PASSWORD" />
        </div>
      </div>
      <div className="forgot-password">
        Forgot Password? <span>Click Here</span>
      </div>
      <div className="submit-container">
        <div className="submit">Post A Jobs</div>
        <div className="submit">Sign In</div>
      </div>
    </div>
  );
}

export default LoginSignup;
