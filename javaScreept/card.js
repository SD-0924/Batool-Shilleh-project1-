const cardContainer = document.getElementById('card-container');

function createCard(card) {
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

function showCardDetails(card) {
    // عرض تفاصيل البطاقة في LocalStorage
    localStorage.setItem('selectedCard', JSON.stringify(card));

    // الانتقال إلى صفحة about
    window.location.href = 'about.html';
}

async function fetchCards() {
    try {
        const response = await fetch('http://localhost:4000/api/languages'); // تأكد من أن هذا هو مسار الـ API الصحيح
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        renderCards(data); // Render cards after fetching
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function renderCards(cards) {
    cardContainer.innerHTML = ''; // Clear the container before rendering
    cards.forEach((card) => {
        cardContainer.innerHTML += createCard(card);
    });
}

// Call the fetchCards function when the page loads
window.onload = fetchCards;

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
function handleSortingAndFiltering(cards) {
    let filteredCards = filterCards(cards); // Filter first
    let sortedAndFilteredCards = sortCards(filteredCards); // Then sort
    renderCards(sortedAndFilteredCards); // Finally, render
}

// Event listeners for sorting and filtering
sortSelect.addEventListener('change', () => handleSortingAndFiltering(cardData));
filterSelect.addEventListener('change', () => handleSortingAndFiltering(cardData));
searchInput.addEventListener('input', () => handleSortingAndFiltering(cardData));
