async function getJwtToken(email, password) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    const jwt = data.body.token
    const message = await checkAuth(jwt)
    return message
  } catch (error) {
    console.error(error)
  }
}

function checkAuth(jwt) {
  return fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      return data.message
    })
    .catch((error) => {
      console.error(error)
    })
}

export { getJwtToken, checkAuth }
