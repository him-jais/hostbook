import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>TwitHR</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
      
        <div className="sidebar__link">
        <i className="fad fa-user-friends"></i>
          <a href="#">Recruitment</a>
        </div>
        <div className="sidebar__link">
        <i className="far fa-file-spreadsheet"></i>
          <a href="#">Onboarding</a>
        </div>
        <div className="sidebar__link">
        <i className="fas fa-chart-pie-alt"></i>
          <a href="#">Reports</a>
        </div>
        <div className="sidebar__link">
        <i className="fad fa-calendar-alt"></i>
          <a href="#">Calender</a>
        </div>
        <div className="sidebar__link">
        <i className="fas fa-cog"></i>
          <a href="#">Settings</a>
        </div>
      
      </div>
    </div>
  );
};

export default Sidebar;
