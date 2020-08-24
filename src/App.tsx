import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent';
import { UpdateRoleComponent } from './components/UpdateRoleComponent/UpdateRoleComponent';
import { AssociateInfoComponent } from './components/AssociateInfoComponent/AssociateInfoComponent';
import { AllAssociatesComponent } from './components/AllAssociateComponent/AllAssociateComponent'
import { NavBarComponent } from './components/NavbarComponent/NavbarComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { User } from '@auth0/auth0-react/dist/auth-state';
import { NewUserComponent } from './components/Auth0SignUpComponent/Auth0SignupComponent';
import { CurrentBatchesComponent } from './components/CurrentBatchesComponent/CurrentBatches';
<<<<<<< HEAD
import { LogoutComponent } from './components/LogoutComponent/LogoutComponent';
=======
import { GetRoleComponent } from './components/GetRoleComponent/GetRoleComponent';
>>>>>>> 793adc3c9a5a99d00176169baa501b6e9a52fd8b


function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)
  
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <NavBarComponent user={currentUser}/>
          <Route path='/updatePassword' component={UpdatePasswordComponent}/>
          <Route path='/updateRole' component={UpdateRoleComponent}/>
          <Route path='/associateInfo' component={AssociateInfoComponent}/>
          <Route path='/login' render={(props) => (<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
          <Route path='/register' component={NewUserComponent}/>
          <Route path='/allAssociate' component={AllAssociatesComponent}/>
          <Route path='/currentBatches' component={CurrentBatchesComponent}/>
<<<<<<< HEAD
          <Route path='/logout' render={(props) => (<LogoutComponent changeCurrentUser={changeCurrentUser} user={currentUser} {...props}/>)}/>
=======
          <Route path='/getRole' component={GetRoleComponent}/>
>>>>>>> 793adc3c9a5a99d00176169baa501b6e9a52fd8b
        </Router>
      </Provider>
    </div>
  );
}

export default App;
