import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Error from './pages/Erreur/erreur'
import SignIn from './pages/SignIn/signIn'
import Home from './pages/Home/home'
import Profile from './pages/Profile/profile'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </Provider>
)
