import { Route, Routes } from "react-router-dom";
import Main from "./Admin/Home/Main";
import Login from "./Component/LoginS/Login";
import SignUp from "./Component/LoginS/SignUp";
import Home from "./Admin/Home/Home";
import AddElection from "./Admin/Election/AddElection";
import AddParty from "./Admin/party/AddParty";
import Election from "./Admin/Election/Election";
import Parties from "./Admin/party/Parties";
import Votes from "./Admin/Votes/Votes";
import Users from "./Admin/Users/Users";
import AddUsers from "./Admin/Users/AddUsers";
import Profile from "./Admin/Profile/Profile";
import NotFound from "./Component/NotFound";
import ProtectRouter from "./Component/ProtectRouter";
import VotesU from "./User/pages/Votes";
import { useEffect, useState } from "react";

function App() {
  const [loginRole , setLoginRole] = useState()

  console.log(loginRole,'appjs');
  useEffect(()=>{
    setLoginRole(JSON.parse(localStorage.getItem('loginRole')) )
  },[loginRole])
  const role = loginRole
  console.log(role,'appjs');


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login setLoginRole={setLoginRole}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectRouter />}>
        { role === 'Admin' ?<>
          <Route path="/home" element={<Home loginRole={loginRole}/>} />
          <Route path="/addelection" element={<AddElection />} />
          <Route path="/addparty" element={<AddParty />} />
          <Route path="/election" element={<Election />} />
          <Route path="/parties" element={<Parties />} />
          <Route path="/votes" element={<Votes />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addusers" element={<AddUsers />} />
          <Route path="/profile" element={<Profile />} />

        </>
        
      :<>
          <Route path="/home" element={<Home/>} />
          <Route path="/vote" element={<VotesU/>} />
          <Route path="/profile" element={<Profile/>} />

      </> }
         
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
