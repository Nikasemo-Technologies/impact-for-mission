document.addEventListener("DOMContentLoaded", function () {
  // Function to load HTML content into an element
  const loadComponent = (selector, url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch((error) => {
        console.error(`Error loading component from ${url}:`, error);
        document.querySelector(
          selector,
        ).innerHTML = `<p class="text-red-500">Failed to load content.</p>`;
      });
  };

  // Load the header and footer
  loadComponent("#nav-placeholder", "nav.html");
  loadComponent("#footer-placeholder", "footer.html");
});

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
