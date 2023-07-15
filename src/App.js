import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import AddUser from "./Pages/AddUser";
import "./App.css";
import UsersList from "./Pages/UsersList";
import OtherLayout from "./Pages/OtherLayout";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { useState } from "react";
import NotFound from "./Pages/NotFound";
import { useNavigate } from "react-router-dom";
import EditUser from "./Pages/EditUser";
import AddTeacher from "./Pages/AddTeacher";
import EditTeacher from "./Pages/EditTeacher";
import TeachersList from "./Pages/TeachersList";
import Teacher from "./Pages/Teacher";

const App = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "John Smith", department: "CSE" },
    { id: "2", name: "Sam S", department: "EEE" },
    { id: "3", name: "Maria S", department: "MECH" },
  ]);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedEditUser, setSelectedEditUser] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedEditTeacher, setSelectedEditTeacher] = useState("");

  const addingUser = (newUserData) => {
    let originalUsers = [...users];
    setUsers([...users, { ...newUserData, id: users.length + 1 }]);
  };

  const updatingUser = (updateduser) => {
    let originalUsers = [...users];
    console.log("in updating user: ", updateduser);
    const updatedUsers = users.map((u) =>
      u.id === updateduser.id ? updateduser : u
    );
    console.log("after update: ", updatedUsers);
    setUsers(updatedUsers);
    navigate(`/students`);
  };

  const navigate = useNavigate();

  const handleDelete = (user) => {
    // console.log("in handle delete", user);
    const originalUsers = [...users];
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
    navigate(`/students`);
  };

  const handleUpdate = (user) => {
    const originalUsers = [...users];
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    setUsers(updatedUsers);
    navigate(`/students`);
  };

  const [teachers, setTeachers] = useState([
    { id: "1", name: "Madhavan", department: "CSE" },
    { id: "2", name: "Samy", department: "EEE" },
    { id: "3", name: "Maria Selvam", department: "MECH" },
  ]);

  const addingTeacher = (newTeacherData) => {
    let originalTeachers = [...teachers];
    setTeachers([...teachers, { ...newTeacherData, id: teachers.length + 1 }]);
  };

  const updatingTeacher = (updatedTeacher) => {
    let originalTeachers = [...teachers];
    console.log("in updating teacher: ", updatedTeacher);
    const updatedTeachers = teachers.map((t) =>
      t.id === updatedTeacher.id ? updatedTeacher : t
    );
    console.log("after update: ", updatedTeachers);
    setTeachers(updatedTeachers);
    navigate(`/teachers`);
  };

  const handleDeleteTeacher = (teacher) => {
    // console.log("in handle delete", teacher);
    const originalTeachers = [...teachers];
    const updatedTeachers = teachers.filter((t) => t.id !== teacher.id);
    setTeachers(updatedTeachers);
    navigate(`/teachers`);
  };

  const handleUpdateTeacher = (teacher) => {
    const originalTeacher = [...teachers];
    const updatedTeachers = teachers.map((t) =>
      t.id === teacher.id ? teacher : t
    );
    setTeachers(updatedTeachers);
    navigate(`/teachers`);
  };

  return (
    <div class="page-area">
      <nav className="navbar">
        <ul className="">
          <li className="">
            <Link to="/">
              <button type="button" class="btn btn-dark ">
                Home
              </button>
            </Link>
          </li>

          <li className="">
            <Link to="/students">
              <button type="button" class="btn btn-dark">
                Students List
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/students/add">
              <button type="button" class="btn btn-dark">
                Add Student
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/teachers">
              <button type="button" class="btn btn-success">
                Teachers List
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/teachers/add">
              <button type="button" class="btn btn-success">
                Add Teacher
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students">
          <Route
            index
            element={
              <UsersList
                users={users}
                onSelect={(user) => {
                  console.log("selected user", user);
                  setSelectedUser(user);
                }}
              />
            }
          />
          <Route
            path=":id"
            element={
              <User
                user={selectedUser}
                handleDelete={handleDelete}
                onEdit={(user) => setSelectedEditUser(user)}
              />
            }
          />
          <Route
            path=":id/editStudent"
            element={
              <EditUser
                selectedEditUser={selectedEditUser}
                updatingUser={updatingUser}
              />
            }
          />
          <Route path="add" element={<AddUser addingUser={addingUser} />} />
        </Route>

        {/* start of teachers */}
        <Route path="/teachers">
          <Route
            index
            element={
              <TeachersList
                teachers={teachers}
                onSelect={(teacher) => {
                  console.log("selected teacher", teacher);
                  setSelectedTeacher(teacher);
                }}
              />
            }
          />
          <Route
            path=":id"
            element={
              <Teacher
                teacher={selectedTeacher}
                handleDelete={handleDeleteTeacher}
                onEdit={(teacher) => setSelectedEditTeacher(teacher)}
              />
            }
          />
          <Route
            path=":id/editTeacher"
            element={
              <EditTeacher
                selectedEditTeacher={selectedEditTeacher}
                updatingTeacher={updatingTeacher}
              />
            }
          />
          <Route
            path="add"
            element={<AddTeacher addingTeacher={addingTeacher} />}
          />
        </Route>

        {/* till teacher */}

        <Route element={<OtherLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
