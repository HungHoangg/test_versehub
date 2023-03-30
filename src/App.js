import './App.css';
import CoverImage from './components/cover-image/index';
import BasicInfo from './components/basic-info/index';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
    fetch("https://f8-server-6blz.onrender.com")
  }, []);
  return (
    <div className="App">
        {/* <NavBar/> */}
        <CoverImage/>
        <BasicInfo/>
    </div>
  );
}

export default App;
