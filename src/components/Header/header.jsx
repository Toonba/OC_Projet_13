import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import '../../styles/header.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Header() {
  const isDisplaying = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: 'checkAuth' })
  }

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isDisplaying ? (
          <div>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleClick}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
