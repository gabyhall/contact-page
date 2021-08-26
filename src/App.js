
import './App.css';
import Contact from "./components/contact";
import Form from "./components/form";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Form />
      <div className="details">
        <h3>Contact Us At:</h3>
        <p>1 Liverpool Street</p>
        <p>Liverpool</p>
        <p>Merseyside</p>
        <p>L1 0AB</p>
        <br></br>
        <p>0151 123 4567</p>
        <br></br>
        <p>hello@contact.com</p>
      </div>
    </div>
  );
}

export default App;
