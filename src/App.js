import './App.css';
import Header from './Components/header/header';
import Navbar from './Components/navBar/navBar';
import Content from './Components/content/content';


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
