
const displayResult = document.getElementById('Result-panel');

// Saerching Mechanism
const searchResult = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    if (url === 'https://openlibrary.org/search.json?q=' || searchField.value < 0) {
        displayResult.textContent = ""
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <h4 style="color: red;" class="text-center mb-3 mt-4">Please input a valid name</h4>
        `
        displayResult.appendChild(div)
    }
    else {
        fetch(url)
            .then(res => res.json())
            .then(data => disPlaySearchResult(data.docs))
    }
}

const disPlaySearchResult = books => {

    displayResult.textContent = ""
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h3 class="card-title">Author-<span style="color: red;" >${book.author_name[0]}</span></h3>
                    <h3 class="card-title">Book name-<span style="color: red;" >${book.title}</span></h3>
                    <h5 class="card-title">First publish-${book.publish_date[0]}</h5>
    
                </div>
            </div>
    `
        displayResult.appendChild(div)
    });
}



