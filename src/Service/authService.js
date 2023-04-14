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
      // Le serveur a répondu avec des données JSON
      const jwt = data.body.token
      return jwt
    })
    .catch((error) => {
      // Une erreur s'est produite lors de la requête
      console.error(error)
    })
}

export default getJwtToken


function checkAuth(jwt){
  fetch('http://localhost:3001/api/v1/user/profile', {
  headers: {
    'Authorization': `Bearer ${jwt}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des informations de profil');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});
}