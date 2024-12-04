

AOS.init({
    duration: 1200,     
    offset: 200,        
    easing: 'ease-in-out', 
    once: onscroll,         
  });
  

AOS.init();

// Add navbar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

    const popularProducts = [
    {
        name: 'Hatasu MakoWER E-Trike',
        image: 'img/e-trike.png',
        battery: '36V',
        capacity: '3 people',
        price: '₱300/day'
    },
    {
        name: 'Hatasu Nero E-Bike',
        image: 'img/e-bike.png',
        battery: '36V',
        capacity: '2 people',
        price: '₱200/day'
    },
    {
        name: 'YNG 3 E-TRIKE',
        image: 'img/e-trike2.png',
        battery: '36V',
        capacity: '3 people',
        price: '₱250/day'
    },
    {
        name: 'Hatasu Kumi 2023 E-Bike',
        image: 'img/e-bike2.png',
        battery: '36V',
        capacity: '1 person',
        price: '₱150/day'
    }
];

function generatePopularCards() {
    const carouselItemsContainer = document.getElementById('carouselPopularItems');
    const gridItemsContainer = document.getElementById('gridPopularItems');
    
    popularProducts.forEach((product, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) carouselItem.classList.add('active');
        
        carouselItem.innerHTML = `
            <div class="card product-card">
                <h5 class="card-title mt-3 text-center">${product.name}</h5>
                <div class="image-container text-center">
                    <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                </div>
                <div class="card-body">
                    <p><img src="img/battery.png" alt="battery"> ${product.battery} &nbsp;<i class="fa-solid fa-users"></i> ${product.capacity}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <button class="btn btn-primary btn-sm btn-md rent-btn">Rent now</button>
                    </div>
                </div>
            </div>
        `;
        carouselItemsContainer.appendChild(carouselItem);
        
        const gridItem = document.createElement('div');
        gridItem.classList.add('col-6', 'col-sm-4', 'col-md-3', 'mb-3');
        
        gridItem.innerHTML = `
            <div class="card product-card">
                <h5 class="card-title mt-3 text-center">${product.name}</h5>
                <div class="image-container text-center">
                    <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                </div>
                <div class="card-body">
                    <p><img src="img/battery.png" alt="battery"> ${product.battery} &nbsp;<i class="fa-solid fa-users"></i> ${product.capacity}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <button class="btn btn-primary btn-sm rent-btn">Rent now</button>
                    </div>
                </div>
            </div>
        `;
        gridItemsContainer.appendChild(gridItem);
    });
}

generatePopularCards();

    // Product data for the Recommendation section (This could be fetched from an API or database)
    const recommendationProducts = [
        {
            name: 'Hatasu MakoWER E-Trike',
            image: 'img/e-trike.png',
            battery: '36V',
            capacity: '3 people',
            price: '₱300/day'
        },
        {
            name: 'Hatasu Nero E-Bike',
            image: 'img/e-bike.png',
            battery: '36V',
            capacity: '2 people',
            price: '₱200/day'
        },
        {
            name: 'YNG 3 E-TRIKE',
            image: 'img/e-trike2.png',
            battery: '36V',
            capacity: '3 people',
            price: '₱250/day'
        },
        {
            name: 'GTR Mobility Bike',
            image: 'img/e-bike2.png',
            battery: '48V',
            capacity: '2 people',
            price: '₱350/day'
        }
    ];
    
    // Function to generate product cards for Recommendation (Grid and Carousel)
    function generateRecommendationCards() {
        const carouselItemsContainer = document.getElementById('carouselItems');
        const gridItemsContainer = document.getElementById('gridItems');
        
        // Loop through the recommendation products array to create cards for both carousel and grid
        recommendationProducts.forEach((product, index) => {
            // Create carousel item
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) carouselItem.classList.add('active'); // Set the first item as active
            
            carouselItem.innerHTML = `
                <div class="card product-card">
                    <h5 class="card-title mt-3 text-center">${product.name}</h5>
                    <div class="image-container text-center">
                        <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                    </div>
                    <div class="card-body">
                        <p><img src="img/battery.png" alt="battery"> ${product.battery} &nbsp;<i class="fa-solid fa-users"></i> ${product.capacity}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="card-text"><strong>${product.price}</strong></p>
                            <button class="btn btn-primary btn-sm rent-btn">Rent now</button>
                        </div>
                    </div>
                </div>
            `;
            carouselItemsContainer.appendChild(carouselItem);
            
            // Create grid item
            const gridItem = document.createElement('div');
            gridItem.classList.add('col-6', 'col-sm-4', 'col-md-3', 'mb-3');
            
            gridItem.innerHTML = `
                <div class="card product-card">
                    <h5 class="card-title mt-3 text-center">${product.name}</h5>
                    <div class="image-container text-center">
                        <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                    </div>
                    <div class="card-body">
                        <p><img src="img/battery.png" alt="battery"> ${product.battery} &nbsp;<i class="fa-solid fa-users"></i> ${product.capacity}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="card-text"><strong>${product.price}</strong></p>
                            <button class="btn btn-primary btn-sm rent-btn">Rent now</button>
                        </div>
                    </div>
                </div>
            `;
            gridItemsContainer.appendChild(gridItem);
        });
    }
    
    // Call the function to generate product cards for the Recommendation section
    generateRecommendationCards();



    const moreProducts = [
    {
            name: 'Hatasu MakoWER E-Trike',
            image: 'img/e-trike.png',
            battery: '36V',
            capacity: '3 people',
            price: '₱300/day'
        },
        {
            name: 'Hatasu Nero E-Bike',
            image: 'img/e-bike.png',
            battery: '36V',
            capacity: '2 people',
            price: '₱200/day'
        },
        {
            name: 'YNG 3 E-TRIKE',
            image: 'img/e-trike2.png',
            battery: '36V',
            capacity: '3 people',
            price: '₱250/day'
        },
        {
            name: 'GTR Mobility Bike',
            image: 'img/e-bike2.png',
            battery: '48V',
            capacity: '2 people',
            price: '₱350/day'
        }

        
];

function generateProductCards(products, carouselContainer, gridContainer) {
    products.forEach((product, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) carouselItem.classList.add('active');
        
        carouselItem.innerHTML = `
            <div class="card product-card">
                <h5 class="card-title mt-3 text-center">${product.name}</h5>
                <div class="image-container text-center">
                    <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                </div>
                <div class="card-body">
                    <p><img src="img/battery.png" alt="battery"> ${product.battery} &nbsp;<i class="fa-solid fa-users"></i> ${product.capacity}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <button class="btn btn-primary btn-sm rent-btn">Rent now</button>
                    </div>
                </div>
            </div>
        `;
        carouselContainer.appendChild(carouselItem);

        const gridItem = document.createElement('div');
        gridItem.classList.add('col-6', 'col-sm-4', 'col-md-3', 'mb-3');
        
        gridItem.innerHTML = `
            <div class="card product-card">
                <h5 class="card-title mt-3 text-center">${product.name}</h5>
                <div class="image-container text-center">
                    <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                </div>
                <div class="card-body">
                    <p><img src="img/battery.png" alt="battery"> ${product.battery} &nbsp;<i class="fa-solid fa-users"></i> ${product.capacity}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <button class="btn btn-primary btn-sm rent-btn">Rent now</button>
                    </div>
                </div>
            </div>
        `;
        gridContainer.appendChild(gridItem);
    });
}

function toggleMoreProducts() {
    const moreProductsContainer = document.getElementById('moreProducts');
    const showMoreBtn = document.getElementById('showMoreBtn');

    if (moreProductsContainer.classList.contains('d-none')) {
        // Show the more products section
        moreProductsContainer.classList.remove('d-none');
        showMoreBtn.textContent = "Show Less";  // Change the button text
        generateProductCards(moreProducts, document.getElementById('carouselMoreItemsContent'), document.getElementById('gridMoreItems'));
    } else {
        // Hide the more products section
        moreProductsContainer.classList.add('d-none');
        showMoreBtn.textContent = "Show More";  // Revert the button text
    }
}

document.getElementById('showMoreBtn').addEventListener('click', toggleMoreProducts);

generateProductCards(popularProducts, document.getElementById('carouselPopularItems'), document.getElementById('gridPopularItems'));
