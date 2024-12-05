AOS.init({
    duration: 1200,
    offset: 200,
    easing: 'ease-in-out',
    once: onscroll,
});

AOS.init();

window.addEventListener('scroll', function () {
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
    { name: 'Hatasu MakoWER E-Trike', image: 'img/e-trike.png', battery: '36V', capacity: '3 people', price: '₱300/day' },
    { name: 'Hatasu Nero E-Bike', image: 'img/e-bike.png', battery: '36V', capacity: '2 people', price: '₱200/day' },
    { name: 'YNG 3 E-TRIKE', image: 'img/e-trike2.png', battery: '36V', capacity: '3 people', price: '₱250/day' },
    { name: 'Hatasu Kumi 2023 E-Bike', image: 'img/e-bike2.png', battery: '36V', capacity: '1 person', price: '₱150/day' },
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

const recommendationProducts = [
    { name: 'Hatasu MakoWER E-Trike', image: 'img/e-trike.png', battery: '36V', capacity: '3 people', price: '₱300/day' },
    { name: 'Hatasu Nero E-Bike', image: 'img/e-bike.png', battery: '36V', capacity: '2 people', price: '₱200/day' },
    { name: 'YNG 3 E-TRIKE', image: 'img/e-trike2.png', battery: '36V', capacity: '3 people', price: '₱250/day' },
    { name: 'GTR Mobility Bike', image: 'img/e-bike2.png', battery: '48V', capacity: '2 people', price: '₱350/day' },
];

function generateRecommendationCards() {
    const carouselItemsContainer = document.getElementById('carouselItems');
    const gridItemsContainer = document.getElementById('gridItems');

    recommendationProducts.forEach((product, index) => {
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

generateRecommendationCards();

const moreProducts = [
    { name: 'Hatasu MakoWER E-Trike', image: 'img/e-trike.png', battery: '36V', capacity: '3 people', price: '₱300/day' },
    { name: 'Hatasu Nero E-Bike', image: 'img/e-bike.png', battery: '36V', capacity: '2 people', price: '₱200/day' },
    { name: 'YNG 3 E-TRIKE', image: 'img/e-trike2.png', battery: '36V', capacity: '3 people', price: '₱250/day' },
    { name: 'GTR Mobility Bike', image: 'img/e-bike2.png', battery: '48V', capacity: '2 people', price: '₱350/day' },
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
        moreProductsContainer.classList.remove('d-none');
        showMoreBtn.textContent = "Show Less";
        generateProductCards(moreProducts, document.getElementById('carouselMoreItemsContent'), document.getElementById('gridMoreItems'));
    } else {
        moreProductsContainer.classList.add('d-none');
        showMoreBtn.textContent = "Show More";
    }
}

document.getElementById('showMoreBtn').addEventListener('click', toggleMoreProducts);

generateProductCards(popularProducts, document.getElementById('carouselPopularItems'), document.getElementById('gridPopularItems'));

const signInForm = document.getElementById("sign-in-form");
const signUpForm = document.getElementById("sign-up-form");
const signInLink = document.querySelector('.signup');
const signUpLink = document.querySelector('.signin');

signInLink.addEventListener('click', function (e) {
    e.preventDefault();
    signInForm.classList.add('fade-out-slide-up');
    setTimeout(() => {
        signUpForm.classList.remove('fade-out-slide-up');
        signUpForm.classList.add('fade-in-slide-up');
    }, 500);
});

signUpLink.addEventListener('click', function (e) {
    e.preventDefault();
    signUpForm.classList.add('fade-out-slide-up');
    setTimeout(() => {
        signInForm.classList.remove('fade-out-slide-up');
        signInForm.classList.add('fade-in-slide-up');
    }, 500);
});
