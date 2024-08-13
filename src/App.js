import logo from "./logo.svg";
import "./App.css";
import Header from "./componenets/Header/Header";
import Slogan from "./componenets/Slogan/Slogan";
import Updates from "./componenets/Updates/Updates";
import AboutUs from "./componenets/AboutUs/AboutUs";
import Profile from "./componenets/Profile/Profile";
import SolutionApproach from "./componenets/SolutionApproach/SolutionApproach";
import EmptyPage from "./componenets/EmptyPage/EmptyPage";
import Revenue from "./componenets/Revenue/Revenue";
import YearUpdates from "./componenets/Year-Updates/YearUpdates";
import TestimonialCard from "./componenets/TestimonialCard/TestimonialCard";
import Footer from "./componenets/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Slogan />
      <Updates />
      <AboutUs />
      <Profile />
      <SolutionApproach />
      <EmptyPage />
      <Revenue />
      <YearUpdates />
      <TestimonialCard />
      <Footer />
    </div>
  );
}

export default App;
