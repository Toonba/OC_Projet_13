function getJwtToken(email, password) {
  fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => response.json())
    .then((data) => {
      const jwt = data.body.token
      console.log(jwt)
      // checkAuth(jwt)
    })
    .catch((error) => {
      // Une erreur s'est produite lors de la requête
      console.error(error)
    })
}

function checkAuth(jwt) {
  fetch('http://localhost:3001/api/v1/user/profile', {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des informations de profil')
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
      return data.message
    })
    .catch((error) => {
      console.error(error)
    })
}

export { getJwtToken, checkAuth }


