import "./App.css";
//import Post from "./post"
// import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Indexpage from "./page/Indexpage";
import LoginPage from "./page/Loginpage";
import RegisterPage from "./page/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./page/CreatePost";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
