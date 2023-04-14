import { useState } from 'react'
import {getJwtToken, checkAuth} from '../../Service/authService'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  // const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault()
    const auth = await getJwtToken(email, password)
    console.log(auth)
    // history.push('/profile');
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me </label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  )
}

export default SignInForm
