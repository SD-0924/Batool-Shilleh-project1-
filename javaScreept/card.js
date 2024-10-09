const cardContainer = document.getElementById('card-container');

function createCard(card) {
  console.log(card.title)
  const filledStars = Math.floor(card.rating);
  const halfStar = card.rating % 1 >= 0.5 ? 1 : 0;

  const cardHTML = `
    <div class="card flex" onclick="showCardDetails(${JSON.stringify(card)})">
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

async function renderCards() {
  cardContainer.innerHTML = ''; // Clear the container before rendering

  try {
      const response = await fetch('http://localhost:5000/api/languages');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const cardData = await response.json(); // Parse the JSON response

      if (Array.isArray(cardData) && cardData.length > 0) {
          cardData.forEach((card) => {
              if (card) { // Ensure the card is not null
                  cardContainer.innerHTML += createCard(card);
              }
          });
          cardData.forEach((card) => {
            console.log(card); // Log the card to check if it’s null or valid
            if (card) {
                cardContainer.innerHTML += createCard(card);
            } else {
                console.error('Card is null or invalid:', card);
            }
        });
        
      } else {
          console.warn('No cards found or cardData is not an array:', cardData);
          cardContainer.innerHTML = '<p>No cards available.</p>';
      }
  } catch (error) {
      console.error('Error fetching card data:', error);
      cardContainer.innerHTML = '<p>Failed to load cards. Please try again later.</p>';
  }
}


// Call the renderCards function when the page loads
window.onload = renderCards;

// Sorting and filtering logic
const sortSelect = document.getElementById('soer');
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
function handleSortingAndFiltering() {
  // Fetch cards again to apply sorting and filtering
  fetch('http://localhost:5000/api/languages')
    .then(response => response.json())
    .then(cardData => {
      let filteredCards = filterCards(cardData); // Filter first
      let sortedAndFilteredCards = sortCards(filteredCards); // Then sort
      renderCards(sortedAndFilteredCards); // Finally, render
    })
    .catch(error => {
      console.error('Error fetching card data:', error);
    });
}

// Event listeners for sorting and filtering
sortSelect.addEventListener('change', handleSortingAndFiltering);
filterSelect.addEventListener('change', handleSortingAndFiltering);
searchInput.addEventListener('input', handleSortingAndFiltering);

// Initial render
window.onload = handleSortingAndFiltering;
