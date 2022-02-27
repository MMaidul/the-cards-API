const loadCards = () => {

    const searchInput = document.getElementById('search-field');
    const searchText = searchInput.value;
    searchInput.value = '';

    const error = document.getElementById('error-message');
    error.innerText = '';

    if (isNaN(searchText) || searchInput === '') {
        error.innerText = 'Please enter a valid number';
    } else if (searchText <= 0) {
        error.innerText = 'Please,make sure input geater than zero';
    } else {
        const url = `https://deckofcardsapi.com/api/deck/new/draw/?count= ${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.cards))
    }

}

const displaySearchResult = (cards) => {
    const parent = document.getElementById('search-result');
    cards.forEach(card => {
        console.log(card);
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.classList.add('mb-4');
        div.innerHTML = `
        <div class="card">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">${card.code}</p>
            <a href="#" class="btn btn-primary">Show more details</a>
        </div>
       </div>
        `;
        parent.appendChild(div);
    });
}