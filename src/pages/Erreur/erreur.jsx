import { Link } from 'react-router-dom'
import React from 'react'
import '../../styles/error.css'

function Error() {

  return (
    <React.Fragment>
      <section className="error-container">
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <Link className='test' to="/">Retourner sur la page d'accueil</Link>
      </section>
    </React.Fragment>
  )
}

export default Error