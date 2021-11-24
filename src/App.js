import './App.css';
import Navbar from './Components/navBar/navBar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import News from './Components/Content/news/news';
import Music from './Components/Content/music/music';
import Settings from './Components/Content/settings/settings';

import UsersContainer from "./Components/Content/Users/UsersContainer";

import HeaderContainer from "./Components/header/headerContainer";
import Login from "./Components/Login/login";
import React, {Component, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import store from "./redux/redux-store";

//import DialogsContainer from "./Components/Content/dialogs/dialogsContainer";
const DialogsContainer = React.lazy(() => import('./Components/Content/dialogs/dialogsContainer'));
//import ProfileContainer from "./Components/Content/profile/profileContainer";
const ProfileContainer = React.lazy(() => import('./Components/Content/profile/profileContainer'));



class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized){
      return <Preloader />
    }

    return (
        <BrowserRouter>
          <div className="App-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
              <Route path='/dialogs' render={() => {
                return <React.Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer/>
                </React.Suspense>
              }}/>
              <Route path='/profile/:userId?' render={() => {
                return <React.Suspense fallback={<div>Loading...</div>}>
                  <ProfileContainer />
                </React.Suspense>
              }}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Settings}/>
              <Route path='/users' render={() => <UsersContainer/>}/>
              <Route path='/login' render={() => <Login/>}/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(connect(mapStateToProps, {initializeApp}))(App);
const MainApp = (props) => {
  return <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
}
export default MainApp;
