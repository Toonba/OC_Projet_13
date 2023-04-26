import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import '../../styles/header.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { authentification, user, storeToken } from '../../store/store'

function Header() {
  const auth = useSelector((state) => state.auth)
  const userName = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(authentification())
    dispatch(user('','',false))
    dispatch(storeToken())
  }

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {auth ? (
          <div className="main-nav-item">
            <Link to="/profile">
              <i className="fa fa-user-circle"></i>
              {`${userName[0].firstName}`}
            </Link>
            <Link to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="main-nav-item">
            <Link to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header
