
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      
     
     <Weather defaultCity="San Francisco" />
     <footer>
     <i class="fab fa-github"></i>
     <a href="https://github.com/BoDC/weather-react" target= "_blank" rel="noreferrer">Open-source code </a>
      by Bo
   </footer>
       </div>
       </div>
  );
}

export default App;
