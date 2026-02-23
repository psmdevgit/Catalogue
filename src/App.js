import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoldProducts from './pages/GoldProducts'
import SilverProducts from './pages/Silverproduct'
import DiamondProducts from './pages/DiamondProduct'
import PlatinumProducts from './pages/PlatinumProducts'

function App() {

  const [activeMetal, setActiveMetal] = useState("Gold"); // ✅ default active

  const metals = ["Gold", "Silver", "Diamond", "Platinum"];

  const Gold22kt = '14315.0';
  const Gold24kt = '15731.0';  
  const SilevrRate = '270.0';

  return (
    <div className="App">

      <Navbar />

      <div className='Main'>

        <div className='metal' style={{ background: '#eee' }}>
          <div className='container d-flex justify-content-between'>

            <ul className='d-flex p-lg-2 fw-bold gap-lg-3 metalList'>

              {metals.map((item) => (
                <li className='wrapper' key={item}>
                  <button
                    className={`metallink ${activeMetal === item ? "activeMetal" : ""}`}
                    onClick={() => setActiveMetal(item)}
                  >
                    <span>{item}</span>
                  </button>
                </li>
              ))}

            </ul>

              <div className="d-flex py-lg-2 justify-content-end align-items-center" style={{fontSize:'.8rem'}}>
                  {/* <label className="fw-bold me-3">
                    <span>Gold 22KT : ₹{Gold22kt} | </span>
                    <span>Gold 24KT : ₹{Gold24kt} | </span>
                    <span>Silver : ₹{SilevrRate}</span>
                    </label> */}

                    <label className="fw-bold me-3" style={{width:"50%"}}>
                      <marquee behavior="scroll" direction="left" scrollamount="6">
                        Gold 22KT : ₹{Gold22kt} &nbsp;&nbsp; | &nbsp;&nbsp;
                        Gold 24KT : ₹{Gold24kt} &nbsp;&nbsp; | &nbsp;&nbsp;
                        Silver : ₹{SilevrRate}
                      </marquee>
                    </label>

                  <button className="text-sm fw-bold btn-sm btn-warning btn px-lg-3">
                    <i class="bi bi-percent fw-bold me-1"></i>
                    offer
                  </button>   
              </div>
              

          </div>
        </div>

        <div className='product'>

            <div className="metalTab">

              {activeMetal === "Gold" && <GoldProducts />}
              {activeMetal === "Silver" && <SilverProducts />}
              {activeMetal === "Diamond" && <DiamondProducts />}
              {activeMetal === "Platinum" && <PlatinumProducts />}

            </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;
