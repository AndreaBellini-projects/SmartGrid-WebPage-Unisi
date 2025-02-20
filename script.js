function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            // Solo il contenuto viene aggiornato, senza sovrascrivere il menu
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error('Error loading the page:', error));
}
