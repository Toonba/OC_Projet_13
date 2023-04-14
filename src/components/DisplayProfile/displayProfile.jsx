import TransactionData from '../../data/transactionData'
import Transcation from '../../components/Transaction/Transaction'
import { useSelector } from 'react-redux'

function DisplayProfile() {
  const isDisplaying = useSelector((state) => state.auth)

  return (
    <main className="main bg-dark">
      {isDisplaying ? (
        <>
          <div className="header">
            <h1>
              Welcome back
              <br />
              Tony Jarvis!
            </h1>
            <button className="edit-button">Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          {TransactionData.map((transaction, index) => (
            <Transcation key={`${transaction.title}-${index}`} title={transaction.title} amount={transaction.amount} description={transaction.description} />
          ))}
        </>
      ) : (
        <p>Vous ne pouvez pas accéder à cette page sans authentification</p>
      )}
    </main>
  )
}

export default DisplayProfile
