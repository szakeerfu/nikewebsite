 
import './App.css';
import { Routes, Route } from "react-router-dom"
import gsap from 'gsap';
import Home from './components/organism/organismfloder/Hero/Home';
import About from './components/organism/organismfloder/aboutfloder/About';
import Contact from './components/organism/organismfloder/contactfloder/Contact';
import Store from './components/organism/organismfloder/storefloder/shopfloder/ShopList';
 
import Navbar from './components/molecule/moleculefloder/Navbar';
import Collection from './components/organism/organismfloder/collectionfloder/Collection';
import AddtoCard from './components/organism/organismfloder/addcardfloder/AddtoCard';
// import {ShopContextProvider} from './context/shopcontext.jsx'



function App() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      {/* <ShopContextProvider> */}

       
      

    
      
      <Navbar timeline={timeline}/>
    
       
      <Routes>
       
        <Route path="/" element={ <Home timeline={timeline}/> } />
        <Route path="about" element={ <About/> } />
        <Route path="Store" element={  <Store/>} />
        <Route path="contact" element={  <Contact/>} />
        <Route path='Collection' element={<Collection/>}/>
        <Route path='AddtoCard' element= {<AddtoCard/>}/>

        
      </Routes>
     
      {/* </ShopContextProvider>
   */}
    </div>
  );
}

export default App;
