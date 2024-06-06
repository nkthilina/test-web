import Contacts from "./pages/Contacts";
import Login from "./auth/Login";
import NewContact from "./pages/NewContact";
import Signup from "./auth/Signup";
import Welcome from "./pages/Welcome";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Welcome />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/new" element={<NewContact />} />
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
