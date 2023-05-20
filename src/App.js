import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Alerts from "./components/Alerts"
import CategoryPage from "./components/CategoryPage";
import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import UpdateUser from "./components/UpdateUser"
import Welcome from "./components/Welcome";
export const ToggleContainer = createContext();

function App() {
  const [themeSwitch, setThemeSwtich] = useState(false);

   const [message, setMessage] = useState(null);
   const [category, setCategory] = useState(null);

   const now = new Date();
   const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) > now));

   function flashMessage(message, category){
       setMessage(message);
       setCategory(category);
   }

   function logUserIn(){
       setLoggedIn(true);
   }

   function logUserOut(){
       setLoggedIn(false);
       localStorage.removeItem('token');
       localStorage.removeItem('tokenExp');
   }

   return (
    <ToggleContainer.Provider value={{ themeSwitch, setThemeSwtich }}>
      <div className={themeSwitch ? "Light" : "Dark"}>
        <Navbar loggedIn={loggedIn} logUserOut={logUserOut} />
        <Alerts message={message} category={category} />
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/home" element={<Main />} />
          <Route path="/login" element={<Login flashMessage={flashMessage} logUserIn={logUserIn} />} />
          <Route path="/signup" element={<SignUp flashMessage={flashMessage} />} />
          <Route path="/category" element={<CategoryPage/>} />
          <Route path="/updateinfo" element={<UpdateUser flashMessage={flashMessage} />} />
        </Routes>
      </div>
    </ToggleContainer.Provider>
  );
     
  // return (
  //   <ToggleContainer.Provider value={{ themeSwitch, setThemeSwtich }}>
  //     <div className={themeSwitch ? "Light" : "Dark"}>
  //       <Navbar />
  //          {message ? <Alerts message={message} category={category} flashMessage={flashMessage} /> : null}
  //         <Routes>
  //           <Route path="/" element={<Main />}/>
  //           <Route path="/login" element={<Login flashMessage={flashMessage}/>}/>
  //           <Route path="/signup" element={<Signup flashMessage={flashMessage}/>}/>
  //         </Routes>
  //           <h3 id="heading" className="heading" style={themeSwitch ? { color: "red" } : { color: "white" }}>PlayFree</h3>
  //           <GameList />
  //           <h3 id="heading" className="heading" style={themeSwitch ? { color: "red" } : { color: "white" }}>Game Search</h3>
  //           <GameSearch/>
  //     </div>
  //   </ToggleContainer.Provider>
  // );
}

export default App;
