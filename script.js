// 1. The Artwork Collection
const paintings = [
  {
    title: "title",
    year: "2006",
    medium: "Acrlyic & Gold leaf on Canvas",
    dimensions: "80 × 80 cm",
    image: "2006/Acrlyic- Gold-leaf-on-Canvas-80x80cm-02.jpg",
  },
  {
    title: "title",
    year: "2006",
    medium: "Acrlyic & Gold leaf on Canvas",
    dimensions: "80 × 80 cm",
    image: "2006/Acrlyic- Gold-leaf-on-Canvas-80x80cm-03.jpg",
  },
];

const galleryContainer = document.getElementById("gallery");

// 2. The View Manager Function

function showRecentWorks() {
  galleryContainer.innerHTML = "Recent Works Content";
}

function showPaintings() {
  // Clear out the wall space
  galleryContainer.innerHTML = "";

  // Loop through and display each piece
  paintings.forEach((art) => {
    const artItem = document.createElement("div");
    artItem.className = "artwork-item";
    artItem.innerHTML = `
            <div class="image-box">
                <img src="${art.image}" alt="${art.title}">
            </div>
            <div class="artwork-meta">
                <span class="artwork-title">${art.title}</span>, <span>${art.year}</span>
                <div class="artwork-details">${art.medium} — ${art.dimensions}</div>
            </div>
        `;
    galleryContainer.appendChild(artItem);
  });
}

function showPublications() {
  galleryContainer.innerHTML = "<h2>Publications Content</h2>";
}

function showAboutText() {
  // This is your existing bio text function
  galleryContainer.innerHTML = "<h2>Biography Content</h2>";
}

function showContact() {
  galleryContainer.innerHTML = "<h2>Contact Content</h2>";
}

// 3. The About Text Function
function showAboutText() {
  // Clear out the wall space
  galleryContainer.innerHTML = "";

  // Create a clean block for her biography text
  const aboutBox = document.createElement("div");
  aboutBox.style.maxWidth = "600px";
  aboutBox.style.lineHeight = "1.7";

  aboutBox.innerHTML = `
        <p style="margin-bottom: 20px;">
           Artist CV
        </p>
        <p>
            Syrian Artist Based in Lebanon.
        </p>
    `;

  galleryContainer.appendChild(aboutBox);
}

// Show all paintings automatically when the page first loads
showPaintings();

// Function to highlight the active menu item
function setActiveLink(clickedLink) {
  // Remove the 'active' class from all navigation links
  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active");
  });

  // Add the 'active' class to the link that was just clicked
  clickedLink.classList.add("active");
}
