// 1. The Artwork Collection (Our Data Array)
const paintings = [
    {
        title: "Study in Ochre",
        year: "2026",
        medium: "Oil on linen",
        dimensions: "80 × 80 cm",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
    },
    {
        title: "Untitled Composition II",
        year: "2025",
        medium: "Acrylic on canvas",
        dimensions: "120 × 90 cm",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800"
    }
];

// 2. Select the empty HTML anchor element
const galleryContainer = document.getElementById('gallery');

// 3. The Render Engine: A function that converts objects into HTML elements
function renderGallery() {
    // Clear out anything currently inside the gallery container
    galleryContainer.innerHTML = "";

    // Loop through our array, painting by painting
    paintings.forEach(art => {
        // Create a new structural wrapper div
        const artItem = document.createElement('div');
        artItem.className = 'artwork-item';

        // Inject the structured layout strings using the object's properties
        artItem.innerHTML = `
            <div class="image-box">
                <img src="${art.image}" alt="${art.title}">
            </div>
            <div class="artwork-meta">
                <span class="artwork-title">${art.title}</span>, <span>${art.year}</span>
                <div class="artwork-details">${art.medium} — ${art.dimensions}</div>
            </div>
        `;

        // Drop this freshly built card straight into our main HTML grid
        galleryContainer.appendChild(artItem);
    });
}

// 4. Run the function automatically when the website loads
renderGallery();