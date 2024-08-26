import "./App.css";
import Layout from "./components//Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from "./pages/welcome/Welcome";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import Rovers from "./pages/rovers/Rovers";
import Astronomy from "./pages/Astronomy";
// import Homepage from "./pages/Homepage";
import Homepage from "./pages/Homepage";
import Selection from "./pages/Selection";
import EarthImages from "./pages/EarthImages";
import Login from "./pages/Login";
import Registration from "./pages/Register";



function App() {
  return (
    <Router>
      <ToastContextProvider>
        <AuthContextProvider>
          <Layout>
            <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Registration />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/Selection" element={<Selection />} />
            <Route path="/Astronomy" element={<Astronomy />} />
            <Route path="/EarthImages" element={<EarthImages />} />
            <Route path="/Rovers" element={<Rovers />} />



            {/* <Route path="/" element={<Homepage />} />
            <Route path="/Selection" element={<Selection />} />

              <Route path="/Rovers" element={<Rovers />} />
              <Route path="/RoversPanoromic" element={<RoversPanoromic />} />
              <Route path="/Astronomy" element={<Astronomy />} />
              <Route path="/EarthImages" element={<EarthImages />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Registration />} /> */}






              {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            </Routes>
          </Layout>
        </AuthContextProvider>
      </ToastContextProvider>
    </Router>
  );
}

export default App;



















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
