import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const UserInfo = ({ user, token, onLoggedOut }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteAccount = () => {
    fetch(`https://movie-api-movieflix.onrender.com/users/${user.Username}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (response.ok) {
          alert("Account has been deleted!");
          onLoggedOut();
        } else {
          alert(" Could not delete account");
        }
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <>
      <Card className="m-5 bg-light w-50 mh-40">
        <Card.Title className="pt-4 d-flex justify-content-center">
          <h3>Your Information</h3>
        </Card.Title>
        <Card.Body className="px-4 mx-auto d-flex flex-column bg-light">
          <p>Username : {user.Username}</p>
          <p>Email: {user.Email} </p>
          <Button variant="danger" onClick={handleShow} className="my-4">
            Delete account?
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Are you sure you want to delete account?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteAccount}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
