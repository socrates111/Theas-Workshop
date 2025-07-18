// Exibitions Script

// Artwork data
        const artworks = [
            {
                id: "1",
                title: "Cosmic sunrise",
                year: 2025,
                medium: "Pastel on Paper",
                dimensions: { inches: "39 x 25 x 0 in", cm: "(99.06 x 63.5 x 0.0 cm)" },
                image: "https://ext.same-assets.com/3049450284/1282195492.jpeg",
                available: true,
                description: "A radiant explosion of light and energy captured in pastel, representing the birth of cosmic phenomena and the infinite potential of creation."
            },
            {
                id: "2",
                title: "Aqua",
                year: 2025,
                medium: "Pastel on Paper",
                dimensions: { inches: "39 x 25 x 0 in", cm: "(99.06 x 63.5 x 0.0 cm)" },
                image: "https://ext.same-assets.com/3049450284/3916098540.jpeg",
                available: true,
                description: "Flowing forms in blues and greens evoke the movement of water and the fluid nature of consciousness."
            },
            {
                id: "3",
                title: "Vermilion",
                year: 2023,
                medium: "oil on canvas",
                dimensions: { inches: "72 x 48 in", cm: "(182.88 x 121.92 cm)" },
                image: "https://ext.same-assets.com/3049450284/3146946152.jpeg",
                available: true,
                description: "A large-scale work exploring the power of earth tones and the raw energy of natural landscapes."
            },
            {
                id: "4",
                title: "Untitled",
                year: 2023,
                medium: "oil on canvas",
                dimensions: { inches: "30 x 48 in", cm: "(76.2 x 121.92 cm)" },
                image: "https://ext.same-assets.com/3049450284/1461114377.jpeg",
                available: true,
                description: "An exploration of color and movement, capturing the essence of natural forces in abstract form."
            },
            {
                id: "5",
                title: "Pink dust",
                year: 2023,
                medium: "oil on canvas",
                dimensions: { inches: "48 x 48 in", cm: "(121.92 x 121.92 cm)" },
                image: "https://ext.same-assets.com/3049450284/2772880867.jpeg",
                available: true,
                description: "Ethereal clouds of pink and purple create a dreamlike landscape suspended between earth and sky."
            },
            {
                id: "6",
                title: "Melt",
                year: 2023,
                medium: "oil on canvas",
                dimensions: { inches: "40 x 30 in", cm: "(101.6 x 76.2 cm)" },
                image: "https://ext.same-assets.com/3049450284/3902875321.jpeg",
                available: true,
                description: "The transformation of matter captured in rich oranges and reds, showing the beauty in destruction and renewal."
            },
            {
                id: "7",
                title: "Magnetic field",
                year: 2023,
                medium: "oil on canvas",
                dimensions: { inches: "60 x 72 in", cm: "(152.4 x 182.88 cm)" },
                image: "https://ext.same-assets.com/3049450284/3146858790.jpeg",
                available: true,
                description: "A visualization of invisible forces, making tangible the electromagnetic fields that surround and connect all matter."
            },
            {
                id: "8",
                title: "Expansion",
                year: 2023,
                medium: "oil on canvas",
                dimensions: { inches: "60 x 72 in", cm: "(152.4 x 182.88 cm)" },
                image: "https://ext.same-assets.com/3049450284/3125952305.jpeg",
                available: true,
                description: "Monochromatic exploration of growth and expansion, rendered in powerful blacks and grays."
            },
            {
                id: "9",
                title: "Untitled",
                year: 2022,
                medium: "oil on canvas",
                dimensions: { inches: "40 x 30 in", cm: "(101.6 x 76.2 cm)" },
                image: "https://ext.same-assets.com/3049450284/2219079522.jpeg",
                sold: true,
                description: "A contemplative piece exploring the relationship between light and shadow, permanence and change."
            },
            {
                id: "10",
                title: "UKRAINE",
                year: 2022,
                medium: "graphite on paper",
                dimensions: { inches: "40 x 32 in", cm: "(101.6 x 81.28 cm)" },
                image: "https://ext.same-assets.com/3049450284/2090259146.jpeg",
                available: true,
                description: "A powerful statement piece created in response to global events, rendered in stark graphite with touches of color."
            },
            {
                id: "11",
                title: "Cave",
                year: 2022,
                medium: "oil on canvas",
                dimensions: { inches: "36 x 48 in", cm: "(91.44 x 121.92 cm)" },
                image: "https://ext.same-assets.com/3049450284/240474644.jpeg",
                available: true,
                description: "An exploration of inner spaces and hidden depths, using warm earth tones to create intimate spaces."
            },
            {
                id: "12",
                title: "Black and white",
                year: 2022,
                medium: "graphite on paper",
                dimensions: { inches: "40 x 30 in", cm: "(101.6 x 76.2 cm)" },
                image: "https://ext.same-assets.com/3049450284/4177679101.jpeg",
                available: true,
                description: "A return to fundamentals, exploring the full range of values possible with graphite alone."
            },
            {
                id: "13",
                title: "Energy in the Forest",
                year: 2021,
                medium: "oil on canvas",
                dimensions: { inches: "60 x 48 in", cm: "(152.4 x 121.92 cm)" },
                image: "https://ext.same-assets.com/3049450284/134788871.jpeg",
                available: true,
                description: "The life force of ancient forests made visible through cascading patterns of green and blue energy."
            },
            {
                id: "14",
                title: "STORM",
                year: 2011,
                medium: "oil on canvas",
                dimensions: { inches: "60 x 40 in", cm: "(152.4 x 101.6 cm)" },
                image: "https://ext.same-assets.com/3049450284/2250653147.jpeg",
                available: true,
                description: "An early work capturing the raw power and beauty of natural storms, both meteorological and emotional."
            },
            {
                id: "15",
                title: "Untitled",
                year: 2022,
                medium: "oil on canvas",
                dimensions: { inches: "40 x 30 in", cm: "(101.6 x 76.2 cm)" },
                image: "https://ext.same-assets.com/3049450284/3310035558.jpeg",
                available: true,
                description: "Vibrant swirls of color suggest movement and transformation, like watching paint flow in real time."
            },
            {
                id: "16",
                title: "Energy in wires",
                year: 2022,
                medium: "Pastel on Paper",
                dimensions: { inches: "49 x 38 in", cm: "(124.46 x 96.52 cm)" },
                image: "https://ext.same-assets.com/3049450284/3458205678.jpeg",
                available: true,
                description: "A meditation on the energy that flows through our modern world, rendered in warm earth tones."
            }
        ];

        // State management
        let currentFilter = 'all';
        let searchTerm = '';
        let currentLightboxIndex = 0;
        let filteredArtworks = [];

        // DOM elements
        const artworkGrid = document.getElementById('artworkGrid');
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const navLinks = document.querySelectorAll('.nav-link');
        const pageSection = document.querySelectorAll('.page-section');

        // Navigation between Portfolio and About
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const targetPage = link.dataset.page;

                // Update active nav link
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');

                // Show target page
                pageSection.forEach(section => section.classList.remove('active'));
                document.getElementById(targetPage).classList.add('active');
            });
        });

        // Filter and render functions
        function filterArtworks() {
            return artworks.filter(artwork => {
                const matchesFilter =
                    currentFilter === 'all' ||
                    (currentFilter === 'available' && artwork.available) ||
                    (currentFilter === 'sold' && artwork.sold);

                const matchesSearch =
                    searchTerm === '' ||
                    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    artwork.medium.toLowerCase().includes(searchTerm.toLowerCase());

                return matchesFilter && matchesSearch;
            });
        }

        function createArtworkHTML(artwork) {
            return `
                <div class="artwork-item" data-id="${artwork.id}" onclick="openLightbox(${artwork.id})">
                    <div class="artwork-image-container">
                        <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image">
                        ${artwork.sold ? '<div class="sold-badge">Sold</div>' : ''}
                    </div>
                    <div class="artwork-info">
                        <div class="artwork-title-year">
                            <h3 class="artwork-title">${artwork.title}</h3>
                            <span class="artwork-year">, ${artwork.year}</span>
                        </div>
                        <p class="artwork-medium">${artwork.medium}</p>
                        <p class="artwork-dimensions">${artwork.dimensions.inches}</p>
                        <p class="artwork-dimensions-cm">${artwork.dimensions.cm}</p>
                    </div>
                </div>
            `;
        }

        function renderArtworks() {
            const grid = document.getElementById('artworkGrid');
            const newFilteredArtworks = filterArtworks();

            // Add filtering animation
            grid.classList.add('filtering');

            setTimeout(() => {
                filteredArtworks = newFilteredArtworks;
                grid.innerHTML = filteredArtworks.map(createArtworkHTML).join('');
                grid.classList.remove('filtering');

                // Animate in new items
                const items = grid.querySelectorAll('.artwork-item');
                items.forEach((item, index) => {
                    item.style.animationDelay = `${index * 0.1}s`;
                    item.style.animation = 'fadeInUp 0.6s ease-out forwards';
                });
            }, 300);
        }

        // Event listeners for filters
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Update current filter
                currentFilter = button.dataset.filter;

                // Re-render artworks
                renderArtworks();
            });
        });

        // Search functionality
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderArtworks();
        });

        // Contact form functions
        function openContactForm() {
            document.getElementById('contactModal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeContactForm() {
            document.getElementById('contactModal').classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        function submitContactForm(event) {
            event.preventDefault();

            const submitBtn = event.target.querySelector('.submit-btn');
            const submitText = document.getElementById('submitText');
            const submitLoading = document.getElementById('submitLoading');

            // Show loading state
            submitText.style.display = 'none';
            submitLoading.style.display = 'inline-block';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                submitText.style.display = 'inline';
                submitLoading.style.display = 'none';
                submitBtn.disabled = false;

                alert('Thank you for your message! Tea will get back to you soon.');
                closeContactForm();
                event.target.reset();
            }, 2000);
        }

        // Lightbox functions
        function openLightbox(artworkId) {
            const artwork = artworks.find(art => art.id === artworkId);
            if (!artwork) return;

            currentLightboxIndex = filteredArtworks.findIndex(art => art.id === artworkId);

            const lightboxImage = document.getElementById('lightboxImage');
            const lightboxTitle = document.getElementById('lightboxTitle');
            const lightboxDetails = document.getElementById('lightboxDetails');

            lightboxImage.src = artwork.image;
            lightboxImage.alt = artwork.title;
            lightboxTitle.textContent = `${artwork.title}, ${artwork.year}`;
            lightboxDetails.innerHTML = `
                <p>${artwork.medium}</p>
                <p>${artwork.dimensions.inches}</p>
                <p>${artwork.dimensions.cm}</p>
                <p style="margin-top: 1rem; font-style: italic;">${artwork.description}</p>
                ${artwork.sold ? '<p style="color: #ef4444; font-weight: bold; margin-top: 0.5rem;">SOLD</p>' : ''}
            `;

            document.getElementById('lightboxModal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightboxModal').classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        function previousArtwork() {
            if (currentLightboxIndex > 0) {
                currentLightboxIndex--;
                const artwork = filteredArtworks[currentLightboxIndex];
                openLightbox(artwork.id);
            }
        }

        function nextArtwork() {
            if (currentLightboxIndex < filteredArtworks.length - 1) {
                currentLightboxIndex++;
                const artwork = filteredArtworks[currentLightboxIndex];
                openLightbox(artwork.id);
            }
        }

        // Close modals on click outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                if (e.target.id === 'contactModal') {
                    closeContactForm();
                } else if (e.target.id === 'lightboxModal') {
                    closeLightbox();
                }
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('lightboxModal').classList.contains('show')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    previousArtwork();
                } else if (e.key === 'ArrowRight') {
                    nextArtwork();
                }
            }

            if (document.getElementById('contactModal').classList.contains('show')) {
                if (e.key === 'Escape') {
                    closeContactForm();
                }
            }
        });

        // Initial render
        renderArtworks();