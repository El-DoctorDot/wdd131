const allCarsData = [
    {
        id: '1',
        name: 'Aventador SVJ',
        brand: 'Lamborghini',
        price: 517770,
        description: 'The most powerful and fastest Lamborghini ever built, with aggressive aerodynamics and track-focused performance.',
        rating: 4.9,
        image: "https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        specs: {
            engine: 'V12 6.5L',
            power: '770 HP',
            acceleration: '2.8s',
            topSpeed: '350 km/h'
        }
    },
    {
        id: '2',
        name: 'F8 Tributo',
        brand: 'Ferrari',
        price: 280000,
        description: "Ferrari's mid-engined masterpiece combining racing heritage with everyday usability.",
        rating: 4.8,
        image:
        "https://images.pexels.com/photos/10292234/pexels-photo-10292234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        specs: {
            engine: 'V8 3.9L Turbo',
            power: '720 HP',
            acceleration: '2.9s',
            topSpeed: '340 km/h'
        }
    },
    {
        id: '3',
        name: 'AMG GT Black Series',
        brand: 'Mercedes-AMG',
        price: 335000,
        description: 'The most extreme AMG GT ever created, with track-inspired aerodynamics and uncompromising performance.',
        rating: 4.7,
        image:
        "https://images.pexels.com/photos/26563770/pexels-photo-26563770/free-photo-of-colina-monte-veiculo-carro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        specs: {
            engine: 'V8 4.0L Biturbo',
            power: '730 HP',
            acceleration: '3.2s',
            topSpeed: '325 km/h'
        }
    },
    {
        id: '4',
        name: 'Continental GT Speed',
        brand: 'Bentley',
        price: 274900,
        description: 'The ultimate grand tourer combining British luxury with exceptional performance and craftsmanship.',
        rating: 4.6,
        image:
        "https://images.pexels.com/photos/8641224/pexels-photo-8641224.jpeg",
        specs: {
            engine: 'W12 6.0L',
            power: '650 HP',
            acceleration: '3.6s',
            topSpeed: '335 km/h'
        }
    },
    {
        id: '5',
        name: 'R8 V10 Plus',
        brand: 'Audi',
        price: 208100,
        description: "Audi's flagship supercar with naturally aspirated V10 power and Quattro all-wheel drive.",
        rating: 4.5,
        image:
        "https://images.pexels.com/photos/6335848/pexels-photo-6335848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        specs: {
            engine: 'V10 5.2L',
            power: '610 HP',
            acceleration: '3.2s',
            topSpeed: '330 km/h'
        }
    },
    {
        id: '6',
        name: 'Huracan EVO',
        brand: 'Lamborghini',
        price: 261274,
        description: 'The evolved Huracan with improved aerodynamics, performance and connectivity features.',
        rating: 4.7,
        image:
        "https://images.pexels.com/photos/31396370/pexels-photo-31396370/free-photo-of-lamborghini-huracan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        specs: {
            engine: 'V10 5.2L',
            power: '640 HP',
            acceleration: '2.9s',
            topSpeed: '325 km/h'
        }
    },
    {
        id: '7',
        name: 'Vantage',
        brand: 'Aston Martin',
        price: 139000,
        description: "British sports car elegance meets modern performance in Aston Martin's entry-level model.",
        rating: 4.4,
        image:
        "https://images.pexels.com/photos/8190663/pexels-photo-8190663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        specs: {
            engine: 'V8 4.0L Turbo',
            power: '503 HP',
            acceleration: '3.5s',
            topSpeed: '314 km/h'
        }
    },
    {
        id: '8',
        name: '720S',
        brand: 'McLaren',
        price: 299000,
        description: "McLaren's supercar masterpiece with revolutionary aerodynamics and carbon fiber construction.",
        rating: 4.9,
        image:
        "https://images.pexels.com/photos/6650819/pexels-photo-6650819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        specs: {
            engine: 'V8 4.0L Biturbo',
            power: '720 HP',
            acceleration: '2.8s',
            topSpeed: '341 km/h'
        }
    },
    {
        id:'9',
        name: 'Tourbillion',
        brand: 'Bugatti',
        price: 4000000,
        description: "The Bugatti Tourbillon is the French brand's newest hybrid hypercar, combining a naturally aspirated V16 engine with cutting-edge electric technology.",
        rating: 5.0,
        image:
        "https://i.pinimg.com/736x/ba/82/8c/ba828cfab2fc7e2e2d1375b25b702ffc.jpg",
        specs: {
            engine: 'V16 Hybrid',
            power: '1,800 HP',
            acceleration: '2.0s (0–100 km/h)',
            topSpeed: '445 km/h'
        }
    },
    {
        id: '10',
        name: 'Roma',
        brand: 'Ferrari',
        price: 222620,
        description: 'Elegant grand tourer with a design inspired by the Italian dolce vita.',
        rating: 4.6,
        image:
        "https://i.pinimg.com/736x/8a/47/8d/8a478d3637a52524eb7b49b38dec5620.jpg",
        specs: {
          engine: '3.9L V8 Twin-Turbo',
          power: '612 HP',
          acceleration: '3.4s (0–100 km/h)',
          topSpeed: '320 km/h'
        }
    },
    {
        id: '11',
        name: '911 Turbo S',
        brand: 'Porsche',
        price: 207000,
        description: 'The icon of German sports cars with exceptional performance and comfort.',
        rating: 4.8,
        image:
        "https://i.pinimg.com/736x/c0/82/72/c0827267309e00bcb79707c975a646a3.jpg",
        specs: {
            engine: '3.8L Flat-6 Twin-Turbo',
            power: '640 HP',
            acceleration: '2.7s (0–100 km/h)',
            topSpeed: '330 km/h'
        }
    },
    {
        id: '12',
        name: 'Venom F5',
        brand: 'Hennessey',
        price: 2100000,
        description: 'American supercar designed to break speed records.',
        rating: 4.9,
        image:
        "https://i.pinimg.com/736x/3f/d2/52/3fd252ffa1f74c586b2eb9e3e5a55f22.jpg",
        specs: {
            engine: '6.6L V8 Twin-Turbo',
            power: '1,817 HP',
            acceleration: '2.6s (0–100 km/h)',
            topSpeed: '482+ km/h (300+ mph)'
        }
    }
];


let favorites = JSON.parse(localStorage.getItem('carFavorites') || '[]');
let selectedForComparison = [];


const emptyState = document.getElementById('empty-state');
const favoritesGrid = document.getElementById('favorites-grid');
const favoritesCount = document.getElementById('favorites-count');
const clearAllBtn = document.getElementById('clear-all-favorites');
const comparisonModal = document.getElementById('comparison-modal');
const modalClose = document.getElementById('modal-close');
const comparisonContent = document.getElementById('comparison-content');


document.addEventListener('DOMContentLoaded', function() {
    renderFavorites();
    updateFavoritesCount();
    setupEventListeners();
});


function getFavoriteCars() {
    return allCarsData.filter(car => favorites.includes(car.id));
}


function createFavoriteCard(car) {
    const isSelected = selectedForComparison.includes(car.id);
    
    return `
        <div class="favorite-card" data-car-id="${car.id}">
            <div class="car-image">
                ${car.image.startsWith('http')
            ? `<img src="${car.image}" alt="${car.name}" loading="lazy">`
            : car.image}
            </div>
            <div class="car-content">
                <div class="car-header">
                    <span class="car-brand">${car.brand}</span>
                    <div class="favorite-actions">
                        <button class="action-btn compare-btn ${isSelected ? 'selected' : ''}" 
                                data-car-id="${car.id}" 
                                title="Compare">
                            ⚖️
                        </button>
                        <button class="action-btn remove-btn" 
                                data-car-id="${car.id}" 
                                title="Remove from favorites">
                            🗑️
                        </button>
                    </div>
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


function renderFavorites() {
    const favoriteCars = getFavoriteCars();
    
    if (favoriteCars.length === 0) {
        emptyState.classList.add('show');
        favoritesGrid.style.display = 'none';
    } else {
        emptyState.classList.remove('show');
        favoritesGrid.style.display = 'grid';
        favoritesGrid.innerHTML = favoriteCars.map(car => createFavoriteCard(car)).join('');
        attachEventListeners();
    }
}


function updateFavoritesCount() {
    const count = favorites.length;
    favoritesCount.textContent = `${count} ${count === 1 ? 'saved car' : 'saved cars'}`;
}


function removeFromFavorites(carId) {
    const index = favorites.indexOf(carId);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('carFavorites', JSON.stringify(favorites));
        
        
        const comparisonIndex = selectedForComparison.indexOf(carId);
        if (comparisonIndex > -1) {
            selectedForComparison.splice(comparisonIndex, 1);
        }
        
        renderFavorites();
        updateFavoritesCount();
    }
}


function clearAllFavorites() {
    if (confirm('Are you sure you want to remove all cars from favorites?')) {
        favorites = [];
        selectedForComparison = [];
        localStorage.setItem('carFavorites', JSON.stringify(favorites));
        renderFavorites();
        updateFavoritesCount();
    }
}


function toggleForComparison(carId) {
    const index = selectedForComparison.indexOf(carId);
    
    if (index > -1) {
        selectedForComparison.splice(index, 1);
    } else {
        if (selectedForComparison.length >= 3) {
            alert('You can compare a maximum of 3 cars at a time!');
            return;
        }
        selectedForComparison.push(carId);
    }
    
    renderFavorites();
    
    if (selectedForComparison.length >= 2) {
        showComparison();
    }
}


function showComparison() {
    const carsToCompare = allCarsData.filter(car => selectedForComparison.includes(car.id));
    
    let comparisonHTML = `
        <div class="comparison-grid">
            ${carsToCompare.map(car => `
                <div class="comparison-item">
                    <h4>${car.brand} ${car.name}</h4>
                    <div class="comparison-specs">
                        <div class="spec-row">
                            <span class="spec-label">price:</span>
                            <span class="spec-value">$${car.price.toLocaleString()}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Engine:</span>
                            <span class="spec-value">${car.specs?.engine || 'N/A'}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Power:</span>
                            <span class="spec-value">${car.specs?.power || 'N/A'}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">0-100 km/h:</span>
                            <span class="spec-value">${car.specs?.acceleration || 'N/A'}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">TopSpeed:</span>
                            <span class="spec-value">${car.specs?.topSpeed || 'N/A'}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Rating:</span>
                            <span class="spec-value">⭐ ${car.rating}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    comparisonContent.innerHTML = comparisonHTML;
    comparisonModal.classList.add('show');
}


function closeModal() {
    comparisonModal.classList.remove('show');
    selectedForComparison = [];
    renderFavorites();
}


function attachEventListeners() {
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const carId = e.target.dataset.carId;
            removeFromFavorites(carId);
        });
    });

    
    document.querySelectorAll('.compare-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const carId = e.target.dataset.carId;
            toggleForComparison(carId);
        });
    });
}


function setupEventListeners() {
    clearAllBtn.addEventListener('click', clearAllFavorites);
    modalClose.addEventListener('click', closeModal);
    
    
    comparisonModal.addEventListener('click', (e) => {
        if (e.target === comparisonModal) {
            closeModal();
        }
    });
    
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && comparisonModal.classList.contains('show')) {
            closeModal();
        }
    });
}
