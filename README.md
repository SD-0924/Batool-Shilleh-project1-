# Web Topics - Interactive Web Design

Welcome to **Web Topics**, an interactive and modern website showcasing key web development concepts. This project features a responsive design, dynamic components, and a clean user interface, supporting both **light** and **dark mode** to enhance user experience.

[Website Preview](https://sd-0924.github.io/Batool-Shilleh-project1-/)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Usage](#usage)
- [Dark Mode](#dark-mode)
- [Responsive Design](#responsive-design)
- [API Documentation](#api-documentation)
- [Author](#author)
- [License](#license)

## Features
- **Responsive Design**: Adapts to various screen sizes, ensuring a great experience on mobile and desktop devices.
- **Dark Mode Toggle**: Users can easily switch between light and dark modes.
- **Interactive Content**: Includes clickable buttons, star ratings, and topic highlights.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/SD-0924/Batool-Shilleh-project1-.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd Batool-Shilleh-project1
   ```

3. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

## Technologies

- **HTML5**: Structure and semantic elements.
- **CSS3**: Styling and layout, including Flexbox and responsive design.
- **JavaScript**: Interactive features like dark mode toggle and star rating system.
- **Google Fonts**: For beautiful typography using the "Nunito Sans" font.
- **Ionicons**: For modern icon usage in buttons and lists.

## Usage

- The website consists of **HTML topics** divided into sections, each with a dedicated card explaining the topic.
- You can add your favorite topics by clicking the **Add to Favorites** button.
- **Dark Mode** can be toggled by clicking the moon icon in the top right corner.

## Dark Mode

The project supports dark mode using simple JavaScript to toggle the theme:

```javascript
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
```

Dark mode styling is handled using CSS variables:

```css
body.dark-mode {
  --bg_default: #1a1a1a;
  --bg_body: #282828;
  --body-text: #ededed;
}
```

## Responsive Design

The layout is fully responsive, ensuring that content is displayed optimally on all devices. CSS media queries are used to adjust the layout based on screen width:

```css
@media (max-width: 768px) {
  .main-card {
    flex-direction: column;
  }
}
```

## API Documentation

The project utilizes an API to fetch course data. Below are the API endpoints used:

| Method | Endpoint                   | Description                               | Request Body           | Response                                |
|--------|----------------------------|-------------------------------------------|------------------------|-----------------------------------------|
| GET    | `/api/topics`              | Fetches a list of all available topics. | N/A                    | An array of topic objects.              |
| GET    | `/api/topics/{id}`         | Fetches detailed information about a topic by its ID. | N/A                    | A single topic object with details.     |
| POST   | `/api/favorites`           | Adds a topic to the user's favorites.    | `{ "id": "<topic_id>" }` | Confirmation message.                   |

You can also explore the API through the live demo available at [Render Demo](https://batool-shilleh-project1.onrender.com).

## Author

Developed by **Batool Shilleh**.

- GitHub: [batooldshilleh](https://github.com/batooldshilleh)
- LinkedIn: [Batool Shilleh](https://www.linkedin.com/in/batool-shilleh/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
