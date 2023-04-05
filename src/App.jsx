import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHomePage from "./components/MyHomePage";
import "bootstrap/dist/js/bootstrap"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<MyHomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="*"
            element={<NotFound spacings="pt-5" variant="danger" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
