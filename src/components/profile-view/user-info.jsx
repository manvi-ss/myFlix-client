import React from "react";

export const UserInfo = ({ user }) => {
  return (
    <>
      <p>User : {user.Username} </p>
      <p>Email: {user.Email} </p>
    </>
  );
};
