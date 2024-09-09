import "./App.css";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { MailchimpForm } from "./components/Mailchimb";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <MailchimpForm />
      <Footer />
    </div>
  );
}

export default App;
