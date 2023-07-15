import React from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../assets/user.png";

const Card = ({ user, handleDelete, onEdit }) => {
  const navigate = useNavigate();

  const editUserDetails = (user) => {
    onEdit(user);
    navigate(`/users/:${user.id}/editUser`);
  };
  return (
    <div className="card card-content" style={{ width: "18rem" }}>
      <img src={userImage} className="card-img-top book-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-title">Department: {user.department}</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <div className="d-flex flex-row">
          <button
            className="btn btn-dark text-white"
            onClick={() => editUserDetails(user)}
          >
            Edit User
          </button>
          <button
            onClick={() => handleDelete(user)}
            className="btn btn-dark mx-2 text-white"
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
