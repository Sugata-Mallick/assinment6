const searchBook = () => {
  const inputSearch = document.getElementById("input");
  const searchInput = inputSearch.value;
  inputSearch.value = "";
  const url = `http://openlibrary.org/search.json?q=${searchInput};`;
  //console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBooks(data.docs));

  const displayBooks = (docs) => {
    console.log(docs.length);

    const nodata = document.getElementById("nodata");
    //  nodata.classList.remove('d-none')
    if (docs.length === 0) {
      nodata.classList.remove("d-none");
    } 
    else {
    }
    const 

    const error = document.getElementById("error");
    if (docs.length > 0) {
      error.innerHTML = `<h2 >books found :${docs.length}</h2>`;
    } else {
    }

    const searchBookDiv = document.getElementById("search-books");
    //console.log(searchBookDiv)
    docs.forEach((books) => {
      console.log(books);
     /* let image;
      if (book.cover_i) {
        image = "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg";
      } else {
        image = "https://cdn.browshot.com/static/images/not-found.png";
      } */

      const addDiv = document.createElement("div");
      addDiv.classList.add("col");
      addDiv.innerHTML = `
    <div class="card h-100 text-center" style="background-color:grey">
      <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top w-75 h-50 mx-auto mt-2" alt="...">
      
      <div class="card-body">
        <h5 class="card-title">${books.title}</h5>
        <h5> Author: ${books.author_name}</h5>
        <h5> Published date: ${books.first_publish_year}</h5>
      
      </div>
    </div>
`;
      searchBookDiv.appendChild(addDiv);
    });
  };
};
