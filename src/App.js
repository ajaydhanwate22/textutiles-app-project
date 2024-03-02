// import logo from './logo.svg';
import Nvabar from './component/Nvabar';
import Textform from './component/Textform';
import About from './component/About';


// import './App.css';

function App() {
  return (
    <>
    
<Nvabar title ="textutiles" abouttext="aboutus" homename= "home "/>
<div className="container my-3">
<Textform heading= "Enter Your Text TO Analysis Below !!" />
<About/>
</div>

    </>
  );
}

export default App;
