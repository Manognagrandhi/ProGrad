document.addEventListener('DOMContentLoaded', function() {
    const loadingAnimation = document.getElementById('loading-animation');
    const loginContainer = document.getElementById('login-container');
    const bookListContainer = document.getElementById('book-list-container');
    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('search-bar');
    const paginationLoader = document.getElementById('pagination-loader');
    const cartContainer = document.getElementById('cart-container');
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    
    // Show loading animation
    loadingAnimation.style.display = 'block';
    
    // Simulate API request for user authentication
    setTimeout(function() {
    loadingAnimation.style.display = 'none';
    // loginContainer.style.display = 'block';
    }, 2000);
    
    // Simulate API request for fetching book list
    setTimeout(function() {
    const books = [
    { id: 1, title: 'C', author: 'Brian Kernighan', available: true, count: 100, price: '1000$' },
    { id: 2, title: 'JAVA', author: 'Bruce Eckel', available: false, count: 500, price: '2000$' },
    { id: 3, title: 'Python', author: 'Zed Shaw', available: true, count: 400, price: '5000$' },
    // Add more books here
    ];
    
    // Display book list
    //document.write("Title       Author      Count       Price");
    books.forEach(function(book) {
    const li = document.createElement('li');
    li.textContent = book.title + '  -   ' + book.author + '   -  ' + book.count + '   -   ' + book.price;
    bookList.appendChild(li);
    });
    
    bookListContainer.style.display = 'block';
    }, 4000);
    
    // Add event listener for search input
    searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Filter book list based on search term
    const filteredBooks = Array.from(bookList.getElementsByTagName('li')).filter(function(book) {
    return book.textContent.toLowerCase().includes(searchTerm);
    });
    
    // Show filtered books
    Array.from(bookList.getElementsByTagName('li')).forEach(function(book) {
    book.style.display = 'none';
    });
    
    filteredBooks.forEach(function(book) {
    book.style.display = 'block';
    });
    });
    
    // Simulate API request for adding book to cart
    bookList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
    const bookTitle = event.target.textContent;
    const li = document.createElement('li');
    li.textContent = bookTitle;
    cartItems.appendChild(li);
    }
    });
    
    // Simulate API request for checkout
    checkoutButton.addEventListener('click', function() {
    const cartItemCount = cartItems.getElementsByTagName('li').length;
    if (cartItemCount > 0) {
    // Simulate successful checkout
    alert('Checkout successful!');
    } else {
    alert('No items in the cart!');
    }
    });
    });