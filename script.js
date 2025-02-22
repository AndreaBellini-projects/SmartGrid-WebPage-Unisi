function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            // Replace content without touching the menu
            document.getElementById("content").innerHTML = data;

            // Remove any previously loaded research CSS
            let oldLink = document.getElementById("dynamic-css");
            if (oldLink) {
                oldLink.remove();
            }

            // Add the new CSS if it's for research
            if (page === "research") {
                let link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "research.css";
                link.id = "dynamic-css"; // Add an ID for easy removal later
                document.head.appendChild(link);
            }
        })
        .catch(error => console.error('Error loading the page:', error));
}
