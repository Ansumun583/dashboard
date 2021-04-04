import { useState } from "react";
import Main from "./components/main/main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./login";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Test from "./components/test";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Router>
        
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/test" component={Test} />
        </Switch>

        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </Router>
    </div>
  );
};

export default App;
