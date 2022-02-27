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
            .then(data => console.log(data.cards))
    }

}