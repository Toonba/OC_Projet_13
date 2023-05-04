import { useSelector } from 'react-redux'
import { Greetings } from '../../components/Greetings/greetings'
import Transaction from '../../components/Transaction/Transaction'

function Profile() {
  // voir pour executer la fonction quand la page charge 
  // try {
  //   const result = await getJwtToken(email, password)
  //   const token = result.token
  //   const authData = result.data
  //   if (authData.status === 200) {
  //     dispatch(authentification())
  //     dispatch(user(authData.body.firstName, authData.body.lastName, false))
  //     dispatch(storeToken(token))
  //     setStatus('loged')
  //     navigate('/profile')
  //   } else {
  //     setStatus('failed')
  //   }
  // } catch (error) {
  //   console.error(error)
  // }
  
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
