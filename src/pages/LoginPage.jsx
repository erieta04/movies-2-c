import "./Signup_Login_Page.css";
import Row from "../ui/Row";
import Button from "../ui/Button";
import Logo from "../ui/components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Login } from "../services/authenticationService";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  async function handleLogin() {
    const result = await Login(email, password);
    console.log(result);
    navigate("/home");
  }

  return (
    <div className="page_container">
      <Row content="center" type="horizontal">
        <div className="box_container">
          <Row content="center" type="horizontal" margin="0.5rem">
            <Logo></Logo>
          </Row>
          <Row type="vertical" gap="1rem">
            <input
              className="input"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="input"
              placeholder="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </Row>
          <Row gap="0.2rem" margin="0.5rem">
            <p> Don't have an account?</p>
            <a className="login_url" href="/signup">
              Signup
            </a>
          </Row>
          <Row
            gap="1rem"
            margin="1rem 0 0 0"
            content="center"
            type="horizontal"
          >
            <Link to="/home" className="home-button-wrapper">
              <Button>Back</Button>
            </Link>
            <Button onClick={handleLogin}>Login</Button>
          </Row>
        </div>
      </Row>
    </div>
  );
}
