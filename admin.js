import { ADD_MOVIE, GET_ALL_CATEGORIES } from './services/movie.service.JS'

import { TableComponent } from './components/TableComponent.js'
import { FormAddMovieComponent } from './components/FormAddMovieComponent.js'


export function AdminPage() {
  const renderMoviesTable = getMovieTableData

  window.onload = function () {
    const submitBtn = document.getElementById('add-movie-btn')
    const name = document.getElementById('form-input-movie-name')
    const category = document.getElementById('form-input-movie-category')
    const image_url = document.getElementById('form-input-movie-image-url')
    const description = document.getElementById('form-input-movie-description')

    console.log(name.value, category.value, image_url.value, description.value)

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const movie = {
        name: name.value,
        category: category.value,
        description: description.value,
        imageUrl: image_url.value,
      }

      console.log(movie)
      ADD_MOVIE(movie)
    })
  }

  return /*html*/ `
    ${FormAddMovieComponent(ADD_MOVIE)}
    ${renderMoviesTable()}
  `
}

async function getMovieTableData() {
  const data = await GET_ALL_CATEGORIES()
  console.table(data)
}

document.getElementById('root').innerHTML = AdminPage()