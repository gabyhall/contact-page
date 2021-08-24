
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
        <h3>Details</h3>
        <p>43 Bridgewater Street</p>
        <p>Liverpool</p>
        <p>Merseyside</p>
        <p>L1 0AR</p>
        <br></br>
        <p>0151 305 7376</p>
        <br></br>
        <p>contact@atrafloor.com</p>
      </div>
    </div>
  );
}

export default App;
