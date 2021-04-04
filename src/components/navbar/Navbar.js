import "./Navbar.css"
import avatar from '../pics/woman.png'
const Navbar=({sidebarOpen,openSidebar})=>{
    return(
      <nav className="navbar">
        <div className="nav_icon" onClick={()=>openSidebar} >
            <i className="fa fa-bars"></i>
        </div>
        <div className="nav__left">
        
            <img className="logo"src="https://media-exp1.licdn.com/dms/image/C511BAQEVDsmFQhYUuQ/company-background_10000/0/1519800283195?e=2159024400&v=beta&t=16Z-5UzjwVDrE6ei4vVZE5MY2-kPMtA-Tpp9glDXFkc"/>
           
        </div>
        <div className="nav__right">
          {/* <a href="#"className="link1">
              <i className="fa fa-search"></i>
          </a> */}
         
          <a href="#"className="link1">
           {/* place the image of the avatr */}
           <img className="logo1"width="25"src={avatar} />
          </a>
        </div>
      </nav>
    )
}
export default Navbar;

