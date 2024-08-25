import Footer from './components/Footer';
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import pageData from './data/pageData'
 import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
    
      {pageData.map((data, idx) => {
        // <Route path="/members" element={<Members />} />
					return <Route key={idx} path={data.path} element={<data.comp />} />;
				})}

      </Routes>
        <Footer />
    </div>
  );
}
export default App;