import React, { useRef, useState } from "react";

const EditUser = ({ selectedEditUser, updatingUser }) => {
  const copiedUser = { ...selectedEditUser };
  console.log(selectedEditUser);
  const [success, setSucess] = useState("");
  const nameRef = useRef(null);
  const deptRef = useRef(null);
  //   const user = { name: "", department: "" };

  const handleUserUpdate = (e) => {
    e.preventDefault();
    let updatedName = nameRef.current.value;
    let updatedDept = deptRef.current.value;
    console.log(updatedName, updatedDept);
    const updatedUser = {
      ...selectedEditUser,
      name: updatedName,
      department: updatedDept,
    };
    // console.log(updatedUser);
    updatingUser(updatedUser);
    formReset();
  };

  const formReset = () => {
    nameRef.current.value = "";
    deptRef.current.value = "";
  };

  //   const hanldleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  return (
    <>
      <form onSubmit={handleUserUpdate}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Name
          </label>
          <input
            // value={copiedUser.name}
            defaultValue={copiedUser.name}
            ref={nameRef}
            type="text"
            className="form-control"
            id="fullname"
            placeholder="enter full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            // value={copiedUser.department}
            defaultValue={copiedUser.department}
            ref={deptRef}
            type="text"
            className="form-control"
            id="department"
            placeholder="enter department"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update User
          </button>
        </div>
      </form>

      {success && (
        <p className="text-primary">
          User details updated Successfully! Visit Users List page and view the
          user
        </p>
      )}
    </>
  );
};

export default EditUser;
