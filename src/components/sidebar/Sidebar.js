import "./sidebar.css";
import {Route,Switch,Link} from 'react-router-dom'
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img style={{height:'50px',borderRadius:'20'}} src="https://yt3.ggpht.com/ytc/AAUvwnioifcewXeU80RtTUC4pH5o0vgC5wx0EAnZxIEc=s900-c-k-c0x00ffffff-no-rj"/>
          <h1>NexInvoicing</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
         
            <a href="/">Dashboard</a>
          
          
        </div>
        <h2>Items</h2>
        <div className="sidebar__link">
        <i className="fa fa-wrench"></i>
         
          <a href="#">Settings</a>
        </div>
      
        <div className="sidebar__link">
          
        <i className="fa fa-user-secret"></i>
          <a href="/test">Clients</a>
          
         
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Invoices</a>
        </div>
        
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Requests</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Sign Out </a>
        </div>
        
      </div>
    </div>
  );
};
export default Sidebar;
