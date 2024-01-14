import { useState } from "react";
import Navbar from "./components/Navbar";
import SiteRoutes from "../SiteRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { id: 1, name: "Kerem" };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="container">
        <div className="col-sm-12">
          <SiteRoutes handleLogin={handleLogin} />
        </div>
      </div>
    </>
  );
}

export default App;
