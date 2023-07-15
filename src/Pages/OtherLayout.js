import { Link, Outlet } from "react-router-dom";

const OtherLayout = () => {
  return (
    <>
      <nav className="">
        <ul className="list-group d-flex flex-row align-items-center justify-content-center">
          <li className="list-group-item">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="list-group-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default OtherLayout;
