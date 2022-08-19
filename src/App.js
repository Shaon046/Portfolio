import "./App.css";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import Objective from "./component/objective/Objective";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio/>
      <Objective/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
