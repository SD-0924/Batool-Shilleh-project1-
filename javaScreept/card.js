const cardContainer = document.getElementById('card-container');

function createCard(card) { // Added count parameter
  console.log(card.title);
  const filledStars = Math.floor(card.rating);
  const halfStar = card.rating % 1 >= 0.5 ? 1 : 0;

  const cardHTML = `
  
    <div class="card flex" onclick="showCardDetails(${card.id})">
      <div class="card-header">
        <img src="${card.image}" alt="${card.framework} Logo" class="logo" />
      </div>
      <div class="card-content flex">
        <p>${card.title}</p>
        <h4>${card.framework}</h4>
      </div>
      <div class="card-footer flex">
        <div class="rating flex">
          ${'<span class="star" data-value="1"><ion-icon name="star"></ion-icon></span>'.repeat(filledStars)}
          ${halfStar ? '<span class="star" data-value="0.5"><ion-icon name="star-half-outline"></ion-icon></span>' : ''}
          ${'<span class="star" data-value="0"><ion-icon name="star-outline"></ion-icon></span>'.repeat(5 - filledStars - halfStar)}
        </div>
        <p class="author">Author: ${card.author}</p>
      </div>
    </div>
  `;
  return cardHTML;
}

function showCardDetails(cardId) {
  window.location.href = `about.html?id=${cardId}`; // Redirect to About page with the card ID
}

async function fetchCards() {
  try {
      const response = await fetch('https://batool-shilleh-project1.onrender.com/api/languages');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Parse and return the JSON response
  } catch (error) {
      console.error('Error fetching card data:', error);
      return []; // Return an empty array on error
  }
}

async function renderCards(cards) {
  cardContainer.innerHTML = ''; // Clear the container before rendering

  // Select the paragraph element for displaying the count
  const searchCountElement = document.querySelector('#search-count p');

  if (Array.isArray(cards) && cards.length > 0) {
      // Display the number of topics found
      const count = cards.length; // Get the count of filtered/sorted cards
      
      // Update the paragraph with the count
      searchCountElement.textContent = `${count} Topic Found`;
      
      cards.forEach((card) => {
          if (card) { // Ensure the card is not null
              cardContainer.innerHTML += createCard(card, count); // Pass the count to createCard
          }
      });
  } else {
      console.warn('No cards found or cardData is not an array:', cards);
      searchCountElement.textContent = '0 Topic Found'; // Update to show no topics found
      cardContainer.innerHTML = '<p>No cards available.</p>';
  }
}


// Call the renderCards function when the page loads
window.onload = async () => {
  const cardData = await fetchCards(); // Fetch cards once
  await renderCards(cardData); // Render the fetched cards
};

// Sorting and filtering logic
const sortSelect = document.getElementById('sort');
const filterSelect = document.getElementById('filter');
const searchInput = document.getElementById('searchInput');

// Function to filter cards by search input or title
function filterCards(cards) {
  const filterValue = searchInput.value.toLowerCase();
  if (filterValue) {
    return cards.filter(card =>
      card.title.toLowerCase().includes(filterValue) ||
      card.framework.toLowerCase().includes(filterValue)
    );
  }
  return cards; // If no filter, return all cards
}

// Function to sort cards based on user selection
function sortCards(cards) {
  const sortValue = sortSelect.value;
  if (sortValue === 'default') {
    return cards.sort((a, b) => a.framework.localeCompare(b.framework)); // Alphabetical order
  } else if (sortValue === 'relevance') {
    return cards.sort((a, b) => b.rating - a.rating); // Rating from most to least
  } else if (sortValue === 'date') {
    return cards.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title alphabetically
  }
  return cards;
}

// Function to handle both sorting and filtering
async function handleSortingAndFiltering() {
  const cardData = await fetchCards(); // Fetch cards
  let filteredCards = filterCards(cardData); // Filter first
  let sortedAndFilteredCards = sortCards(filteredCards); // Then sort
  await renderCards(sortedAndFilteredCards); // Finally, render
}

// Event listeners for sorting and filtering
sortSelect.addEventListener('change', handleSortingAndFiltering);
filterSelect.addEventListener('change', handleSortingAndFiltering);
searchInput.addEventListener('input', handleSortingAndFiltering);
