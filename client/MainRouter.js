import React ,{Component} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signin from './auth/Signin'
import Signup from './user/Signup'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import EditProfile from './user/EditProfile'
import Menu from './core/Menu'

/*
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'

import Menu from './core/Menu'

       <Route exact path="/" /> 
*/
const MainRouter = () => {
    return (
    <div>
      <Menu/>
      <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="/signup" element={<Signup/>}/> 
          <Route exact path="/signin" element={<Signin/>}/> 
          <Route path="/users" element={<Users/>}/>
          <Route path="/user/edit/:userId" element={<EditProfile/>}/>
          <Route path="/user/:userId" element={<Profile/>}/>
      </Routes>
    </div>)
}

export default MainRouter