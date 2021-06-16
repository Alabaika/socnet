import './App.css';
import Header from './Components/header/header';
import Navbar from './Components/navBar/navBar';
import Profile from './Components/profile/profile';
import Dialogs from './Components/dialogs/dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/news/news';
import Music from './Components/music/music'
import Settings from './Components/settings/settings'


const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
