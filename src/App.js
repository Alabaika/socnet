import './App.css';
import Navbar from './Components/navBar/navBar';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/Content/news/news';
import Music from './Components/Content/music/music';
import Settings from './Components/Content/settings/settings';
import DialogsContainer from "./Components/Content/dialogs/dialogsContainer";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import ProfileContainer from "./Components/Content/profile/profileContainer";
import HeaderContainer from "./Components/header/headerContainer";
import Login from "./Components/Login/login";







const App = (props) => {



  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/users' render ={ () => <UsersContainer />}/>
          <Route path='/login' render ={ () => <Login />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
