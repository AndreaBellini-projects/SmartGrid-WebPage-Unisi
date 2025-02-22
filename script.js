function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            // Aggiorna solo il contenuto, senza cambiare l'URL
            document.getElementById("content").innerHTML = data;

            // Modifica la cronologia per mantenere l'URL fisso
            history.pushState(null, "", "index.html");  // L'URL rimane index.html

            // Carica dinamicamente anche il CSS specifico
            let existingCSS = document.getElementById("dynamic-css");
            if (existingCSS) {
                existingCSS.remove();
            }

            let cssLink = document.createElement("link");
            cssLink.rel = "stylesheet";
            cssLink.href = page + ".css"; 
            cssLink.id = "dynamic-css";
            document.head.appendChild(cssLink);
        })
        .catch(error => console.error('Error loading the page:', error));
}
