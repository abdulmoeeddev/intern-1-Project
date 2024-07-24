document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('productsContainer');
    const loginMessage = document.getElementById('loginMessage');
  
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    if (isLoggedIn) {
      // User is logged in, fetch and display products
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
          products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4', 'mb-4');
            productCard.innerHTML = `
              <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text"><strong>Price:</strong> $${product.price}</p>
                  <a href="product-details.html?id=${product.id}" class="btn btn-primary">View Details</a>
                </div>
              </div>
            `;
            productsContainer.appendChild(productCard);
          });
        })
        .catch(error => console.error('Error fetching products:', error));
    } else {
      // User is not logged in, show login message
      loginMessage.classList.remove('d-none');
    }
  });
  