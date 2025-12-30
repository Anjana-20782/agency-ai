import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="dark:bg-black relative">
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};
export default App