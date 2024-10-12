const cardContainer = document.getElementById('card-container');

function createCard(card) { 
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
  window.location.href = `about.html?id=${cardId}`; 
}

async function fetchCards() {
  try {
      const response = await fetch('https://batool-shilleh-project1.onrender.com/api/languages');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); 
  } catch (error) {
      console.error('Error fetching card data:', error);
      return []; 
  }
}

async function renderCards(cards) {
  cardContainer.innerHTML = ''; 

  const searchCountElement = document.querySelector('#search-count p');

  if (Array.isArray(cards) && cards.length > 0) {
      const count = cards.length; 
      
      searchCountElement.textContent = `${count} Topic Found`;
      
      cards.forEach((card) => {
          if (card) { 
              cardContainer.innerHTML += createCard(card, count);
          } else {
              console.warn('Found null or undefined card:', card);
          }
      });
  } else {
      console.warn('No cards found or cardData is not an array:', cards);
      searchCountElement.textContent = '0 Topic Found'; 
      cardContainer.innerHTML = '<p>No cards available.</p>';
  }
}

window.onload = async () => {
  const cardData = await fetchCards(); 
  await renderCards(cardData); 
};

const sortSelect = document.getElementById('sort');
const filterSelect = document.getElementById('filter');
const searchInput = document.getElementById('searchInput');

function filterCards(cards) {
  const filterValue = searchInput.value.toLowerCase();
  if (filterValue) {
    return cards.filter(card =>
      card.title.toLowerCase().includes(filterValue) ||
      card.framework.toLowerCase().includes(filterValue)
    );
  }
  return cards; 
}

function sortCards(cards) {
  const sortValue = sortSelect.value;
  if (sortValue === 'default') {
    return cards.sort((a, b) => a.framework.localeCompare(b.framework)); 
  } else if (sortValue === 'relevance') {
    return cards.sort((a, b) => b.rating - a.rating); 
  } else if (sortValue === 'date') {
    return cards.sort((a, b) => a.title.localeCompare(b.title)); 
  }
  return cards;
}

async function handleSortingAndFiltering() {
  const cardData = await fetchCards(); 
  let filteredCards = filterCards(cardData); 
  let sortedAndFilteredCards = sortCards(filteredCards); 
  await renderCards(sortedAndFilteredCards); 
}

sortSelect.addEventListener('change', handleSortingAndFiltering);
filterSelect.addEventListener('change', handleSortingAndFiltering);
searchInput.addEventListener('input', handleSortingAndFiltering);

const favorites = []; 

function addToFavorites(cardId) {
  const card = cardData.find(c => c.id === cardId);
  
  if (card && !favorites.includes(card)) { 
      favorites.push(card); 
      renderFavorites(); 
  }
}

function renderFavorites() {
  const favContainer = document.querySelector('.fav-cards-container');
  favContainer.innerHTML = ''; 

  if (favorites.length > 0) {
      favorites.forEach(fav => {
          favContainer.innerHTML += `
              <div class="fav-img-container">
                  <img src="${fav.image}" alt="${fav.title}">
              </div>
              <div class="card-info-container-fav">
                  <h3 class="language-name">${fav.title}</h3>
              </div>
          `;
      });
  } else {
      favContainer.innerHTML = '<p>No favorites added.</p>';
  }
}