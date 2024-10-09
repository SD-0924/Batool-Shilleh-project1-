async function getCourseData() {
    const urlParams = new URLSearchParams(window.location.search); // Get URL parameters
    const cardId = urlParams.get('id'); // Get the card ID from the URL

    try {
        const response = await fetch(`http://localhost:5000/api/languages/${cardId}`); // Fetch course by ID
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const course = await response.json(); // Parse the JSON response
        renderCourseDetails(course); // Render course details
    } catch (error) {
        console.error('Error fetching course data:', error);
        document.getElementById('main-card').innerHTML = '<p>Failed to load course details. Please try again later.</p>';
    }
}

function renderCourseDetails(course) {
    const mainCard = document.getElementById('main-card');
    const topicsCard = document.getElementById('topics-card'); // Removed extra space

    mainCard.innerHTML = `
        <div class="card-content">
            <h3 class="category">${course.title}</h3>
            <h1 class="title">${course.framework}</h1>
            <div class="rating">${'★'.repeat(Math.floor(course.rating))}${'☆'.repeat(5 - Math.floor(course.rating))}</div>
            <p class="description">${course.description}</p>
        </div>
        <div class="flex card-info">
            <div class="card-image">
                <img src="${course.image}" alt="${course.title} Logo" />
            </div>
            <p class="author">${course.framework} by <a>${course.author}<a></p>
            <div class="button-fav flex">
                <p>Interested in this topic?</p>
                <button class="add-to-favorites flex">
                    Add to Favourites
                    <ion-icon name="heart-outline"></ion-icon>
                </button>
            </div>
        </div>
    `;

    // Check if topics exist and render them
    if (course.topics && Array.isArray(course.topics) && course.topics.length > 0) {
        topicsCard.innerHTML = `
            <div class="container">
                <h1>${course.framework} Sub Topics</h1>
                <ul class="topic-list">
                    ${course.topics.map(topic => `<li><ion-icon name="checkmark-circle-outline"></ion-icon><p>${topic}</p></li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        topicsCard.innerHTML = `<p>No topics available for this course.</p>`;
    }
}

// Call the function when the page loads
window.onload = getCourseData;
