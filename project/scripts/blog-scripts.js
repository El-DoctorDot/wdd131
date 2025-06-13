const carsData = [
    {
        id: '1',
        name: 'Aventador SVJ',
        brand: 'Lamborghini',
        price: 517770,
        description: 'The most powerful and fastest Lamborghini ever built, with aggressive aerodynamics and track-focused performance.',
        rating: 4.9,
        image:
        "https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: '2',
        name: 'F8 Tributo',
        brand: 'Ferrari',
        price: 280000,
        description: "Ferrari's mid-engined masterpiece combining racing heritage with everyday usability.",
        rating: 4.8,
        image:
        "https://images.pexels.com/photos/10292234/pexels-photo-10292234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: '3',
        name: 'AMG GT Black Series',
        brand: 'Mercedes-AMG',
        price: 335000,
        description: 'The most extreme AMG GT ever created, with track-inspired aerodynamics and uncompromising performance.',
        rating: 4.7,
        image:
        "https://images.pexels.com/photos/26563770/pexels-photo-26563770/free-photo-of-colina-monte-veiculo-carro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: '4',
        name: 'Continental GT Speed',
        brand: 'Bentley',
        price: 274900,
        description: 'The ultimate grand tourer combining British luxury with exceptional performance and craftsmanship.',
        rating: 4.6,
        image:
        "https://images.pexels.com/photos/8641224/pexels-photo-8641224.jpeg"
    },
    {
        id: '5',
        name: 'R8 V10 Plus',
        brand: 'Audi',
        price: 208100,
        description: "Audi's flagship supercar with naturally aspirated V10 power and Quattro all-wheel drive.",
        rating: 4.5,
        image:
        "https://images.pexels.com/photos/6335848/pexels-photo-6335848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: '6',
        name: 'Huracan EVO',
        brand: 'Lamborghini',
        price: 261274,
        description: 'The evolved Huracan with improved aerodynamics, performance and connectivity features.',
        rating: 4.7,
        image:
        "https://images.pexels.com/photos/31396370/pexels-photo-31396370/free-photo-of-lamborghini-huracan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: '7',
        name: 'Vantage',
        brand: 'Aston Martin',
        price: 139000,
        description: "British sports car elegance meets modern performance in Aston Martin's entry-level model.",
        rating: 4.4,
        image:
        "https://images.pexels.com/photos/8190663/pexels-photo-8190663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: '8',
        name: '720S',
        brand: 'McLaren',
        price: 299000,
        description: "McLaren's supercar masterpiece with revolutionary aerodynamics and carbon fiber construction.",
        rating: 4.9,
        image:
        "https://images.pexels.com/photos/6650819/pexels-photo-6650819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id:'9',
        name: 'Tourbillion',
        brand: 'Bugatti',
        price: 4000000,
        description: "The Bugatti Tourbillon is the French brand's newest hybrid hypercar, combining a naturally aspirated V16 engine with cutting-edge electric technology.",
        rating: 5.0,
        image:
        "https://i.pinimg.com/736x/ba/82/8c/ba828cfab2fc7e2e2d1375b25b702ffc.jpg"
    },
    {
        id: '10',
        name: 'Roma',
        brand: 'Ferrari',
        price: 222620,
        description: 'Elegant grand tourer with a design inspired by the Italian dolce vita.',
        rating: 4.6,
        image:
        "https://i.pinimg.com/736x/8a/47/8d/8a478d3637a52524eb7b49b38dec5620.jpg"
    },
    {
        id: '11',
        name: '911 Turbo S',
        brand: 'Porsche',
        price: 207000,
        description: 'The icon of German sports cars with exceptional performance and comfort.',
        rating: 4.8,
        image:
        "https://i.pinimg.com/736x/c0/82/72/c0827267309e00bcb79707c975a646a3.jpg"
    },
    {
        id: '12',
        name: 'Venom F5',
        brand: 'Hennessey',
        price: 2100000,
        description: 'American supercar designed to break speed records.',
        rating: 4.9,
        image:
        "https://i.pinimg.com/736x/3f/d2/52/3fd252ffa1f74c586b2eb9e3e5a55f22.jpg"
    }
];


let filteredCars = [...carsData];
let favorites = JSON.parse(localStorage.getItem('carFavorites') || '[]');


const searchInput = document.getElementById('search');
const brandFilter = document.getElementById('brand-filter');
const priceFilter = document.getElementById('price-filter');
const featuredGrid = document.getElementById('featured-cars-grid');
const resultsGrid = document.getElementById('search-results-grid');


document.addEventListener('DOMContentLoaded', function() {
    populateBrandFilter();
    renderFeaturedCars();
    renderSearchResults();
    setupEventListeners();
});


function populateBrandFilter() {
    const brands = [...new Set(carsData.map(car => car.brand))];
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}


function renderFeaturedCars() {
    const featuredCars = carsData.slice(0, 3);
    featuredGrid.innerHTML = featuredCars.map(car => createCarCard(car, true)).join('');
    
    
    featuredGrid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = e.target.dataset.carId;
            toggleFavorite(carId);
        });
    });
}


function renderSearchResults() {
    resultsGrid.innerHTML = filteredCars.slice(0, 12).map(car => createCarCard(car, false)).join('');
    
    
    resultsGrid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = e.target.dataset.carId;
            toggleFavorite(carId);
        });
    });
}


function createCarCard(car, isFeatured = false) {
    const isFavorite = favorites.includes(car.id);
    
    return `
        <div class="car-card">
            <div class="car-image">
                ${car.image.startsWith('http')
            ? `<img src="${car.image}" alt="${car.name}" loading="lazy">`
            : car.image}
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


function toggleFavorite(carId) {
    const index = favorites.indexOf(carId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(carId);
    }
    
    localStorage.setItem('carFavorites', JSON.stringify(favorites));
    
    
    renderFeaturedCars();
    renderSearchResults();
}


function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
    const selectedPriceRange = priceFilter.value;
    
    filteredCars = carsData.filter(car => {
        
        const matchesSearch = !searchTerm || 
            car.name.toLowerCase().includes(searchTerm) ||
            car.brand.toLowerCase().includes(searchTerm);
        
        
        const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
        
        
        let matchesPrice = true;
        if (selectedPriceRange !== 'all') {
            const [min, max] = selectedPriceRange.split('-').map(Number);
            if (max) {
                matchesPrice = car.price >= min && car.price <= max;
            } else {
                matchesPrice = car.price >= min;
            }
        }
        
        return matchesSearch && matchesBrand && matchesPrice;
    });
    
    renderSearchResults();
}


function setupEventListeners() {
    searchInput.addEventListener('input', filterCars);
    brandFilter.addEventListener('change', filterCars);
    priceFilter.addEventListener('change', filterCars);
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}


window.carsApp = {
    carsData,
    filteredCars,
    favorites,
    toggleFavorite,
    filterCars
};

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString('en-US');
const lastModifiedTime = new Date(document.lastModified).toLocaleTimeString('en-US');
const lastModifiedParagraph = document.getElementById('lastmodified');
lastModifiedParagraph.innerHTML = `Last modified on: ${lastModifiedDate} at ${lastModifiedTime}`;

const year = new Date().getFullYear();
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = year;
}
