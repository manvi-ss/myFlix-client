import { useState } from "react";
import { Form, Button, Card, Col } from "react-bootstrap";

export const UserEdit = ({ user, token, updateUser, onLoggedOut }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };
    fetch(`https://movie-api-movieflix.onrender.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        alert("User information has been updated!");
        onLoggedOut();
      } else {
        console.log(data);
        alert("Something Wrong");
      }
    });
  };

  return (
    <>
      <Card className="m-5 bg-light w-50">
        <Card.Title className="pt-4 d-flex justify-content-center">
          <h3>Update your Profile</h3>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="bg-light">
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength="3"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="3"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBirthday" className="mb-3">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </Form.Group>
            <Col className="mb-3  d-flex pt4 justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
