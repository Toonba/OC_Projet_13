import { useState } from 'react'
import { getJwtToken } from '../../Service/authService'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authentification, user, storeToken } from '../../store/store'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('void')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await getJwtToken(email, password)
      //comprend pas pourquoi token est undefined
      const token = result.token
      const authData = result.data
      if (authData.status === 200) {
        dispatch(authentification())
        dispatch(user(authData.body.firstName, authData.body.lastName, false))
        dispatch(storeToken(token))
        setStatus('loged')
        navigate('/profile')
      } else {
        setStatus('failed')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {status === 'failed' ? <p className="wrongLogin">Wrong login or password</p> : null}
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
