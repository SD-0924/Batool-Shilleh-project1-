document.addEventListener('DOMContentLoaded', () => {
    const favouritesToggle = document.getElementById('favouritesToggle');
    const favouritesSection = document.getElementById('favouritesSection');
  
    favouritesSection.classList.remove('show');
  
    favouritesToggle.addEventListener('click', async () => {
        if (favouritesSection.classList.contains('show')) {
            favouritesSection.classList.remove('show'); 
        } else {
            favouritesSection.classList.add('show'); 
            await showFavorites(); 
        }
    });
  });
  
async function showFavorites() {
  try {
      const response = await fetch('my-api/favorites.js'); 
      if (!response.ok) {
          throw new Error('Failed to fetch favorites');
      }

      const favorites = await response.json();
      renderFavorites(favorites);
  } catch (error) {
      console.error('Error fetching favorites:', error);
  }
}

function renderFavorites(favorites) {
  const favSection = document.getElementById('favouritesSection');
  const favCardsContainer = favSection.querySelector('.fav-cards-container');

  if (favorites.length === 0) {
      favCardsContainer.innerHTML = '<p>No favorites added yet.</p>';
  } else {
      favCardsContainer.innerHTML = favorites.map(fav => `
          <div class="fav-card">
              <div class="fav-img-container">
                  <img src="${fav.image}" alt="${fav.framework}">
              </div>
              <div class="card-info-container-fav">
                  <div class="card-title-container">
                      <h3 class="language-name">${fav.framework}</h3>
                  </div>
                  <div class="rate-author-container">
                      <div class="stars">
                          ${'★'.repeat(Math.floor(fav.rating))}${'☆'.repeat(5 - Math.floor(fav.rating))}
                      </div>
                  </div>
              </div>
          </div>
      `).join('');
  }
}
