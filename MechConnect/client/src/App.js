import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Chat } from "./pages";

import "./App.css";
import Page1 from "./pages/Page1";
import LandingPage from "./components/Authentication/LoginUser";
import Page from "./pages/Page";

const App = () => {
  return (
    <div className="App">
      <Routes>  
        <Route path="/" element={<LandingPage />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/home" element={<Page1/>}/>
        <Route path="/mechhome" element={<Page/>}/>

        {/* If the user enters an invalid path in the URL it automatically redirects them to the homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
