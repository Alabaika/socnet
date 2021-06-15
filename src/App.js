import './App.css';
import Header from './Components/header/header.jsx';
import Navbar from './Components/navBar/navBar.jsx';
import Content from './Components/content/content.jsx';


const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
