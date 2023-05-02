import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { user } from '../../store/store'
import { updateProfile } from '../../Service/authService'
import '../../styles/greetings.css'

export function Greetings(){
  const userName = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const [edit, setEdit] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const dispatch = useDispatch()

  // show edit Form
  const handleEdit = (e) => {
    setEdit(true)
  }

  const handleUndo = (e) => {
    e.preventDefault()
    setEdit(false)
  }
  

  // change name on the Global state + DB
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await updateProfile(firstName, lastName, token)
      console.log(result, result.message)
      console.log(firstName, lastName)
      if (result.status === 200) {
        dispatch(user(result.body.firstName, result.body.lastName, true))
        setEdit(false)
      } else {
        // dispatch(user(firstName, lastName, true))
        setEdit(false)
        alert('Username update failed')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return(
    <div className="header">
            <h2>Welcome back</h2>
            {edit ? (
              <form className="editName">
                <div className="nameInput">
                  <input type="text" id="firstName" placeholder={userName[0].firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input type="text" id="lastName" placeholder={userName[0].lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="formButton">
                  <button onClick={handleSubmit}>Save</button>
                  <button onClick={handleUndo}>Cancel</button>
                </div>
              </form>
            ) : (
              <h2>{`${userName[0].firstName} ${userName[0].lastName}!`}</h2>
            )}
            {edit ? null : (
              <button className="edit-button" onClick={handleEdit}>
                Edit Name
              </button>
            )}
          </div>
  )
}