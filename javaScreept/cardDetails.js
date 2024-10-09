// جلب بيانات البطاقة من LocalStorage
const selectedCard = JSON.parse(localStorage.getItem('selectedCard'));

// التحقق من وجود البطاقة
if (selectedCard) {
    const mainCard = document.getElementById('main-card');
    mainCard.innerHTML = `
        <div class="card-content">
            <h3 class="category">Web Development Languages</h3>
            <h1 class="title">${selectedCard.framework}</h1>
            <div class="rating">${selectedCard.rating}</div>
            <p class="description">${selectedCard.description}</p>
        </div>
        <div class="flex card-info">
            <div class="card-image">
                <img src="${selectedCard.image}" alt="${selectedCard.framework} Logo" />
            </div>
            <p class="author">${selectedCard.framework} by <a href="#">${selectedCard.author}</a></p>

            <div class="button-fav flex">
                <p>Interested about this topic?</p>
                <button class="add-to-favorites flex">
                    Add to Favourites
                    <ion-icon name="heart-outline"></ion-icon>
                </button>
            </div>
        </div>
    `;

    // تحديث قائمة المواضيع
    const topicsContainer = document.querySelector('.topic-list');
    topicsContainer.innerHTML = selectedCard.topics.map(topic => 
        `<li><ion-icon name="checkmark-circle-outline"></ion-icon> <p>${topic}</p></li>`
    ).join('');
} else {
    document.getElementById('main-card').innerHTML = '<p>No card selected.</p>';
}