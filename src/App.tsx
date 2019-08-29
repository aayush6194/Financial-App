import React from 'react';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import './App.css';
import './style/animations.css';
import {Navbar, Modal , Loader} from './components';
import {Home, Setting, Simulation, Startpage, Signup, UserStartPage, ClassDashboard, AdminPanel} from './pages';
import api from './api';
import { setLocalStorage } from './utils/utils';

type Props = {
  loggedin: boolean, tokenChecked: boolean, showNav: boolean, user: object, modal: boolean
}

export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, user: {}, modal: false};
  }

  componentWillMount() {
    if(!this.state.tokenChecked){
      api.auth()
      .then((res)=> {
        if(res.success) this.setState({loggedin : true, user : res.user});
        this.setState({tokenChecked: true});
        })
      .catch((err)=>{
        alert(err);
        this.setState({tokenChecked: true});
      }
      );
    }
  }

  render(){
    const login = (e: any) => {
      api.login(e)
        .then(res => {
          if (res.success) {
            this.setState({ loggedin: true, user: res.user });
            setLocalStorage("token", res.token);
          } else {
            alert(res.message);
          }
        })
        .catch(err => alert(err));
     };

    const loggedin = (token : string, user: object) => {
        setLocalStorage("token", token);
        this.setState({user: user, loggedin: true});
    }

    const logout = () => {
        setLocalStorage("token", "");
        this.setState({ loggedin: false });
    }

    const close = ()=>{
      this.setState({modal: false})
    }

    return(
          <>{this.state.tokenChecked?
                <Router>
                    {this.state.loggedin ?
                      <div className={this.state.showNav? "grid-main": ""}>
                        <Navbar showNav={this.state.showNav} hide={()=>{this.setState({showNav: !this.state.showNav})}}/>
                        <Switch>
                          <Route path="/classes" render={() => <UserStartPage user={this.state.user}/>} />
                          <Route path="/classDashboard" render={() => <ClassDashboard user={this.state.user}/>} />
                          <Route path="/Simulation" render={()=> <Simulation user={this.state.user} />} />
                          <Route path="/setting" render={()=> <Setting logout={logout} user = {this.state.user}/>} />
                          <Route path="/admin-pannel" render={()=> <AdminPanel />} />
                          <Route path="/" render={()=> <Home user={this.state.user} />} />
                        </Switch>
                    </div>
                   :
                   <Switch>
                      <Route path="/signup" render={() => <Signup loggedin={loggedin} />} />
                      <Route render={()=> <Startpage login={login}  loggedin={loggedin}/>} />
                    </Switch>
                  }
              </Router>
                :
              <Loader />
          }
        </>
      );
    }
}
