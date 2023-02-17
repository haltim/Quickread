import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import Business from "./components/menus/Business";
import Entertainment from "./components/menus/Entertainment";
import Fashion from "./components/menus/Fashion";
import SingleBlogPost from './components/SingleBlogPost';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/singleblogpost" element={<SingleBlogPost  />} />
      </Routes>

    </>


  );
}

export default App;
