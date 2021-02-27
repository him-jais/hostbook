import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import png1 from "../../assets/png1.jpg";
const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <h2>Dashboard</h2>
      
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
        <i className="fal fa-envelope"></i>
        </a>
        <a href="#">
        <i className="fal fa-bell"></i>
        </a>
       <a><b>Mr Smith</b></a>
        <a href="#!">
          <img width="30" className="images" src={png1} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
