import TransactionData from '../../data/transactionData'
import Transcation from '../../components/Transaction/Transaction'

function Profile() {
  return (
    <main className="main bg-dark">
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
    </main>
  )
}

export default Profile
