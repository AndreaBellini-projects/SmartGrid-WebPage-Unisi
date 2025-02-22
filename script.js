function loadPage(page) {
    fetch(page + '.html') // Fetch the new page content
        .then(response => response.text())
        .then(data => {
            // Replace the content inside the #content div
            document.getElementById("content").innerHTML = data;

            // Optionally, load a specific CSS file for the page
            let existingCSS = document.getElementById("dynamic-css");
            if (existingCSS) {
                existingCSS.remove(); // Remove existing CSS if any
            }

            let cssLink = document.createElement("link");
            cssLink.rel = "stylesheet";
            cssLink.href = page + ".css"; // Link to page-specific CSS file
            cssLink.id = "dynamic-css";
            document.head.appendChild(cssLink);

            // Update URL without refreshing the page (optional)
            history.pushState(null, "", "index.html"); // Stay on the same page
        })
        .catch(error => console.error('Error loading the page:', error));
}
