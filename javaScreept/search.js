const cardContainer = document.getElementById('card-container');
const sortSelect = document.getElementById('soer');
const filterSelect = document.getElementById('filter');
const searchInput = document.getElementById('searchInput');

// Helper function to render cards
function renderCards(cards) {
  cardContainer.innerHTML = ''; // Clear the container
  cards.forEach((card) => {
    cardContainer.innerHTML += createCard(card);
  });
}

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
function handleSortingAndFiltering() {
  let filteredCards = filterCards(cardData); // Filter first
  let sortedAndFilteredCards = sortCards(filteredCards); // Then sort
  renderCards(sortedAndFilteredCards); // Finally, render
}

// Event listeners for sorting and filtering
sortSelect.addEventListener('change', handleSortingAndFiltering);
filterSelect.addEventListener('change', handleSortingAndFiltering);
searchInput.addEventListener('input', handleSortingAndFiltering);

// Initial render
window.onload = handleSortingAndFiltering;
