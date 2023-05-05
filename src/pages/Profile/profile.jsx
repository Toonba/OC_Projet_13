import { useSelector } from 'react-redux'
import { Greetings } from '../../components/Greetings/greetings'
import Transaction from '../../components/Transaction/Transaction'

function Profile() {
  const auth = useSelector((state) => state.auth)
  
  return (
    <main className="main bg-dark">
    {auth ? (
      <>
        <Greetings />
        <Transaction />
      </>
    ) : (
      <h2 className="notLogged">You need to signIn to access your profile</h2>
    )}
  </main>)
}

export default Profile
