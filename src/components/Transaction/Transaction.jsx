import '../../styles/transaction.css'
import TransactionData from '../../data/transactionData'

function Transaction() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {TransactionData.map((transaction, index) => (
        <section className="account" key={`${transaction.title}-${index}`}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{`${transaction.title}`}</h3>
            <p className="account-amount">{`${transaction.amount}`}</p>
            <p className="account-amount-description">{`${transaction.description}`}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </>
  )
}

export default Transaction

