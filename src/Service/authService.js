const BASE_URL = 'http://localhost:3001/api/v1'

async function getJwtToken(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    if (data.status === 200) {
      let jwt = data.body.token
      const authData = await checkAuth(jwt)
      return { token: jwt, data: authData }
    } else {
      console.log('mauvais login =============')
      const authData = 'login failed'
      return { token: authData, data: authData }
    }
  } catch (error) {
    console.error(error)
  }
}

function checkAuth(jwt) {
  return fetch(`${BASE_URL}/user/profile`, {
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
      return data
    })
    .catch((error) => {
      console.error(error)
    })
}

async function updateProfile(firstName, lastName, jwt) {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({ firstName, lastName })
    })
    const data = await response.json()
    if (data.status === 200) {
      return data
    } else {
      const message = 'edit failed'
      return message
    }
  } catch (error) {
    console.error(error)
  }
}

export { getJwtToken, checkAuth, updateProfile }
