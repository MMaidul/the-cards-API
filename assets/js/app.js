const loadCards = () => {

    const searchInput = document.getElementById('search-field');
    const searchText = searchInput.value;
    searchInput.value = '';

    const error = document.getElementById('error-message');
    error.innerText = '';

    parent.innerText = '';

    if (searchText > 52) {
        error.innerText = 'Please enter less thean 53';
    }
    else if (isNaN(searchText) || searchInput === '') {
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

const parent = document.getElementById('search-result');

const displaySearchResult = (cards) => {
    cards.forEach(card => {
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.classList.add('mb-4');
        div.innerHTML = `
        <div class="card">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">${card.code}</p>
            <a onclick="cardDetails('${card.code}')" href="#" class="btn btn-primary">Show more details</a>
        </div>
       </div>
        `;
        parent.appendChild(div);
    });
}


const cardDetails = (details) => {

    parent.innerText = '';

    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count= 52`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const singleCards = allCards.find(card => card.code === details);

            const div = document.createElement('div');
            div.classList.add('col-md-4');
            div.classList.add('mb-4');
            div.innerHTML = `
            <div class="card">
            <img src="${singleCards.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${singleCards.suit}</h5>
                <p class="card-text">${singleCards.code}</p>
            </div>
           </div>
            `;
            parent.appendChild(div);
        })
}