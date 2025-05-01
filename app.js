const books = [
    { title: "The Great Adventure", author: "John Doe", genre: "fiction", price: 15, language: "english", description: "An exciting adventure story." },
    { title: "Mystery in the Dark", author: "Jane Smith", genre: "mystery", price: 10, language: "english", description: "A thrilling mystery novel." },
    { title: "The Magic World", author: "Robert Brown", genre: "fantasy", price: 20, language: "english", description: "A captivating fantasy tale." },
    { title: "Understanding the Universe", author: "Albert Einstein", genre: "non-fiction", price: 25, language: "english", description: "A deep dive into the mysteries of the universe." }
  ];
  
  // Event listener for the form submission
  document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const genre = document.getElementById("genre").value;
    const author = document.getElementById("author").value.toLowerCase();
    const priceMin = parseInt(document.getElementById("priceMin").value);
    const priceMax = parseInt(document.getElementById("priceMax").value);
    const language = document.getElementById("language").value;
  
    // Filter books based on user input
    const filteredBooks = books.filter(book => {
      return (
        (book.genre === genre || genre === "any") &&
        (book.author.toLowerCase().includes(author) || author === "") &&
        (book.price >= (priceMin || 0) && book.price <= (priceMax || Infinity)) &&
        (book.language === language)
      );
    });
  
    // Show recommendations
    displayRecommendations(filteredBooks);
  });
  
  function displayRecommendations(books) {
    const recommendationsContainer = document.getElementById("recommendationList");
    recommendationsContainer.innerHTML = '';
  
    if (books.length === 0) {
      recommendationsContainer.innerHTML = "<p>No books match your criteria.</p>";
      return;
    }
  
    books.forEach(book => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");
  
      bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Price:</strong> $${book.price}</p>
        <p><strong>Language:</strong> ${book.language}</p>
        <p>${book.description}</p>
      `;
  
      recommendationsContainer.appendChild(bookElement);
    });
  }