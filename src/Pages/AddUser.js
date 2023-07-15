import React, { useRef, useState } from "react";

const AddUser = ({ addingUser }) => {
  const [success, setSucess] = useState(false);
  const nameRef = useRef(null);
  const deptRef = useRef(null);
  const user = { name: "", department: "" };

  const handleUserAdd = (e) => {
    e.preventDefault();
    user.name = nameRef.current.value;
    user.department = deptRef.current.value;
    addingUser(user);
    formReset();
    setSucess(true);

    setTimeout(() => {
      setSucess(false);
    }, 5000);
  };

  const formReset = () => {
    nameRef.current.value = "";
    deptRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleUserAdd}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="fullname"
            placeholder="enter full name"
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            ref={deptRef}
            type="text"
            className="form-control"
            id="department"
            placeholder="enter department"
            minLength={3}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>

      {success && (
        <p className="text-primary">
          Used Added Successfully! Visit Users List page to find the newly added
          user.
        </p>
      )}
    </>
  );
};

export default AddUser;
