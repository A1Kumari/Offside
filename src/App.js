import logo from './logo.svg';
import './App.css';
import Homepage from "./components/Homepage/homepage"
import About from "./components/About/About.jsx"
import Rewards from "./components/Rewards/Rewards.jsx"
import Testimony from './components/Testimony/Testimony.jsx';
import Footer from "./components/Footer/Footer.jsx"
import Header from './components/Navbar/Navbar';
import Contest from './components/Contest/Contest';
import Doubt from './components/Doubt/Doubt';

function App() {
  return (
    <>
    <Header/>
      <Homepage/>
      <Rewards/>
      <Contest/>
      <Doubt/>
      <Footer/>
    </>
  );
}

export default App;
