const carsGalleryData = [
    {
        id: '1',
        name: 'Aventador SVJ',
        brand: 'Lamborghini',
        price: 517770,
        description: 'The most powerful and fastest Lamborghini ever built, with aggressive aerodynamics and track-focused performance.',
        rating: 4.9,
        image:
        "images/aventadorsvj.jpg"
        
    },
    {
        id: '2',
        name: 'F8 Tributo',
        brand: 'Ferrari',
        price: 280000,
        description: "Ferrari's mid-engined masterpiece combining racing heritage with everyday usability.",
        rating: 4.8,
        image:
        "images/ferrarif8.jpg"
    },
    {
        id: '3',
        name: 'AMG GT Black Series',
        brand: 'Mercedes-AMG',
        price: 335000,
        description: 'The most extreme AMG GT ever created, with track-inspired aerodynamics and uncompromising performance.',
        rating: 4.7,
        image:
        "images/mercedes.jpg"
    },
    {
        id: '4',
        name: 'Continental GT Speed',
        brand: 'Bentley',
        price: 274900,
        description: 'The ultimate grand tourer combining British luxury with exceptional performance and craftsmanship.',
        rating: 4.6,
        image:
        'images/bentley.jpg'
    },
    {
        id: '5',
        name: 'R8 V10 Plus',
        brand: 'Audi',
        price: 208100,
        description: "Audi's flagship supercar with naturally aspirated V10 power and Quattro all-wheel drive.",
        rating: 4.5,
        image:
        'images/audi.jpg'
    },
    {
        id: '6',
        name: 'Huracan EVO',
        brand: 'Lamborghini',
        price: 261274,
        description: 'The evolved Huracan with improved aerodynamics, performance and connectivity features.',
        rating: 4.7,
        image:
        'images/huracan.jpg'
    },
    {
        id: '7',
        name: 'Vantage',
        brand: 'Aston Martin',
        price: 139000,
        description: "British sports car elegance meets modern performance in Aston Martin's entry-level model.",
        rating: 4.4,
        image:
        'images/astonmartin.jpg'
    },
    {
        id: '8',
        name: '720S',
        brand: 'McLaren',
        price: 299000,
        description: "McLaren's supercar masterpiece with revolutionary aerodynamics and carbon fiber construction.",
        rating: 4.9,
        image:
        'images/mclaren.jpg'
    },
    {
        id: '9',
        name: 'Tourbillion',
        brand: 'Bugatti',
        price:  4000000,
        description: "The Bugatti Tourbillon is the French brand's newest hybrid hypercar, combining a naturally aspirated V16 engine with cutting-edge electric technology.",
        rating: 5.0,
        image:
        'images/bugatti.jpg'
    },
    {
        id: '10',
        name: 'Roma',
        brand: 'Ferrari',
        price: 222620,
        description: 'Elegant grand tourer with a design inspired by the Italian dolce vita.',
        rating: 4.6,
        image:
        'images/ferrari.jpg'
    },
    {
        id: '11',
        name: '911 Turbo S',
        brand: 'Porsche',
        price: 207000,
        description: 'The icon of German sports cars with exceptional performance and comfort.',
        rating: 4.8,
        image:
        'images/porsche.jpg'
    },
    {
        id: '12',
        name: 'Venom F5',
        brand: 'Hennessey',
        price: 2100000,
        description: 'American supercar designed to break speed records.',
        rating: 4.9,
        image:
        'images/venom.jpg'
    }
];


let filteredCars = [...carsGalleryData];
let favorites = JSON.parse(localStorage.getItem('carFavorites') || '[]');
let currentPage = 1;
const carsPerPage = 6;


const searchInput = document.getElementById('search-gallery');
const brandFilter = document.getElementById('brand-gallery');
const sortSelect = document.getElementById('sort-select');
const clearBtn = document.getElementById('clear-filters');
const galleryGrid = document.getElementById('gallery-grid');
const pagination = document.getElementById('pagination');


document.addEventListener('DOMContentLoaded', function() {
    populateBrandFilter();
    renderGallery();
    setupEventListeners();
});


function populateBrandFilter() {
    const brands = [...new Set(carsGalleryData.map(car => car.brand))].sort();
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}


function createCarCard(car, isFeatured = false) {
    const isFavorite = favorites.includes(car.id);
    return `
        <div class="car-card">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" ${isFeatured ? '' : 'loading="lazy"'} decoding="async" width="300" height="170">
            </div>
            <div class="car-content">
                <div class="car-header">
                    <span class="car-brand">${car.brand}</span>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-car-id="${car.id}">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
                <h4 class="car-name">${car.name}</h4>
                <p class="car-description">${car.description}</p>
                <div class="car-footer">
                    <span class="car-price">$${car.price.toLocaleString()}</span>
                    <div class="car-rating">
                        <span>⭐</span>
                        <span>${car.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function renderGallery() {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const carsToShow = filteredCars.slice(startIndex, endIndex);

    if (carsToShow.length === 0) {
        galleryGrid.innerHTML = `<div class="no-results">Nenhum carro encontrado</div>`;
    } else {
        galleryGrid.innerHTML = carsToShow.map(car => createCarCard(car)).join('');
    }

    renderPagination();
    attachEventListeners();
}


function renderPagination() {
    const totalPages = Math.ceil(filteredCars.length / carsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" data-page="${currentPage - 1}">‹ Anterior</button>`;
    }
    
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="page-btn active" data-page="${i}">${i}</button>`;
        } else if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
            paginationHTML += `<button class="page-btn" data-page="${i}">${i}</button>`;
        } else if (Math.abs(i - currentPage) === 2) {
            paginationHTML += `<span class="page-dots">...</span>`;
        }
    }
    
    
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" data-page="${currentPage + 1}">Próximo ›</button>`;
    }
    
    pagination.innerHTML = paginationHTML;
}


function attachEventListeners() {
    
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const carId = e.target.dataset.carId;
            toggleFavorite(carId);
        });
    });

    
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = parseInt(e.target.dataset.page);
            if (page && page !== currentPage) {
                currentPage = page;
                renderGallery();
            }
        });
    });
}


function toggleFavorite(carId) {
    const index = favorites.indexOf(carId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(carId);
    }
    
    localStorage.setItem('carFavorites', JSON.stringify(favorites));
    renderGallery();
}


function filterAndSortCars() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
    const sortBy = sortSelect.value;

    
    filteredCars = carsGalleryData.filter(car => {
        const matchesSearch = !searchTerm || 
            car.name.toLowerCase().includes(searchTerm) ||
            car.brand.toLowerCase().includes(searchTerm);
        
        const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
        
        return matchesSearch && matchesBrand;
    });

    
    switch (sortBy) {
        case 'name':
            filteredCars.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-asc':
            filteredCars.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredCars.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredCars.sort((a, b) => b.rating - a.rating);
            break;
        case 'brand':
            filteredCars.sort((a, b) => a.brand.localeCompare(b.brand));
            break;
    }

    currentPage = 1;
    renderGallery();
}


function clearFilters() {
    searchInput.value = '';
    brandFilter.value = 'all';
    sortSelect.value = 'name';
    filterAndSortCars();
}


function setupEventListeners() {
    searchInput.addEventListener('input', filterAndSortCars);
    brandFilter.addEventListener('change', filterAndSortCars);
    sortSelect.addEventListener('change', filterAndSortCars);
    clearBtn.addEventListener('click', clearFilters);
}
