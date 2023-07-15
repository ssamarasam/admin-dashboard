import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../assets/user.png";

const TeachersList = ({ teachers, onSelect }) => {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, [teachers]);

  const navigate = useNavigate();
  if (teachers.length === 0)
    return (
      <div class="alert alert-primary noUsers" role="alert">
        No teachers in database!
      </div>
    );

  return (
    <>
      {/* {showAlert && <p>Teachers List updated!</p>} */}
      <ul className="userslist list-group d-flex flex-row flex-wrap">
        {teachers.map((user) => (
          <li
            className="userslist list-group-item"
            onClick={() => {
              onSelect(user);
              navigate(`/teachers/${user.id}`);
            }}
            key={user.id}
          >
            <div className="users-list-box">
              <img
                src={userImage}
                className="card-img-top user-image"
                alt="..."
              />
              <p className="user-name">{user.name}</p>
              <p>{user.department}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeachersList;
