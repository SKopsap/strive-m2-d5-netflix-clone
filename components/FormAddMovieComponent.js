export function FormAddMovieComponent() {
  return /*html*/`
    <form style="max-width: 500px" class="container-fluid mt-5 mb-4">
      <div class="row">
      <div class="input-group mb-3">
        <span class="input-group-text bg-dark text-white">Movie</span>
        <input id="form-input-movie-name" type="text" class="form-control form-control-md bg-dark text-white" placeholder="name..." aria-label="name">
      </div>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text bg-dark text-white">category</span>
        <input id="form-input-movie-category" type="text" class="form-control form-control-sm bg-dark text-white" placeholder="category..." aria-label="category">
      </div>
      <div class="row">
      <div class="input-group mb-3">
        <span class="input-group-text bg-dark text-white" id="basic-addon3">Image</span>
        <input placeholder="url..." id="form-input-movie-image-url" type="text" class="form-control form-control-sm bg-dark text-white" id="basic-url" aria-describedby="basic-addon3">    
      </div>

      <div class="input-group">
        <span class="input-group-text bg-dark text-white">Description</span>
        <textarea placeholder="description..." id="form-input-movie-description" class="form-control form-control-sm bg-dark text-white" maria-label="With textarea"></textarea>
      </div>
      </div>
      <div class="mt-4">
        <button id="add-movie-btn" type="submit" class="btn btn-md btn-outline-light">Add Movie</button>
      </div>
  </form> 
  `
}