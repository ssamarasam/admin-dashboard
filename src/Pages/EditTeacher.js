import React, { useRef, useState } from "react";

const EditTeacher = ({ selectedEditTeacher, updatingTeacher }) => {
  const copiedTeacher = { ...selectedEditTeacher };
  console.log(selectedEditTeacher);
  const [success, setSucess] = useState("");
  const nameRef = useRef(null);
  const deptRef = useRef(null);
  //   const teacher = { name: "", department: "" };

  const handleTeacherUpdate = (e) => {
    e.preventDefault();
    let updatedName = nameRef.current.value;
    let updatedDept = deptRef.current.value;
    console.log(updatedName, updatedDept);
    const updatedTeacher = {
      ...selectedEditTeacher,
      name: updatedName,
      department: updatedDept,
    };
    // console.log(updatedTeacher);
    updatingTeacher(updatedTeacher);
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
      <form onSubmit={handleTeacherUpdate}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Name
          </label>
          <input
            // value={copiedTeacher.name}
            defaultValue={copiedTeacher.name}
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
            // value={copiedTeacher.department}
            defaultValue={copiedTeacher.department}
            ref={deptRef}
            type="text"
            className="form-control"
            id="department"
            placeholder="enter department"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update Teacher
          </button>
        </div>
      </form>

      {success && (
        <p className="text-primary">
          Teacher details updated Successfully! Visit Teachers List page and
          view the teacher
        </p>
      )}
    </>
  );
};

export default EditTeacher;
