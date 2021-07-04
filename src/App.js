import './App.css';
import Header from './Components/header/header';
import Navbar from './Components/navBar/navBar';
import Profile from './Components/Content/profile/profile';
import Dialogs from './Components/Content/dialogs/dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/Content/news/news';
import Music from './Components/Content/music/music';
import Settings from './Components/Content/settings/settings';






const App = (props) => {



  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar state={props.state.navbarData}/>
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/> }/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
