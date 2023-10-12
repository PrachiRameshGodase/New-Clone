// script.js
let products = [];

const fetchData = async () => {
    try {
        const response = await fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093');
        const data = await response.json();
        products = data.products;
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayProducts = (products) => {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <span class="badge">${product.badge}</span>
            <div class="variants">${product.variants.join(', ')}</div>
        `;
        productContainer.appendChild(productCard);
    });
};

const filterProducts = () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
};

const setView = (viewType) => {
    const productContainer = document.getElementById('productContainer');
    if (viewType === 'grid') {
        productContainer.classList.remove('list-view');
    } else if (viewType === 'list') {
        productContainer.classList.add('list-view');
    }
};

fetchData();
