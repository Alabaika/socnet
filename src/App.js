import './App.css';
import Header from './Components/header/header';
import Navbar from './Components/navBar/navBar';
import Content from './Components/content/content';
import Dialogs from './Components/dialogs/dialogs';


const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Content />  */}
       <Dialogs />
      </div>
    </div>
  );
}

export default App;
