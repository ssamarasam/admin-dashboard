import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const User = ({ user, handleDelete, onEdit }) => {
  const { id } = useParams();
  //   const [displayBook, setDisplayBook] = useState(true);

  return (
    <div>
      <h3>Details of the individual User </h3>
      <p>User# {id} </p>
      <p> UserName: {user.name}</p>
      <Card user={user} handleDelete={handleDelete} onEdit={onEdit} />
    </div>
  );
};

export default User;
