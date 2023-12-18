import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const onSubmit = () => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/validatePassword", {
        username: inputUsername,
        password: inputPassword,
      })
      .then((res) => {
        if (res.data.validation) {
          alert("you have logged in");
        } else {
          alert("login failed");
        }
      });
  };
  return (
    <div className="login-form p-5 d-flex flex-column justify-content-center align-items-center w-50 rounded">
      <h3 className="bg-info p-4 rounded border-black">LOGIN FORM</h3>
      <div>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>username</Form.Label>
            <Form.Control
              type="text"
              value={inputUsername}
              placeholder="Username"
              onChange={(e) => setInputUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your username with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={inputPassword}
              placeholder="Password"
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
