export function TableComponent(targetElement, data) {
  const tableContainer = /*html*/`
    <div class="container">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">_id</th>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">brand</th>
            <th scope="col">imageUrl</th>
            <th scope="col">userId</th>
            <th scope="col">createdAt</th>
            <th scope="col">updatedAt</th>
          </tr>
        </thead>
        <tbody id="tablebody">
        </tbody>
      </table>
    </div>
   </div>
   `
  const element = document.querySelector(targetElement)


  const renderTableRows = data
    .map(
      (movie, i = i + 1) => /*html*/ `

      <tr>
        <th scope="row">${i}</th>
        <td>${movie._id}</td>
        <td>${movie.name}</td>
        <td>${movie.description}</td>
        <td>${movie.brand}</td>
        <td>${movie.imageUrl}</td>
        <td>${movie.userId}</td>
        <td>${movie.createdAt}</td>
        <td>${movie.updatedAt}</td>
        <td><button id="delete-${i}" data-id="${product._id}" class="btn btn-outline-danger btn-sm">Del</button>
      </tr > `

    ).join('')

  const tableBody = document.getElementById('tablebody')

}