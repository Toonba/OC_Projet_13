import { useState } from 'react'
import { getJwtToken } from '../../Service/authService'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isDisplaying = useSelector((state) => state.auth)

  let attemptLogin = false

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    attemptLogin = true
    try {
      const auth = await getJwtToken(email, password)
      if (auth === 'Successfully got user profile data') {
        dispatch({ type: 'checkAuth' })
        navigate('/profile')
      } else {
      }
    } catch (error) {
      console.error(error)
    }
  }

  // il faut trouver un moyen pour que le message ne s'affiche pas de base et s'affiche qu'une fois qu'on a essayer de se log une fois sans succès

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {isDisplaying ? null : <p className={attemptLogin ? 'wrongLogin' : ' wrongLogin firstAttempt'}>Wrong login or password</p>}
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
