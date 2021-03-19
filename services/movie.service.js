export async function GET_ALL_CATEGORIES() {
  const resp = await fetch('https://striveschool-api.herokuapp.com/api/movies/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTUwYjg5YzI2ZjAwMTU3ZjljMjUiLCJpYXQiOjE2MTU5Nzk3ODgsImV4cCI6MTYxNzE4OTM4OH0.WcP_JTyt41dgu6od_ZVyVXJajUjqEzvVn1c4VmExnsI'
    }
  })

  console.log('success - GET_ALL_MOVIES: ', resp)

  return await resp.json()
}

export async function GET_MOVIE(movie_id) {
  const resp = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movie_id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTUwYjg5YzI2ZjAwMTU3ZjljMjUiLCJpYXQiOjE2MTU5Nzk3ODgsImV4cCI6MTYxNzE4OTM4OH0.WcP_JTyt41dgu6od_ZVyVXJajUjqEzvVn1c4VmExnsI'
    }
  })

  return await resp.json()
}


export async function ADD_MOVIE(movie) {
  try {
    const resp = await fetch('https://striveschool-api.herokuapp.com/api/movies/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTUwYjg5YzI2ZjAwMTU3ZjljMjUiLCJpYXQiOjE2MTU5Nzk3ODgsImV4cCI6MTYxNzE4OTM4OH0.WcP_JTyt41dgu6od_ZVyVXJajUjqEzvVn1c4VmExnsI'
      },
      method: 'POST',
      body: JSON.stringify(movie)
    })

    const data = resp.json()
    return data


  } catch (err) {
    console.error(err)
  }

}