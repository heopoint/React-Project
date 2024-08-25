import  './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Join from './pages/Join';
import Members from './pages/Members';
import Posts from './pages/Posts';
import Youtube from './pages/Youtube';
import YoutubeDetail from './pages/YoutubeDetail';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/youtube/:id" element={<YoutubeDetail />} />
      </Routes>
        <Footer />
    </div>
  );
}
export default App;